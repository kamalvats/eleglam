/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  TextField,
  Typography,
  Badge,
  IconButton,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@material-ui/core";
import Slide from "@mui/material/Slide";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import ScrollingTitle from "./ScrollTitle";
// import Typography from "@/theme/typography";
import ClearIcon from "@material-ui/icons/Clear";
import toast from "react-hot-toast";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  searchForm: {
    position: "relative",
  },
  searchField: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 0,
    transition: "width 400ms ease",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  home: {
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    fontSize: "16px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: "0 80px",
    padding: "0 20px",
    // "@media (max-width: 1100px)": {
    //   margin: "0 20px",
    // },
    // "@media (max-width: 400px)": {
    //   margin: "0px -10px",
    // },
    // Align items to the right
  },
  logoImage: {
    height: "72px",
    width: "auto",
    "@media (max-width: 600px)": {
      height: "48px",
    },
  },
  appBar: {
    // position: "sticky",
    backgroundColor: "#ECDACE",
    boxShadow: "2px",
    // width:"100%"
  },
  logo: {
    border: "none",
    alignItems: "center",
  },
  smallDevice: {
    margin: "0 1%",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    listStyleType: "none",
  },
  link: {
    marginLeft: "20px",
    // color: activeTab === "link" ? "#7E563D" : "#7E563D", // Orange if active, else default color
    fontFamily: "Nunito Sans",
    fontWeight: "600px",
    fontSize: "16px",
    "@media (max-width: 800px)": {
      fontSize: "10px",
    },
  },

  button: {
    // textDecoration: "none",
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontWeight: "600px",
    fontSize: "16px",
    textTransform: "none",
    "@media (max-width: 800px)": {
      fontSize: "10px",
    },
    "&:hover": {
      backgroundColor: "white !important",
      color: "#7E563D",
    },
    "&:active": {
      backgroundColor: "white !important",
      color: "#7E563D",
    },
  },
  divider: {
    width: "1px",
    height: "30px",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
    orientation: "vertical",
    marginLeft: "20px",
  },
  cart: {
    marginLeft: "20px",
    cursor: "pointer",
  },
  loginButton: {
    marginLeft: "20px",

    backgroundColor: "#7E563D",
    // padding:"10px",
    height: "40px",
    width: "120px",
    borderRadius: "30px",
    textTransform: "none",
    color: "white",
    fontWeight: "600px",
    fontSize: "16px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#7E563D !important",
    },
    "&:active": {
      backgroundColor: "#7E563D !important",
    },
    "@media (max-width: 900px)": {
      height: "30px",
      marginLeft: "10px",
      width: "90px",
    },
    "@media (max-width: 400px)": {
      height: "25px",
      marginLeft: "5px",
      width: "60px",
      fontSize: "12px",
    },
  },
  shopingCartBox: {
    margin: "5%",
    display: "flex",
    justifyContent: "space-between",
  },
  shopingCartBox2: {
    margin: "5%",
    display: "flex",
    justifyContent: "center",
  },
  yourCart: {
    color: "#2D2C2C",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Playfair Display",
  },
  emptyCart: {
    color: "rgba(38, 38, 40, 0.6)",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Nunito Sans",
  },
  divider2: {
    height: "1px",
    width: "100%",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
  },
  cancel: {
    cursor: "pointer",
    height: "27px",
    width: "27px",
    backgroundColor: "#7E563D",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  cartLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  moreAboutButton: {
    marginTop: "20px",
    backgroundColor: "#7E563D",
    padding: "10px 20px",
    height: "50px",
    width: "256px",
    borderRadius: "30px",
    textTransform: "none",
    color: "white",
    fontWeight: "600px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#7E563D !important",
    },
    "&:active": {
      backgroundColor: "#7E563D !important",
    },
  },
  divider3: {
    height: "1px",
    margin: "20px 0px",
    color: "#E7E7E7",
    backgroundColor: "#E7E7E7",
  },
  viewCart: {
    marginTop: "20px",
    backgroundColor: "#7E563D",
    padding: "10px 20px",
    height: "50px",
    width: "256px",
    border: "1px solid #7E563D",
    borderRadius: "30px",
    textTransform: "none",
    color: "#262626",
    fontWeight: "600px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#7E563D !important",
    },
    "&:active": {
      backgroundColor: "#7E563D !important",
    },
  },
  afterLoginCart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  profileBox: {
    height: "40px",
    width: "40px",
    borderRadius: "50px",
  },
  drawer: {
    width: "370px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  active: {
    color: "#7E563D",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    fontSize: "16px",
  },
  modalText: {
    "& .MuiDialog-paper": {
      background: "white",
    },
    "& .MuiDialogTitle-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
      padding: "14px 17px",
    },
    "& .MuiDialogActions-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      marginTop: "30px",
    },
    "& h6": {
      width: "100%",
      maxWidth: "427px",
      margin: "0 auto",
    },
  },
}));

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { userDetails } = useContext(AuthContext);

  console.log("cart data", userDetails?.cart?.length);

  // console.log("openProfileModalopenProfileModal", openProfileModal);
  const [activeButton, setActiveButton] = useState("");

  const classes = useStyles();
  // Update handleTabClick to set the active button
  const handleTabClick = (tabName) => {
    setActiveButton(tabName);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const token = sessionStorage.getItem("ELEGLAMToken");

  const handleLogout = () => {
    sessionStorage.removeItem("ELEGLAMToken");
    setLogoutDialogOpen(false);
    history.push("/sign-in");
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <ScrollingTitle />
        <Box className={classes.toolbar}>
          <Box
            onClick={scrollToTop}
            className={classes.logoImage}
            component={Link}
            to="/"
          >
            <img
              src="/Image/eg-logo.jpg"
              style={{ height: "100%", width: "auto" }}
              alt="Logo"
              className={classes.logo}
            />
          </Box>

          <Box>

            {token && (

<Button
              component={Link}
              to="/myorder"
              onClick={() => handleTabClick("aboutus")}
              className={
                location.pathname === "/myorder" ? classes.active : classes.home
              }
            >
              My Orders
            </Button>

            )}
            

            <IconButton
              onClick={() => {
                
                if (token) {
                  history.push("/my-cart"); // Token hai toh my-cart pe bheje
                } else {
                  history.push("/sign-in"); // Token nahi hai toh sign-in pe bheje
                }
              }}
            >
              {window.location.pathname !== "/my-cart" ? (
                <Badge
                badgeContent={
                  userDetails?.cart?.filter(item => item?.productId?.stockAvailable !== false).length || 0
                }
                
                  color="secondary"
                  overlap="rectangular"
                >
                  <ShoppingCartIcon style={{ color: "#7E563D" }} />
                </Badge>
              ) : (
                <ShoppingCartIcon style={{ color: "#7E563D" }} />
              )}
            </IconButton>

            {!sessionStorage.getItem("ELEGLAMToken") && (
              <Button
                className={classes.loginButton}
                onClick={() => {
                  history.push("/sign-in");
                }}
              >
                <Link
                  to="/sign-in"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign In
                </Link>
              </Button>
            )}

            {sessionStorage.getItem("ELEGLAMToken") && (
              <Button
                className={classes.loginButton}
                onClick={() => setLogoutDialogOpen(true)}
              >
                Log Out
              </Button>
            )}
          </Box>
        </Box>
      </AppBar>

      {/* <Dialog open={logoutDialogOpen} onClose={() => setLogoutDialogOpen(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="secondary">
            Log Out
          </Button>
        </DialogActions>
      </Dialog> */}

      <Dialog
        maxWidth="xs"
        fullWidth
        open={logoutDialogOpen}
        keepMounted
        className={classes.modalText}
      >
        <DialogTitle>
          <Typography variant="h4" align="center">
            Log Out
          </Typography>
          <Box
            onClick={() => setLogoutDialogOpen(false)}
            color="primary"
            style={{
              height: "0px",
              position: "absolute",
              right: "10px",
              top: "4px",
              cursor: "pointer",
            }}
          >
            <ClearIcon style={{ color: "rgba(8, 5, 21, 0.6)" }} />
          </Box>
        </DialogTitle>
        <Box>{/* <Divider /> */}</Box>
        <DialogContent>
          <Typography variant="h6" align="center">
            Are you sure you want to logout? This action will end your current
            session.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="secondary">
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
