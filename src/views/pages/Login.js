import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import OtpDialog from "./OtpDialog";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "src/context/Auth";
import { toast } from "react-hot-toast";

// import ForgotPasswordDailog from "./ForgotPasswordDailog";

// const validationSchema = Yup.object().shape({
//   emailOrPhone: Yup.string()
//     .required("Please enter a valid email address or phone number"),
//   verificationCode: Yup.string()
//     .required("Entered OTP code is invaild")
//     .matches(/^\d+$/, "Verification code must contain only numbers"),
// });
const validationSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("Please enter a valid email address or phone number")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
  verificationCode: Yup.string()
    .required("Entered OTP code is invalid")
    .matches(/^\d+$/, "Verification code must contain only numbers")
    .max(6, "Verification code must be at most 6 characters long"),
});


const styles = {
  imgSizeBox: {
    height: "185px",
    width: "185px",
  },
  loginTypo1: {
    fontFamily: "Playfair Display",
    fontSize: "48px",
    fontWeight: 700,
    margin: "20px 0",
    color: "#2D2C2C",
  },
  loginTypo2: {
    fontFamily: "Nunito Sans",
    fontSize: "22px",
    fontWeight: 400,
    color: "rgba(79, 79, 79, 0.7)",
    margin: "20px 0",
  },
  divider: {
    height: "5px",
    width: "95px",
    marginTop: "4px",
    backgroundColor: "#7E563D",
  },
  loginTypo3: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: 600,
    color: "#4F4F4F",
    margin: "5px 0",
  },

  button: {
    background: "#7E563D",
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    fontWeight: 700,
    margin: "10px 0 20px 0",
    borderRadius: "30px",
    "&:hover": {
      color: "#7E563D",
      backgroundColor: "#7E563D",
    },
  },
  loginTypo4: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
  },
  signUpTypo4: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 700,
    color: "#008CF2",
  },
  textFieldStyle: {
    background: "#00000008",
    borderRadius: "30px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: "0px",
      },
    },
  },
  getCode: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 600,
    // lineHeight: "16.34px",
    color: "#174B70",
    width: "100px",
    marginRight: "10px",
  },
  placeHolderStyle: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "19.1px",
    // color:"#00000066",
  },
  mainBox: {
    margin: "15px 0",
    paddingLeft: "20px",
  },
  mainBoxBorder: {
    borderLeft: "3px solid #7E563D",
    paddingLeft: "18px !important",
  },
};

