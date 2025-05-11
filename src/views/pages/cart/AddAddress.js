/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Button,
  TextField,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    margin: "0px 10px",
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
  },
  customButton: {
    width: "169px",
    height: "50px",
    fontSize: "16px !important",
    marginTop: "10px",
    borderRadius: "30px",
    backgroundColor: "#7E563D",
    fontWeight: "400 !important",
    color: "white",
    lineHeight: "20px",
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
}));



const AddAddress = ({editAddress, isEdit, setShowAddress}) => {
    const { userDetails, profileAPi } = useContext(AuthContext);
  
  console.log("isEdit",isEdit )
  const { firstName, lastName, phone,landmark, houseno, streetOrArea, district, state, postalCode } = editAddress;

  const [autoState, setAutoState] = useState(isEdit ? state : "");
  const [autoDistrict, setAutoDistrict] = useState(isEdit ? district : "");
  const [isFetching, setIsFetching] = useState(false);

  
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
 

  // Formik initial values and validation
  const initialValues = {
    firstName: isEdit ? firstName : "",
    lastName: isEdit ? lastName : "",
    houseno: isEdit ? houseno : "",
    landmark: isEdit ? landmark : "",
    phoneNumber: isEdit ? phone : "",
    streetOrArea: isEdit ? streetOrArea : "",
    district: isEdit ? district : "",
    state: isEdit ? state : "",
    postalCode: isEdit ? postalCode : "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    } else if (values.firstName.length < 2 || values.firstName.length > 50) {
      errors.firstName = "First Name should be between 2 and 50 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    } else if (values.lastName.length < 2 || values.lastName.length > 50) {
      errors.lastName = "Last Name should be between 2 and 50 characters";
    }

  

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required";
    } else if (!/^\+?\d{8,15}$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!values.streetOrArea) {
      errors.streetOrArea = "Street or Area is Required";
    } else if (
      values.streetOrArea.length < 2 ||
      values.streetOrArea.length > 100
    ) {
      errors.streetOrArea =
        "Street or Area should be between 2 and 100 characters";
    }

    if (!values.postalCode) {
      errors.postalCode = "Pincode is required";
    } else if (!/^\d{6}$/.test(values.postalCode)) {
      errors.postalCode = "Invalid Pincode";
    }
  
   

    return errors;
  };


  const handlePincodeChange = async (e, setFieldValue) => {
    const pincode = e.target.value;
    setFieldValue("postalCode", pincode);

    if (pincode.length === 6) {
      setIsFetching(true); 
      try {
        const response = await axios({
                method: "GET",
                url: apiConfig.validatePinCode,
                params: {pinCode:pincode}
               
              });
        if (response.data && response.data.responseCode === 200) {
          toast.success(response.data.responseMessage)
          setAutoState(response.data.result.delivery_codes[0]?.postal_code.city);
          setAutoDistrict(response.data.result.delivery_codes[0]?.postal_code.district);
          setFieldValue("state", response.data.result.delivery_codes[0]?.postal_code.city);
          setFieldValue("district", response.data.result.delivery_codes[0]?.postal_code.district);
        } else {
          toast.error("Invalid Pincode. Please enter again.");
        }
      } catch (error) {
        toast.error("Failed to fetch state and district");
      }
      setIsFetching(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
  
    // Get existing addresses (if any), otherwise initialize an empty array
    let updatedAddresses = [...(userDetails?.address || [])];
  
    // If editing, remove the old address with editAddress._id
    if (isEdit) {
      updatedAddresses = updatedAddresses.filter(
        (addr) => addr._id !== editAddress._id
      );
    }
  
    // Create new address object
    const newAddress = {
      _id: isEdit ? editAddress._id : undefined, // Keep ID if editing
      name: values.firstName + " " + values.lastName,
      phone: values.phoneNumber,
      address: `${values.houseno}, ${values.streetOrArea}, ${values.landmark}, ${values.district}`,
      city: values.state,
      pinCode: values.postalCode,
      streetOrArea: values.streetOrArea,
      landmark: values.landmark,
      houseno: values.houseno,
      district: values.district,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      state: values.state,
      postalCode: values.postalCode,
    };
  
    // Add new address to the updated list
    updatedAddresses.push(newAddress);
  
    try {
      const response = await axios({
        method: "PUT",
        url: apiConfig.editProfile,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: { address: updatedAddresses }, // Send the updated address list
      });
  
      if (response.data.responseCode === 200) {
        toast.success("Address updated successfully");
        resetForm();
        profileAPi(); // Refresh profile data
        setShowAddress(false); // Close modal/form
      } else {
        toast.error(response.data.responseMessage || "Failed to update address");
      }
    } catch (error) {
      toast.error("Error updating address");
    }
  
    setSubmitting(false);
  };
  
  



 

  

  return (
    <div
      className={
        isSmallScreen ? classes.profileSmallContainer : classes.profileContainer
      }
    >
      <Grid container className={classes.profileData} spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* Basic Info */}
                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.MainHeading}>
                      Add Address
                    </Typography>
                  </Grid>
                  {/* First Name */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      First Name:
                    </Typography>
                    <Field
                      name="firstName"
                      as={TextField}
                      // variant="outlined"

                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
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
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Last Name:
                    </Typography>
                    <Field
                      name="lastName"
                      as={TextField}
                      placeholder="Enter last Name"
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
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
                 
                  {/* Mobile Number */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Phone Number:
                    </Typography>
                    <Field
                      name="phoneNumber"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
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
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Flat/House No., Building etc:
                    </Typography>
                    <Field
                      name="houseno"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter Flat/House No., Building etc", // Change placeholder text as needed
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
                      name="houseno"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
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
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
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

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Landmark:
                    </Typography>
                    <Field
                      name="landmark"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter Landmark", // Change placeholder text as needed
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
                      name="landmark"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      Postal Code:
                    </Typography>
                    <Field
                      name="postalCode"
                      as={TextField}
                      placeholder="Postal Code"
                      fullWidth
                      className={classes.leftContent}
                      onChange={(e) => handlePincodeChange(e, setFieldValue)}
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>


                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      District:
                    </Typography>
                    <Field
                      name="district"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      value={autoDistrict}
                      disabled
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter your district", // Change placeholder text as needed
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
                      name="district"
                      component="div"
                      className={classes.error}
                    />
                  </Grid>
                 

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" className={classes.label}>
                      City:
                    </Typography>
                    <Field
                      name="state"
                      as={TextField}
                      fullWidth
                      className={classes.leftContent}
                      value={autoState}
                      disabled
                      InputProps={{
                        style: {
                          border: "1px solid #4F4F4F",
                          borderRadius: "10px",
                        },
                        inputProps: {
                          placeholder: "Enter your state", // Change placeholder text as needed
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

                  

                  

                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="contained"
                      className={classes.customButton}
                      type="submit"
                      disabled={isSubmitting}
                    >
 {isSubmitting ? "Saving..." : "Save Address"}
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

export default AddAddress;
