import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Radio,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(25, "First Name must be less than 25 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(25, "Last Name must be less than 25 characters"),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .matches(/^\d{6,16}$/, "Phone number must be between 6 and 16 digits."),
  street: Yup.string()
    .required("Streat is required")
    .min(2, "Streat must be at least 2 characters")
    .max(25, "Streat must be less than 50 characters"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
});

const EditProfile = () => {
  const history = useHistory();

  const [selectcity, setSelectCity] = useState("");
  const [showStates, setShowStates] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [stateList, setStateList] = useState();
  const [countries, setCountries] = useState([]);
  const [countriesWithCode, setCountriesWithCode] = useState([]);
  const [city, setCity] = useState();
  const style = {
    mainBox: {
      margin: "0 5%",
    },
    heading: {
      marginTop: "1%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    headingText: {
      margin: "10px",
      fontFamily: "Playfair Display",
      fontSize: "30px",
      fontWeight: "600",
    },
    productBuyImg: {
      display: "flex",
      justifyContent: "center",
    },
    basicInfo: {
      fontFamily: "Nunito Sans",
      fontSize: "24px",
      fontWeight: "700",
      color: "#2D2C2C",
      margin: "1% 0",
    },
    nameBox: {
      display: "flex",
      flexDirection: "row",
      margin: "2% 0",
    },
    profileHeader: {
      height: "100px",
      width: "100%",
      // background:"blue",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
    profileHeaderHeading: {
      color: "#2D2C2C",
      marginLeft: "20px",
      fontFamily: "Playfair Display",
    },

    addressBtn: {
      height: "45px",
      width: "170px",
      backgroundColor: "#7E563D",
      borderRadius: "300px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      textTransform: "none",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Nunito Sans",
      margin: "2% 0%",
      color: "white",

      "&:hover": {
        backgroundColor: "#7E563D !important",
      },
      "&:active": {
        backgroundColor: "#7E563D !important",
      },

      //   border: ".5px solid #3E3EDE",
    },
  };

  useEffect(() => {
    axios.get("/json/countriesWithCode.json").then(function (response) {
      console.log(response, "response");
      setCountriesWithCode(response?.data?.countriesWithCode);
    });
  }, []);
  useEffect(() => {
    axios.get("/json/countries.json").then(function (response) {
      setCountries(response.data.countries);
      axios.get("/json/states.json").then(function (response) {
        setStates(response.data.states);
        axios.get("/json/cities.json").then(function (response) {
          setCities(response.data.cities);
        });
      });
    });
  }, []);

  const changeCountry = (e, setFieldValue) => {
    const name = e.target.value;
    const selectedCountry = countries.find((country) => country.name === name);
    const selectedCountryId = selectedCountry ? selectedCountry.id : null;
    const filteredStates = states.filter(
      (state) => state.country_id === selectedCountryId
    );
    setFieldValue("country", name);
    setShowStates(filteredStates);
  };

  const changeState = (e, setFieldValue) => {
    const name = e.target.value;
    setStateList(name);
    const selectedState = showStates.find((state) => state.name === name);
    const selectedStateId = selectedState ? selectedState.id : null;

    const filteredCities = cities.filter(
      (city) => city.state_id === selectedStateId
    );
    setFieldValue("state", name);
    setShowCities(filteredCities);
  };

  const handleCityChange = (event) => {
    setSelectCity(event.target.value);
  };
  return (
    <Box sx={style.mainBox}>
      <Box className={style.profileHeader}>
        <Box>
          <ArrowBackIcon
            style={{ color: "#2D2C2C" }}
            fontSize="large"
            onClick={() => history.goBack()}
          />
        </Box>
        <Typography variant="h3" className={style.profileHeaderHeading}>
          Profile
        </Typography>
      </Box>
      <Divider sx={{ width: "100%", margin: "2% 0%" }} />
      <Grid container sx={{ margin: "0% 0%" }} spacing={2}>
        <Grid item lg={1.5} md={3} sm={4} xs={12} sx={style.productBuyImg}>
          <img
            src="Image/myProfileImg.png"
            height={150}
            width={150}
            alt="Product Image"
          />
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <Typography sx={style.basicInfo}>
            <u>Basic Info:</u>
          </Typography>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              street: "",
              city: "",
              state: "",
              country: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              console.log(values);
            }}
          >
            {({
              errors,
              touched,
              handleBlur,
              handleChange,
              values,
              setFieldValue,
              resetForm,
            }) => (
              <Form>
                <Grid container sx={style.addressContainer}>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>First Name</Typography>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="firstName"
                        autoComplete="off"
                        placeholder="Enter first name"
                        value={values.firstName}
                        onChange={handleChange}
                        className={
                          touched.firstName && errors.firstName ? "error" : ""
                        }
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>Last name</Typography>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="lastName"
                        autoComplete="off"
                        placeholder="Enter last name"
                        value={values.lastName}
                        onChange={handleChange}
                        className={
                          touched.lastName && errors.lastName ? "error" : ""
                        }
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>Email</Typography>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="email"
                        autocomplete="off"
                        placeholder="Enter email address"
                        value={values.email}
                        onChange={handleChange}
                        className={touched.email && errors.email ? "error" : ""}
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>Phone Number</Typography>
                    <div className="form-group">
                      <Field
                        type="number"
                        name="phoneNumber"
                        autocomplete="off"
                        placeholder="Enter phone number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        className={
                          touched.phoneNumber && errors.phoneNumber
                            ? "error"
                            : ""
                        }
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>Street or Area</Typography>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="street"
                        autoComplete="off"
                        placeholder="Enter street name"
                        value={values.street}
                        onChange={handleChange}
                        className={
                          touched.street && errors.street ? "error" : ""
                        }
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="street"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>City</Typography>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="city"
                        autoComplete="off"
                        placeholder="Enter city name"
                        value={values.city}
                        onChange={handleChange}
                        className={touched.city && errors.city ? "error" : ""}
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0", paddingRight: "3%" }}
                  >
                    <Typography sx={style.formKey}>State</Typography>
                    <Box
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#F2F2F2",
                        height: "50px",
                      }}
                    >
                      <FormControl fullWidth>
                        <Select
                          fullWidth
                          variant="outlined"
                          displayEmpty
                          value={values.state}
                          name="state"
                          onChange={(e) => {
                            handleChange(e);
                            changeState(e, setFieldValue);
                          }}
                          sx={{
                            borderRadius: "50px",
                            border: "0px solid #F2F2F2",
                            backgroundColor: "#F2F2F2",
                            height: "100%",
                            "& .MuiSelect-select": {
                              fontFamily: "Nunito Sans",
                              fontSize: "16px", // Adjust the font size as needed
                              color: "rgba(0, 0, 0, 0.4)",
                            },
                          }}
                        >
                          <MenuItem value="">Select State</MenuItem>
                          {showStates.map((state) => (
                            <MenuItem key={state.id} value={state.name}>
                              {state.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    {errors.state && touched.state && (
                      <div className="error-message" style={{ color: "red" }}>
                        {errors.state}
                      </div>
                    )}
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0", paddingRight: "3%" }}
                  >
                    <Typography sx={style.formKey}>Country</Typography>
                    <Box
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#F2F2F2",
                        height: "50px",
                      }}
                    >
                      <FormControl fullWidth>
                        <Select
                          fullWidth
                          variant="outlined"
                          displayEmpty
                          value={values.country}
                          name="country"
                          sx={{
                            borderRadius: "50px",
                            border: "0px solid #F2F2F2",
                            backgroundColor: "#F2F2F2",
                            height: "100%",
                            "& .MuiSelect-select": {
                              fontFamily: "Nunito Sans",
                              fontSize: "16px",
                              color: "rgba(0, 0, 0, 0.4)",
                            },
                          }}
                          onChange={(e) => {
                            handleChange(e);
                            changeCountry(e, setFieldValue);
                          }}
                        >
                          <MenuItem value="">Select Country</MenuItem>
                          {countries.map((country) => (
                            <MenuItem key={country.id} value={country.name}>
                              {country.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    {errors.country && touched.country && (
                      <div className="error-message" style={{ color: "red" }}>
                        {errors.country}
                      </div>
                    )}
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ margin: "1% 0" }}
                  >
                    <Typography sx={style.formKey}>Postal Code</Typography>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="code"
                        autoComplete="off"
                        placeholder="Enter postal code"
                        value={values.code}
                        onChange={handleChange}
                        className={touched.code && errors.code ? "error" : ""}
                        style={{
                          backgroundColor: "#F2F2F2",
                          borderRadius: "30px",
                          height: "45px",
                          width: "90%",
                          border: "none",
                          paddingLeft: "15px",
                          fontFamily: "Nunito Sans'",
                          fontSize: "16px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <ErrorMessage
                        name="code"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Box sx={{ marginBottom: "5%" }}>
                  <Button sx={style.addressBtn} type="submit">
                    Update Profile
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
