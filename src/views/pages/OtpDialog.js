import React, { Fragment, useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ReactCodeInput from "react-code-input";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useTheme } from "@material-ui/core/styles";



const styles = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  typo1: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "center",
    color: "#2D2C2C",
  },
  typo2: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "center",
    color: "#4F4F4FB2",
  },
  typo3: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "end",
    color: "#7E563D",
    marginRight: "19px",
  },
  resendTypo: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "end",
    color: "#1891CE",
    // marginRight: "19px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    background: "#7E563D",
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    fontWeight: 700,
    margin: "10px 0 20px 0",
    borderRadius: "30px",
    textTransform: "none",
    "&:hover": {
      color: "#7E563D",
      backgroundColor: "#7E563D",
    },
  },
  errorText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "-0.02em",
    textAlign: "left",
    color: "#FF0000",
    marginLeft: "10px",
  },
};

const alertDialog = {
  mainBox: {
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "90%",
  },
  imgBox: {
    width: "54px",
    height: "59px",
    margin: "0 auto",
  },
  alertTypo1: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "center",
    color: "#2D2C2C  ",
  },
  alertTypo2: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "center",
    color: "#4F4F4FDE",
    width: "80%",
    margin: "0 auto",
  },
  button: {
    background: "#7E563D",
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    fontWeight: 700,
    margin: "10px 0 20px 0",
    borderRadius: "30px",
    textTransform: "none",
    "&:hover": {
      color: "#7E563D",
      backgroundColor: "#7E563D",
    },
  },
};
const props = {
  // className: reactCodeInput,
  inputStyle: {
    margin: "10px",
    MozAppearance: "textfield",
    width: "27px",
    borderRadius: "10px",
    fontSize: "30px",
    height: "41px",
    paddingLeft: "14px",
    backgroundColor: "#F7F7F799",
    border: "1px solid #D8D7D7",
    outline: "none",
  },
  inputStyleInvalid: {
    margin: "10px",
    MozAppearance: "textfield",
    width: "27px",
    borderRadius: "10px",
    fontSize: "30px",
    height: "41px",
    paddingLeft: "14px",
    backgroundColor: "#F7F7F799",
    color: "#FF0000",
    border: "1px solid #FF0000",
    outline: "none",
  },
};


const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    // padding: spacing(2),
  },
  "& .MuiDialogActions-root": {
    // padding: spacing(1),
  },
  "& .MuiPaper-root": {
    maxWidth: "440px",
    borderRadius: "10px", // Adjust width as per your requirement
  },
}));

function OtpDialog({ open, onClose }) {

 
  const [isInvalid, setIsInvalid] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(10);
  const [showOtpDialog, setShowOtpDialog] = useState(true);
  


  const handleClickOpen = () => {
    // setTimer(10);
  };

  const handleClose = () => {
    setIsInvalid(false);
    setShowOtpDialog(true);
    onClose(); // Call the onClose prop to close the dialog
  };
  function validateOTP(otp) {
    return otp === "123456";
  }
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleInputChange = (value) => {
    // Perform validation logic here
    if (value.length === 6) {
      const isValid = validateOTP(value); // Implement your validation function
      setIsInvalid(!isValid);
      if (!isValid) {
        // Increase attempt count if OTP is invalid
        setAttempts((prevAttempts) => prevAttempts + 1);
        if (attempts + 1 >= 3) {
          setShowOtpDialog(false); // Hide OTP dialog if attempts exceed limit
        }
      }
    } else {
      setIsInvalid(false); // Reset invalid state if length is not 6
    }
  };
  useEffect(() => {
    let interval;
    if (open) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [open]);
const history = useHistory();
  return (
    <Fragment>
      {/* <Button va */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {showOtpDialog && attempts <= 2 && (
          <DialogContent>
            <Box style={styles.mainBox}>
              <Typography style={styles.typo1}>OTP Verification!</Typography>
              <Typography style={styles.typo2}>
                Please enter the 6 digit verification code that was sent to +91
                898-XXX-XX09 . The code is valid for 3 minute.
              </Typography>
              <Box style={styles.inputBox}>
                <ReactCodeInput
                  type="text"
                  fields={6}
                  pattern="[0-9]*"
                  {...props}
                  inputStyle={
                    isInvalid ? props.inputStyleInvalid : props.inputStyle
                  }
                  onChange={handleInputChange}
                />
                {isInvalid && (
                  <Typography style={styles.errorText}>
                    Enter a Valid OTP
                  </Typography>
                )}
              </Box>
              <Typography style={styles.typo3}>
                {timer > 0 ? (
                  formatTime(timer)
                ) : (
                  <Typography style={styles.resendTypo} 
                  // onClick={handleClickOpen}
                  >
                    Resend
                  </Typography>
                )}
              </Typography>
              <Button fullWidth style={styles.button}>
                Submit
              </Button>
            </Box>
          </DialogContent>
        )}
        {attempts >= 3 && (
          <DialogContent>
            <Box style={alertDialog.mainBox}>
              <Box style={alertDialog.imgBox}>
                <img
                  src="Images/bell.jpeg"
                  alt="alert"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography style={alertDialog.alertTypo1}>
                Account Security Alert
              </Typography>
              <Typography style={alertDialog.alertTypo2}>
                You have exceeded the limit for OTP attempts or resends. Please
                try again in 30 minutes.
              </Typography>
              <Box>
                <Button fullWidth style={alertDialog.button} onClick={()=>{history.push("/sign-in");
              handleClose()}}>
                  Back to Sign In
                </Button>
              </Box>
            </Box>
          </DialogContent>
        )}
      </BootstrapDialog>
    </Fragment>
  );
}

export default OtpDialog;
