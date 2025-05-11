/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Avatar,
  Box,
  makeStyles,
  useMediaQuery,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from "react-hot-toast";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    margin: "0px 100px",
  },
  profileData: {
    padding: "20px 0px 50px 0px",
  },
  profileHeader: {
    height: "100px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  profileHeaderHeading: {
    color: "#2D2C2C",
    marginLeft: "20px",
    fontFamily: "Playfair Display",
    fontWeight: "700"
  },
  customButton: {
    width: "169px",
    height: "50px",
    marginTop: "10px",
    borderRadius: "30px",
    backgroundColor: "#7E563D",
    color: "white",
    "&:hover": {
      backgroundColor: "#7E563D",
    },
  },
  MainHeading: {
    fontFamily: "Playfair Display",
    color: "#2D2C2C",
    fontWeight: "700",
  },
  leftContent: {
    fontFamily: "Playfair Display",
    fontSize: "16px",
    fontWeight: "500",
    color: "#2D2C2C",
  },
  rightContent: {
    color: "#4F4F4F",
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "400",
  },
  profileSmallContainer: {
    margin: "0px 30px",
  },
  label: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "500",
    color: "#2D2C2C",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
  divider:{
    color:"#D8D7D7",
    maxWidth:"1449px"
  },
  rightGrid:{
   
  }
}));

// Custom dropdown component
// Custom dropdown component
const CustomDropdown = ({ field, form, ...props }) => {
  const error = form && form.errors ? form.errors[field.name] : undefined;
  const touched = form && form.touched ? form.touched[field.name] : undefined;

  return (
    <FormControl fullWidth>
      <TextField
        select
        {...field}
        {...props}
        InputProps={{
          style: {
            border: "1px solid #4F4F4F",
            borderRadius: "10px",
          },
        }}
        error={error && touched}
        helperText={error && touched ? error : ""}
      >
        {props.children}
      </TextField>
    </FormControl>
  );
};

