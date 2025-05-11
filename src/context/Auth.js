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
  const dealData = [
    {
      image: "/Image/Silver360.jpg",
      trader: "Silver360",
      product: "Flower Cut CZ Stone Single line Necklace",
      price: 760,
      originalPrice: 810,
    },
    {
      image: "/Image/EmeraldTriple1000.jpg",
      trader: "EmeraldTriple1000",
      product: "Triple Line Emerald Necklace",
      price: 1537,
      originalPrice: 1587,
    },
    {
      image: "/Image/Silver980.jpg",
      trader: "Silver980",
      product: "Emerald green CZ Choker Set",
      price: 1567,
      originalPrice: 1617,
    },
    {
      image: "/Image/Green690.jpg",
      trader: "Green690",
      product: "AD Stone Studded Jewellery set",
      price: 1263,
      originalPrice: 1313,
    },
    {
      image: "/Image/Jhumki520.jpg",
      trader: "Jhumki520",
      product: "Rose gold Plated AD Jhumki with Maangtika",
      price: 1167,
      originalPrice: 1217,
    },
    {
      image: "/Image/2TriplelayerRyby950.jpg",
      trader: "2TriplelayerRyby950",
      product: "Triple layer Ad stone studded Ruby jewellery Set",
      price: 1550,
      originalPrice: 1600,
    },
    {
      image: "/Image/Triplelayergreen660.jpg",
      trader: "Triplelayergreen660",
      product: "Layered CZ stone Emerald Necklace with earring",
      price: 1260,
      originalPrice: 1310,
    },
    {
      image: "/Image/tripleayeredgreen800.jpg",
      trader: "tripleayeredgreen800",
      product: "Layered green AD jewellery set",
      price: 1300,
      originalPrice: 1350,
    },
    {
      image: "/Image/NITAambaninecklace.jpg",
      trader: "NITAambaninecklace",
      product: "Emerald Green CZ stone studded long Necklace with studs",
      price: 1210,
      originalPrice: 1260,
    },
    {
      image: "/Image/triplelayeredpurple800.jpg",
      trader: "triplelayeredpurple800",
      product: "Layered Purple AD jewellery set",
      price: 1300,
      originalPrice: 1350,
    },
    {
      image: "/Image/Sideflowerruby.jpg",
      trader: "Sideflowerruby",
      product: "Side Flower Ruby red choker Set with earrings",
      price: 1345,
      originalPrice: 1395,
    },
    {
      image: "/Image/Rosegoldbutterfly.jpg",
      trader: "Rosegoldbutterfly",
      product: "Rose Gold Plated CZ Ring",
      price: 350,
      originalPrice: 400,
    },
    {
      image: "/Image/Ruby690.jpg",
      trader: "Ruby690",
      product: "AD Stone Studded Jewellery set",
      price: 1263,
      originalPrice: 1313,
    },
    {
      image: "/Image/Silverdbutterfly.jpg",
      trader: "Silverdbutterfly",
      product: "Silver Plated CZ Ring",
      price: 350,
      originalPrice: 400,
    },
    {
      image: "/Image/triplelayeredrubye800.jpg",
      trader: "triplelayeredrubye800",
      product: "Layered Purple AD jewellery set",
      price: 1300,
      originalPrice: 1350,
    },
    {
      image: "/Image/rosegold360.jpg",
      trader: "rosegold360",
      product: "Flower Cut CZ Stone Single line Necklace",
      price: 760,
      originalPrice: 810,
    },
    {
      image: "/Image/Triplelayersilver660.jpg",
      trader: "Triplelayersilver660",
      product: "Layered CZ stone silver Necklace with earring",
      price: 1260,
      originalPrice: 1310,
    },
    {
      image: "/Image/SilveTriple1000.jpg",
      trader: "SilveTriple1000",
      product: "Triple Line Silver Necklace",
      price: 1537,
      originalPrice: 1587,
    },
    {
      image: "/Image/GreenTriple1000.jpg",
      trader: "GreenTriple1000",
      product: "Triple Line Green Necklace",
      price: 1537,
      originalPrice: 1587,
    },
    {
      image: "/Image/Jhumki520_2.jpg",
      trader: "Jhumki520_2",
      product: "Rose gold Plated AD Jhumki with Maangtika",
      price: 1167,
      originalPrice: 1217,
    },
    {
      image: "/Image/Purple470.jpg",
      trader: "Purple470",
      product: "Minimalist Classy CZ Purple necklace",
      price: 960,
      originalPrice: 1010,
    },
    {
      image: "/Image/Multi360.jpg",
      trader: "Multi360",
      product: "Single Line Multicolor Necklace",
      price: 710,
      originalPrice: 760,
    },
    {
      image: "/Image/NITAambaninecklace_multi.jpg",
      trader: "NITAambaninecklace_multi",
      product: "Multicolor CZ stone studded long Necklace with studs",
      price: 1210,
      originalPrice: 1260,
    },
    {
      image: "/Image/Silverdbutterfly_2.jpg",
      trader: "Silverdbutterfly_2",
      product: "Silver Plated CZ Ring",
      price: 350,
      originalPrice: 400,
    },
    {
      image: "/Image/101010.jpg",
      trader: "101010",
      product: "Single Line emerald Flower CZ Necklace",
      price: 999,
      originalPrice: 1049,
    },
    {
      image: "/Image/NITAambaninecklace_2.jpg",
      trader: "NITAambaninecklace_2",
      product: "CZ stone studded long Necklace with studs",
      price: 1210,
      originalPrice: 1260,
    },
    {
      image: "/Image/Blue920.jpg",
      trader: "Blue920",
      product: "American diamond Blue Choker Set",
      price: 1499,
      originalPrice: 1549,
    },
    {
      image: "/Image/Earringscombo.jpg",
      trader: "Earringscombo",
      product: "Oxidized earrings Combo",
      price: 250,
      originalPrice: 300,
    },
    {
      image: "/Image/MintJewelleryset620.jpg",
      trader: "MintJewelleryset620",
      product: "Mint green AD Single line necklace with earrings and Maangtikka",
      price: 1220,
      originalPrice: 1270,
    },
    {
      image: "/Image/5SilverFK.jpg",
      trader: "5SilverFK",
      product: "Silver CZ Stone Necklace with Earrings",
      price: 999,
      originalPrice: 1049,
    },
    {
      image: "/Image/Silverdoublelayer.jpg",
      trader: "Silverdoublelayer",
      product: "Silver Double Layer Necklace set",
      price: 1300,
      originalPrice: 1350,
    },
    {
      image: "/Image/Rubbyreddoublelayer.jpg",
      trader: "Rubbyreddoublelayer",
      product: "Ruby red CZ stone Studded Jewellery set",
      price: 1310,
      originalPrice: 1360,
    },
    {
      image: "/Image/Bluestone460.jpg",
      trader: "Bluestone460",
      product: "CZ Blue Single Line",
      price: 890,
      originalPrice: 940,
    },
    {
      image: "/Image/6Blue680.jpg",
      trader: "6Blue680",
      product: "Vintage style blue Necklace with earrings",
      price: 1320,
      originalPrice: 1370,
    },
    {
      image: "/Image/Purple470_2.jpg",
      trader: "Purple470_2",
      product: "Minimalist Classy CZ Purple necklace",
      price: 960,
      originalPrice: 1010,
    },
    {
      image: "/Image/Multi360-2.jpg",
      trader: "Multi360-2",
      product: "Single Line Multicolor Necklace",
      price: 710,
      originalPrice: 760,
    },
    {
      image: "/Image/Templedoublelayer960.jpg",
      trader: "Templedoublelayer960",
      product: "Multicolor CZ Stone Studded Double Layer Gold Plated South Indian Jewellery set",
      price: 1660,
      originalPrice: 1710,
    },
    {
      image: "/Image/Silver360.jpg",
      trader: "Silver360",
      product: "Flower Cut CZ Stone Single line Necklace",
      price: 760,
      originalPrice: 810,
    },
    {
      image: "/Image/7maangtika.jpg",
      trader: "7maangtika",
      product: "Rose gold Plated Maangtikka",
      price: 399,
      originalPrice: 449,
    },
    {
      image: "/Image/Triplelayersilver660_2.jpg",
      trader: "Triplelayersilver660_2",
      product: "Layered CZ stone silver Necklace with earring",
      price: 1260,
      originalPrice: 1310,
    },
    {
      image: "/Image/9Emerald740.jpg",
      trader: "9Emerald740",
      product: "AD stone Studded Emerald Green Jewellery set",
      price: 1440,
      originalPrice: 1490,
    },
    {
      image: "/Image/triplelayeredrubye800-2.jpg",
      trader: "triplelayeredrubye800-2",
      product: "Layered Purple AD jewellery set",
      price: 1300,
      originalPrice: 1350,
    },
  ];
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
    dealData,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