const Login = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isCodeFocused, setCodeFocused] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);

  const {profileAPi} = useContext(AuthContext);

  const handleEmailFocus = () => {
    setEmailFocused(false);
    setCodeFocused(true);
  };

  const handleCodeFocus = () => {
    setCodeFocused(false);
    setEmailFocused(true);
  };
  
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  
  
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission status
  const history = useHistory();


  const handleClickOpen = async (emailOrPhoneValue) => {
    try {
      console.log("input value chetan.sharma@indicchain.com",emailOrPhoneValue);
      const res = await axios({
        method: "POST",
        url: apiConfig.userLoginSendOTP,
        data: {
          emailOrMobile: emailOrPhoneValue, 
        },
      });
      
      if (res.data.responseCode === 200) {
        toast.success(res?.data?.responseMessage);

      } else {
        
        toast.error("Failed to SignUp");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  const handleGetCodeClick = () => {
    const emailOrPhoneValue = document.getElementById("emailOrPhone").value;
    
  handleClickOpen(emailOrPhoneValue);
  
  };


  const handleSubmit = async (values) => {
    setIsSubmitting(true); 
    
    try {
      if (values.emailOrPhone && values.verificationCode) {
        console.log("emailOrPhoneValue is =>", values.emailOrPhone);
        const res = await axios({
          method: "POST",
          url: apiConfig.verifyLoginOTP,
          data: {
            emailOrMobileNumber: values.emailOrPhone,
            otp: String(values.verificationCode),
          },
        });
          console.log("lkajsdlkajdjlkjlkasjdlk",res?.data)
        if (res?.data?.responseCode === 200 ) {
          toast.success(res?.data?.responseMessage);
         
          window.sessionStorage.setItem("ELEGLAMToken", res?.data?.result?.token);

          profileAPi();
          const tokenu = window.sessionStorage.getItem("ELEGLAMToken");
          console.log("Token in local storage:===>>>>", tokenu);
          profileAPi();
          history.push("/");
          window.location.reload();
        } 
      } 
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }finally {
      setIsSubmitting(false); // Reset form submission status
    }
  };
  
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      verificationCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit, 
  });
  return (
    <Box style={{ padding: "2% 5%" }}>
      <Grid container>
        <Grid item xs={11} md={5} style={{ margin: "0 2%" }}>
          <Box>

            <Box style={{ margin: "10%" }}>
              <Typography style={styles.loginTypo1}>Hello!</Typography>
              <Typography style={styles.loginTypo2}>
                Please Enter Your Personal Details for Sign In.
              </Typography>
              <Divider style={styles.divider} />
              <form onSubmit={formik.handleSubmit}>
                <Box
                  style={{
                    margin: "15px 0",
                    paddingLeft: "20px",
                    ...(isEmailFocused
                      ? styles.mainBoxBorder
                      : styles.mainBoxFocused),
                  }}
                >
                  <Typography style={styles.loginTypo3}>
                    Enter Email or Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    id="emailOrPhone"
                    name="emailOrPhone"
                    onFocus={handleCodeFocus}
                    autoComplete="off"
                    onBlur={(e) => {
                      setEmailFocused(false);
                      formik.handleBlur(e);
                    }}
                    // label="Enter Email or Phone Number"
                    value={formik.values.emailOrPhone}
                    onChange={formik.handleChange}
                    placeholder="Enter email address or phone number"
                    style={styles.textFieldStyle}
                    
                  />
                  {formik.touched.emailOrPhone &&
                    formik.errors.emailOrPhone && (
                      <Typography
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                      >
                        {formik.errors.emailOrPhone}
                      </Typography>
                    )}
                </Box>
                <Box
                  style={{
                    margin: "15px 0",
                    paddingLeft: "20px",
                    marginTop: "4px",
                    ...(isCodeFocused
                        ? styles.mainBoxBorder
                        : styles.mainBoxFocused),
                  }}
                >
                  <Typography style={styles.loginTypo3}>
                    Verification Code
                  </Typography>
                  <TextField
                    fullWidth
                    id="verificationCode"
                    name="verificationCode"
                    // label="Verification Code"
                    autoComplete="off"
                    value={formik.values.verificationCode}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      setCodeFocused(false);
                      formik.handleBlur(e);
                    }}
                    onFocus={ handleEmailFocus}
                    placeholder="Enter verification code"
                    style={styles.textFieldStyle}
                    InputProps={{
                      style: styles.placeHolderStyle,
                      inputMode: "numeric",
                      maxLength: 6
                    }}
                  />
                  {formik.touched.verificationCode &&
                    formik.errors.verificationCode && (
                      <Typography
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                      >
                        {formik.errors.verificationCode}
                      </Typography>
                    )}
                </Box>
                <Button fullWidth type="submit" style={styles.button} onClick={handleSubmit}>
                  LOGIN
                </Button>
              </form>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Typography style={styles.loginTypo4}>
                  Don't have an account ?
                </Typography>
                <Typography
                  style={{
                    ...styles.signUpTypo4,
                    marginLeft: "5px",
                    textDecoration: "none",
                  }}
                  component={Link}
                  to="/signup"
                  variant="body1" // add a variant to specify the typography style
                >
                  Sign Up
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <ForgotPasswordDailog /> */}
      {/* <ResetPassword open={openOtp} onClose={() => setOpenOtp(false)} /> */}
    </Box>
  );
};

export default Login;
