/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Box, Button, Grid, Typography, useTheme } from "@material-ui/core";
import EmptyImage from "../views/Images/emptyCarttt.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const styles = {
  productListHead: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: "700px",
    margin: "10px 0",
    // lineHeight: "81.6px",
  },
  dataBox: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "180px",
    margin: "0 auto",
  },
  amountBox: {
    display: "flex",
    justifyContent: "space-around",
  },
  boxButton: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "400px",
    lineHeight: "27.2px",
    textAlign: "center",
    background: "#f6931f",
    color: "#7E563D",
    textTransform: "none",
    maxWidth: "150px",
    borderRadius: "30px",
    padding: "10px 8px",
    "&:hover": {
      color: "#7E563D",
      backgroundColor: "#f6931f",
    },
  },
  boxTypo1: {
    color: "#4f4f4f",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "400px",
    lineHeight: "24.55px",
    textAlign: "center",
  },
  boxTypo2: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "700px",
    lineHeight: "26.66px",
    textAlign: "center",
  },
  discountPrice: {
    color: "#4d8c3f",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "600px",
    lineHeight: "24.55px",
    textAlign: "center",
  },
  actualPrice: {
    color: "#a7a7a7",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "600px",
    lineHeight: "24.55px",
    textAlign: "center",
    textDecoration: "line-through",
  },
  ratingBox: {
    display: "flex",
    justifyContent: "center",
  },
  ratingStar: {
    width: "10px",
    height: "16px",
  },
  imgBox: {
    position: "relative", // Position relative to contain absolute position of badges
  },
  favoriteIcon: {
    position: "absolute",
    top: "5px", // Adjust top position as needed
    right: "5px", // Adjust left position as needed
    zIndex: 1, // Ensure it's above the image
    color: "red", // Set color to red initially
    cursor: "pointer", // Show pointer cursor on hover
    fontSize: "30px",
  },
  addToCartIcon: {
    position: "absolute",
    top: "5px", // Adjust top position as needed
    left: "5px", // Adjust right position as needed
    zIndex: 1, // Ensure it's above the image
    color: "#000", // Set color to black initially
    cursor: "pointer", // Show pointer cursor on hover
  },
  textOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#7E563D",
    zIndex: 999, // Ensure it's above the image and icons
  },
};

const drawerStyle = {
  drawerHeading: {
    fontFamily: "Playfair Display",
    fontSize: "22px",
    fontWeight: "700px",
    lineHeight: "37.4px",
    textAlign: "left",
    margin: "15px 20px",
  },
  drawerText: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "400px",
    lineHeight: "30.6px",
  },
};

const checkStyle = {
  checkHeading: {
    fontFamily: "Playfair Display",
    fontSize: "22px",
    fontWeight: "900px",
    // lineHeight: "37.4px",
    textAlign: "center",
    margin: "15px 30px",
  },
  checkTextBox: {
    display: "inline-flex",
    width: "100%",
    margin: "5px 20px",
  },
  checkText: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "400px",
    // display: "block",
    // alignItems: "center",
    // lineHeight: "30.6px",
    
  },
  checkDivider: {
    width: "80%",
    marginLeft: "20px",
  },
};
export default function NoDataFound({ headingText,content }) {
  const history = useHistory();
  
  const customButton = {
    width: "169px",
    height: "50px",
    marginTop: "10px",
    borderRadius: "30px",
    backgroundColor: "#7E563D !important",
    color: "white", // Text color
    "&:hover": {
      backgroundColor: "#7E563D !important", // Same color as default
    },
  };
  return (
    <>
    

  <Grid
    container
    direction="column"
    spacing={4}
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: "500px" }}
  >
    <Grid item>
      <img src={EmptyImage} height="100%" width="100%" />
    </Grid>
    <Grid item>
      <Typography
        variant="h5"
        style={{ fontSize: "24px", fontWeight: "600" }}
      >
        {" "}
        Your {headingText} is Empty!
      </Typography>
    </Grid>
    <Grid item>
      <Typography style={{ fontWeight: "400", color: "#26262899" }}>
        {" "}
       {content}
      </Typography>
    </Grid>
    <Grid>
      <Button
        variant="contained"
        className={customButton}
        onClick={()=>history.push("/")}
        
        disableElevation // Remove elevation
        disableRipple // Remove ripple effect
        disableFocusRipple // Remove focus ripple effect
        disableTouchRipple // Remove touch ripple effect
      >
        Start Shopping
      </Button>
    </Grid>
  </Grid>

  {/* COMPONENT FOR EMPTY WISHLIST */}
  </>
  );
}