const EditProfile = () => {
  const classes = useStyles();
  const history = useHistory();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const handleImageResponsive = useMediaQuery((theme) =>
    theme.breakpoints.down(1150)
  );
  const { userDetails, profileAPi } = useContext(AuthContext);

  useEffect(() => {
    profileAPi();
  }, []);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [state, setState] = useState(userDetails?.email || "");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState(userDetails?.mobileNumber || "");
  const [state4, setState4] = useState("");
  const [verified, setVerified] = useState("");
  const [verifiedphone, setVerifiedPhone] = useState("");
  const existEmail = userDetails?.email;
  const existMobile = userDetails?.mobileNumber;
  const [canUpdateProfile, setCanUpdateProfile] = useState(false);
  const [canUpdateProfilephone, setCanUpdateProfilePhone] = useState(false);
  useEffect(() => {
    if (state === existEmail || state === verified ) {
      setCanUpdateProfile(true);
    } else if(state3 === existMobile || state3 === verifiedphone) {
      setCanUpdateProfilePhone(true);
    } else {
      setCanUpdateProfile(false);
      setCanUpdateProfilePhone(false);
      // toast.error("Please verify your email first.");
    }
  }, [state, existEmail, verified, state3,existMobile,verifiedphone]);
  
  

 
  console.log(state,"existEmailexistEmailv");
  const handleUpdateProfile = async (values,state,state3) => {
    const communicationAddress = `${values.streetOrArea}, ${values.city}, ${values.state}, ${values.country}, ${values.postalCode}`;
    setUpdateProfile(true);
    try {
      console.log("dodoodododod",state,state3)
      const res = await axios({
        method: "PUT",
        url: apiConfig.editUserProfileWeb,
        headers: { token: window.sessionStorage.getItem("ELEGLAMToken") },
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: state,
          mobileNumber: state3,
          communicationAddress: communicationAddress,
          profilePic: avatarImage,
        },
      });
      if (res?.data?.responseCode === 200) {
        setUpdateProfile(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setUpdateProfile(false);
    } finally {
      setUpdateProfile(false);
    }
  };

  const [avatarImage, setAvatarImage] = useState(userDetails?.profilePic || "Image/myProfileImg.png"); // Initial avatar image
  const fileInputRef = useRef(null);

  const handleAvatarChange = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Formik initial values and validation
  const initialValues = {
    firstName: userDetails?.firstName || "",
    lastName: userDetails?.lastName || "",
    email: userDetails?.email || "",
    phoneNumber: userDetails?.mobileNumber || "",
    streetOrArea: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    }

    // if (!values.email) {
    //   errors.email = "Email is Required";
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //   errors.email = "Invalid email address";
    // }

    // if (!values.phoneNumber) {
    //   errors.phoneNumber = "Phone Number is Required";
    // } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
    //   errors.phoneNumber = "Phone Number should be 10 digits";
    // }

    if (!values.streetOrArea) {
      errors.streetOrArea = "Street or Area is Required";
    }

    if (!values.city) {
      errors.city = "City is Required";
    }

    if (!values.state) {
      errors.state = "State is Required";
    }

    if (!values.country) {
      errors.country = "Country is Required";
    }

    if (!values.postalCode) {
      errors.postalCode = "Postal Code is Required";
    } else if (!/^\d{6}$/i.test(values.postalCode)) {
      errors.postalCode = "Postal Code should be 6 digits";
    }

    return errors;
  };
  

  const userSignupSendEmailOTP = async (point) => {

    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.userSignupSendEmailOTP,
        data: {
          emailorMobile: point, 
        },
      });
      console.log("response", res);
      if (res.data.responseCode === 200) {
        console.log(res.data,"kkkkkk");
        toast.success(res?.data?.responseMessage);
      } else {
        toast.error(res?.data?.responseMessage);
      }
    } 
  
    catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ?? "Something went wrong!"
      );
    }
  };

  const handleVerify = async (point, point2) => {
    

    try {
      console.log("first",point,point2)
      const otpVerificationRes = await axios({
        method: "PATCH",
        url: apiConfig.verifyEmailorMobileOTP,
        data: {
          emailorMobile: point,
          otp: String(point2),
       },
      });

      if (
        otpVerificationRes?.data?.responseCode === 200 ||
        otpVerificationRes?.data?.message === "Email OTP Verified Successfully"
      ) {
        toast.success(otpVerificationRes?.data?.responseMessage);

        try {
          const signupRes = await axios({
            method: "POST",
            url: apiConfig.userSignup,
            data: {
              emailorMobile: point,
            },
          });

          if (signupRes?.data?.responseCode === 200) {
            toast.success(signupRes?.data?.responseMessage);
            setVerified(signupRes?.data?.result?.email);
            setVerifiedPhone(signupRes?.data?.result?.mobileNumber);
            console.log("yuyuyuyuyuy",verified)
            setState2("");
            setState4("");
            setEditedFields((prevFields) => ({ ...prevFields, email: false }));
          } else {
            toast.error("Failed to SignUp");
          }
        } catch (error) {
          toast.error(
            error?.response?.data?.responseMessage ||
              "Something went wrong. Please try again."
          );
        }

        // history.push("/sign-in");
      } else {
        toast.error("Failed to verify OTP");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    } 
  };


  const [editedFields, setEditedFields] = useState({
    email: false,
    phoneNumber: false,
  });

  const handleEditClick = (field) => {
    setEditedFields((prevFields) => ({ ...prevFields, [field]: true }));
  };

  const handleEmailEditClick = () => {

    const point = state; 

    
    userSignupSendEmailOTP(point);
  };
  
  const handlePhoneNumberEditClick = () => {
    const point = state3; 
    userSignupSendEmailOTP(point);
  };
  const handleEmailEditClick2 = () => {
    const point = state; 
    const point2 = state2; 
    handleVerify(point,point2);
  };
  
  const handlePhoneNumberEditClick2 = () => {
    const point = state3;
    const point2 = state4; 
    handleVerify(point,point2);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    if (!canUpdateProfile) {
      toast.error("Please verify your email first.");
      return;
    }
    if (!canUpdateProfilephone) {
      toast.error("Please verify your email first.");
      return;
    }
    try {
      await handleUpdateProfile(values, state, state3);
      resetForm();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    setSubmitting(false);
  };
  



  

  return (
    <div
      className={
        isSmallScreen ? classes.profileSmallContainer : classes.profileContainer
      }
    >
      <Box className={classes.profileHeader}>
        <Box>
          <ArrowBackIcon
            style={{ color: "#2D2C2C" }}
            fontSize="large"
            onClick={() => history.goBack()}
          />
        </Box>
        <Typography variant="h3" className={classes.profileHeaderHeading}>
          Edit Profile
        </Typography>
      </Box>

      <Divider className={classes.divider} />
      <Grid container className={classes.profileData} spacing={3}>
        {/* First Column */}
        <Grid
          item
          xs={12}
          sm={handleImageResponsive ? 12 : 2}
          md={handleImageResponsive ? 12 : 2}
        >
          {/* Avatar with 50% radius */}
          <Box display="flex" justifyContent="start">
            <Avatar
              alt="User Profile Picture"
              src={avatarImage}
              style={{ width: 150, height: 150, borderRadius: "50%" }}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <IconButton
              aria-label="change-avatar"
              style={{
                // position: "absolute",
                // bottom: 5,
                // right: 5,
                // backgroundColor: "white",
                marginTop: "100px",
                marginLeft: "-25px",
                borderRadius: "50%",
              }}
              onClick={handleAvatarChange}
            >
              <PhotoCameraIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid
          item
          xs={12}
          sm={handleImageResponsive ? 12 : 10}
          md={handleImageResponsive ? 12 : 10}
          className={classes.rightGrid}
        >
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* Basic Info */}
                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.MainHeading}>
                      Basic Info :
                    </Typography>
                  </Grid>
                  {/* First Name */}
                  <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      First Name:
                    </Typography>
                    <Field
                      name="firstName"
                      as={TextField}
                      // variant="outlined"
                      defaultValue={initialValues?.firstName}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                        inputProps: {
                          placeholder: "Enter first Name", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  {/* last Name */}
                  <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      Last Name:
                    </Typography>
                    <Field
                      name="lastName"
                      as={TextField}
                      placeholder="Enter last Name"
                      defaultValue={initialValues?.lastName}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                        inputProps: {
                          placeholder: "Enter last Name", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>
                  {/* Email */}
                  <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      Email:
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Field
                        name="email"
                        as={TextField}
                        fullWidth
                        className={classes.leftContent}
                        // defaultValue={userDetails?.email}
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                       }}
                        InputProps={{
                          style: {
                            border: "1px solid rgba(0, 0, 0, 0.03)",
                            borderRadius: "50px",
                            backgroundColor:"rgba(0, 0, 0, 0.03)"
                          },
                          inputProps: {
                            placeholder: "Enter email address", // Change placeholder text as needed
                            style: {
                              color: "#00000066",
                              fontFamily: "Nunito Sans",
                              fontWeight: "400",
                              fontSize: "16px",
                            },
                          },
                        }}
                      />

                      {/* Edit button for Email */}
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: "10px" }}
                        disabled={state === existEmail || state === verified}
                        onClick={() => {
                          handleEditClick('email');
                          handleEmailEditClick();
                        }}
                        
                      >
                        Edit
                      </Button>
                      {/* "Get Code" button */}
                    </Box>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* Render verification code field below email field if it's being edited */}
                    {editedFields.email && (state !== existEmail || state !== verified) && !verified && (
                      <div>
                        <Typography variant="body1" className={classes.label}>
                          Verification Code :
                        </Typography>
                        <Box display="flex" alignItems="center">
                          <Field
                            name="emailVerificationCode"
                            as={TextField}
                            fullWidth
                            className={classes.leftContent}
                            value={state2}
                            onChange={(e) => {
                              setState2(e.target.value);
                           }}
                            InputProps={{
                              style: {
                                border: "1px solid rgba(0, 0, 0, 0.03)",
                                borderRadius: "50px",
                                backgroundColor:"rgba(0, 0, 0, 0.03)"
                              },
                              inputProps: {
                                placeholder: "Enter verification code",
                                style: {
                                  color: "#00000066",
                                  fontFamily: "Nunito Sans",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                },
                              },
                            }}
                          />

                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: "10px" }}
                        onClick={() => handleEmailEditClick2()}
                      >
                        Submit
                      </Button>
                        </Box>
                        <ErrorMessage
                          name="emailVerificationCode"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    )}
                  </Grid>

                  {/* Mobile Number */}
                  <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      Phone Number:
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Field
                        name="phoneNumber"
                        as={TextField}
                        fullWidth
                        className={classes.leftContent}
                        // defaultValue={initialValues?.phoneNumber}
                        value={state3}
                        onChange={(e) => {
                          setState3(e.target.value);
                       }}
                        InputProps={{
                          style: {
                            border: "1px solid rgba(0, 0, 0, 0.03)",
                            borderRadius: "50px",
                            backgroundColor:"rgba(0, 0, 0, 0.03)"
                          },
                          inputProps: {
                            placeholder: "Enter Phone Number", // Change placeholder text as needed
                            style: {
                              color: "#00000066",
                              fontFamily: "Nunito Sans",
                              fontWeight: "400",
                              fontSize: "16px",
                            },
                          },
                        }}
                      />

                      {/* Edit button for Phone Number */}
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: "10px" }}
                        disabled={state3 === existMobile || state3 === verifiedphone}
                        onClick={() => {
                          handleEditClick('phoneNumber');
                          handlePhoneNumberEditClick();
                        }} 
                      >
                        Edit
                      </Button>
                      {/* "Get Code" button */}
                    </Box>
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
              
                    {editedFields.phoneNumber && (state3 !== existMobile || state3 !== verifiedphone) && !verifiedphone && (
                      <div>
                        <Typography variant="body1" className={classes.label}>
                          Verification Code :
                        </Typography>
                        <Box display="flex" alignItems="center">
                          <Field
                            name="phoneNumberVerificationCode"
                            as={TextField}
                            fullWidth
                            className={classes.leftContent}
                            value={state4}
                            onChange={(e) => {
                              setState4(e.target.value);
                           }}
                            InputProps={{
                              style: {
                                border: "1px solid rgba(0, 0, 0, 0.03)",
                                borderRadius: "50px",
                                backgroundColor:"rgba(0, 0, 0, 0.03)"
                              },
                              inputProps: {
                                placeholder: "Enter verification code",
                                style: {
                                  color: "#00000066",
                                  fontFamily: "Nunito Sans",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                },
                              },
                            }}
                          />
                           <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: "10px" }}
                        onClick={() => handlePhoneNumberEditClick2()}
                      >
                        Submit
                      </Button>
                        </Box>
                        <ErrorMessage
                          name="phoneNumberVerificationCode"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    )}
                  </Grid>

                  {/* Saved Address */}
                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.MainHeading}>
                      {" "}
                      Address Detail :{" "}
                    </Typography>
                  </Grid>
                  <Grid item  xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      Street or Area:
                    </Typography>
                    <Field
                      name="streetOrArea"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                        inputProps: {
                          placeholder: "Enter Street or Area", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="streetOrArea"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  <Grid item  xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      City:
                    </Typography>
                    <Field
                      name="city"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                        inputProps: {
                          placeholder: "Enter your city", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>
                  {/* State Dropdown */}
                  <Grid item  xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      State:
                    </Typography>
                    <Field
                      name="state"
                      as={TextField}
                      fullWidth
                      className={classes.label}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                        inputProps: {
                          placeholder: "Enter your State", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="state"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  {/* Country Dropdown */}
                  <Grid item  xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      Country:
                    </Typography>
                    <Field
                      name="country"
                      as={TextField}
                      fullWidth
                      className={classes.label}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                        inputProps: {
                          placeholder: "Enter your Country", // Change placeholder text as needed
                          style: {
                            color: "#00000066",
                            fontFamily: "Nunito Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>

                  <Grid item  xs={12} sm={12} md={4}>
                    <Typography variant="body1" className={classes.label}>
                      Postal Code:
                    </Typography>
                    <Field
                      name="postalCode"
                      as={TextField}
                      placeholder="Postal Code"
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid rgba(0, 0, 0, 0.03)",
                          borderRadius: "50px",
                          backgroundColor:"rgba(0, 0, 0, 0.03)"
                        },
                      }}
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="contained"
                      className={classes.customButton}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Update profile
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditProfile;
