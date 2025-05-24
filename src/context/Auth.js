import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    sessionStorage.setItem("ELEGLAMToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    sessionStorage.removeItem("ELEGLAMToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin() {
  const accessToken = window.sessionStorage.getItem("ELEGLAMToken");
  return accessToken ? true : false;
}
export default function AuthProvider(props) {
  
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [userData] = useState({});
  const[userDetails,setUserDetails] = useState();


  console.log(userDetails,"userDetailsuserDetails");
  const profileAPi =async()=>{
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.getProfile,
        headers: {token:window.sessionStorage.getItem("ELEGLAMToken")},
      });
      
      if (res.data.responseCode === 200) {
        console.log(res?.data?.result);
        console.log(res?.data?.responseMessage || "Data fetch successfully")
        setUserDetails(res?.data?.result)

      } else {
        
        console.log("Failed to SignUp");
      }
    }catch (error) {
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  }
  useEffect(() => {
    profileAPi();
  }, []);

  let data = {
    userLoggedIn: isLogin,
    userData,
    setUserDetails,
    userDetails,
    profileAPi,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
