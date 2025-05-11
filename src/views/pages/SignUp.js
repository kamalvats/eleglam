import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@material-ui/core";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { makeStyles } from "@material-ui/core/styles";
import { apiConfig } from "src/apiconfig/ApiConfig";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh + 50px)",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    margin: "0 14px",
    width: "100%",
    maxWidth: "500px",
    padding: theme.spacing(4),
    backgroundColor: "white",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2), // Smaller padding on small screens
    },
  },
  formHeading: {
    fontSize: "48px",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    color: "#2D2C2C",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px",
      marginBottom: theme.spacing(2),
    },
  },
  formDetail: {
    fontSize: "22px",
    fontWeight: "400",
    fontFamily: "Nunito Sans",
    color: "#4F4F4F",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      marginBottom: theme.spacing(2),
    },
  },
  divider: {
    height: "5px",
    width: "95px",
    marginTop: theme.spacing(1),
    backgroundColor: "#7E563D",
    marginBottom: theme.spacing(2),
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 0),
    },
  },
  formKey: {
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Nunito Sans",
    marginBottom: theme.spacing(1),
    color: "#4F4F4F",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      marginBottom: theme.spacing(1),
    },
  },
  btnBox: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  submitBtn: {
    height: "50px",
    width: "30%",
    backgroundColor: "#7E563D",
    borderRadius: "30px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textTransform: "none",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Nunito Sans",
    color: "white",
    "&:hover": {
      backgroundColor: "#7E563D",
    },
    "&:active": {
      backgroundColor: "#7E563D",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      fontSize: "18px",
    },
  },
  checkBoxText: {
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "Nunito Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  textFieldStyle: {
    background: "#00000008",
    borderRadius: "30px",
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "12px",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  // Your styles here...
  getCode: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#174B70",
    width: "100px",
    marginRight: theme.spacing(1),
    "&:disabled": {
      color: "#999",
    },
  },
  timerText: {
    fontSize: "14px",
    fontWeight: "600",
    color: "red",
    marginLeft: theme.spacing(1),
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),
  verificationCode: Yup.string().required("Please enter verification code."),
});

const Signup = () => {
  const classes = useStyles();
  const [state, setState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const history = useHistory();
  const [agreed, setAgreed] = useState(false);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isOtpSent) {
      setIsOtpSent(false); // Get Code button enable ho jayega
    }
    return () => clearInterval(interval);
  }, [timer, isOtpSent]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleClickOpen = async () => {
    try {
      setIsLoadingCode(true);
      const res = await axios.post(apiConfig.signup, { email: state });

      if (res.status === 200) {
        toast.success(res?.data?.responseMessage);
        setIsLoadingCode(false);
        setTimer(180);
        setIsOtpSent(true);
      } else {
        toast.error(res?.data?.responseMessage);
        setIsLoadingCode(false);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ?? "Something went wrong!",
        setIsLoadingCode(false)
      );
    }
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const res = await axios.patch(apiConfig.verifyOTPSignUp, {
        email: state,
        otp: String(values.verificationCode),
      });

      if (res.status === 200) {
        toast.success(res?.data?.responseMessage);
        window.sessionStorage.setItem("ELEGLAMToken", res?.data?.result?.token);
        window.localStorage.setItem("ELEGLAMToken", res?.data?.result?.token);

        console.log("ELEGLAMToken", res?.data?.result?.token);
        history.push("/");
        const prevPage = sessionStorage.getItem("prevPage");
        const prevProductId = sessionStorage.getItem("prevProductId");

        sessionStorage.removeItem("prevPage");
        sessionStorage.removeItem("prevProductId");

        if (prevPage === "/product-page" && prevProductId) {
          history.push({
            pathname: "/product-page",
            state: { productId: prevProductId }, // ✅ Passing productId in state
          });
        } else {
          history.push(prevPage || "/");
        }
      } else {
        toast.error(res?.data?.responseMessage);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ?? "Invalid OTP. Try again."
      );
    }
    setIsSubmitting(false);
  };

  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.formContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.formHeading} variant="h2">
              Welcome!
            </Typography>
            <Typography className={classes.formDetail} variant="h4">
              Let's Sign In To Your Account!
            </Typography>
            <Divider className={classes.divider} />
            <Box className={classes.formBox}>
              <Formik
                initialValues={{
                  email: "",
                  verificationCode: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched, errors, values, handleChange, setFieldValue }) => (
                  <Form>
                    <Box>
                      <Typography className={classes.formKey} variant="body1">
                        Enter Email
                      </Typography>
                      <TextField
                        fullWidth
                        autoComplete="off"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => {
                          setState(e.target.value);
                          setFieldValue("email", e.target.value);
                        }}
                        placeholder="Enter email address"
                        className={classes.textFieldStyle}
                        InputProps={{
                          endAdornment: (
                            <Button
                              className={classes.getCode}
                              onClick={handleClickOpen}
                              disabled={isOtpSent || !values.email} // Disable button if OTP sent
                            >
                              {isLoadingCode ? (
                                <CircularProgress size={18} color="inherit" />
                              ) : isOtpSent ? (
                                formatTime(timer)
                              ) : (
                                "Get Code"
                              )}
                              {console.log("object", isOtpSent)}
                            </Button>
                          ),
                        }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={classes.errorMessage}
                      />
                    </Box>

                    <Box>
                      <Typography className={classes.formKey} variant="body1">
                        Verification Code
                      </Typography>
                      <TextField
                        fullWidth
                        type="number"
                        name="verificationCode"
                        autoComplete="off"
                        value={values.verificationCode}
                        onChange={handleChange}
                        placeholder="Enter 6-digit code"
                        className={classes.textFieldStyle}
                      />
                      <ErrorMessage
                        name="verificationCode"
                        component="div"
                        className={classes.errorMessage}
                      />
                    </Box>

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                      }
                      label={
                        <span className={classes.checkBoxText}>
                          I agree with the <Link to="#">Privacy Policy</Link>{" "}
                          &amp; <Link to="#">Terms of Use</Link>.
                        </span>
                      }
                    />

                    <Box className={classes.btnBox}>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={
                          isSubmitting ||
                          !values.email ||
                          !values.verificationCode ||
                          !agreed
                        }
                        className={classes.submitBtn}
                      >
                        {isSubmitting ? (
    <CircularProgress size={24} color="inherit" />
  ) : (
    "Sign In"
  )}
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signup;
