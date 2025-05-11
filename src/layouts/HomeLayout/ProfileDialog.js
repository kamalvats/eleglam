import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from 'react-hot-toast';
import { useHistory } from "react-router-dom";

// Styles for customization
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
  paperWidthSm: {
    maxWidth: "950px",
  },
  paper: {
    margin: "0px",
    borderRadius: "0px",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageBox: {
    flex: 2,
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(2),
    height: "307px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
  contentBox: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  contentOfDialogBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  contentOfDialogBoxHeading: {
    fontSize: "24px",
    fontFamily: "Playfair Display",
    fontWeight: "500",
    color: "#000000",
  },
  contentOfDialogBoxChildern: {
    fontSize: "18px",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    color: "#4F4F4F",
    cursor: "pointer",
    textDecoration: "none",
  },
}));

// Customized DialogTitle with custom styles
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

// Customized DialogContent with custom styles
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// Customized DialogActions with custom styles
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// Component for the customized dialog
export default function CustomizedDialogs({ openProfileModal, handleClose }) {
  const classes = useStyles();
  const history =useHistory();

  // Function to handle logout
  const handleLogout = async () => {
    console.log("handling Logout.............")
    try {
        const res = await axios({
            method: "GET",
            url: apiConfig.logout,
            headers: { token: window.sessionStorage.getItem("ELEGLAMToken") },
        });

        if (res?.data?.responseCode === 200) {
            toast.success(res?.data?.result);
            window.sessionStorage.removeItem("ELEGLAMToken");
            history.push("/");
            window.location.reload();
        } else {
            toast.error("Failed to logout");
        }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
}



  return (
    <div>
      {/* Dialog component with custom styles */}
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={openProfileModal}
        onClose={handleClose}
        classes={{
          paperWidthSm: classes.paperWidthSm,
          paper: classes.paper,
        }}
        PaperProps={{
          style: {
            position: "absolute",
            top: "80px",
            right: "0",
            height: "343px",
            width: "1435px",
            margin: "0px !important",
          },
        }}
      >
        {/* Dialog content */}
        <DialogContent>
          <Box className={classes.root}>
            <Box className={classes.imageBox}>
              <img
                src="/Image/profileDialogImage.png"
                alt="Content"
                className={classes.image}
              />
            </Box>
            <Box className={classes.contentBox}>
              <Box className={classes.contentOfDialogBox}>
                {/* Dialog content items */}
                <Typography className={classes.contentOfDialogBoxHeading}>
                  Your Account
                </Typography>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Typography className={classes.contentOfDialogBoxChildern}>
                    My Profile
                  </Typography>
                </Link>
                <Link to="/product-wishlist" style={{ textDecoration: "none" }}>
                  <Typography className={classes.contentOfDialogBoxChildern}>
                    My Wishlist
                  </Typography>
                </Link>
                <Link to="/myorder" style={{ textDecoration: "none" }}>
                  <Typography className={classes.contentOfDialogBoxChildern}>
                    My Orders
                  </Typography>
                </Link>
                <Link to="/changepassword" style={{ textDecoration: "none" }}>
                  <Typography className={classes.contentOfDialogBoxChildern}>
                    Change Password
                  </Typography>
                </Link>
                <Typography onClick={handleLogout} className={classes.contentOfDialogBoxChildern}>
                  Logout
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
