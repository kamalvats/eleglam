/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tea from "../Images/tea.png";
import tea1 from "../Images/tea1.png";
import beauty from "../Images/beauty.png";
import boy from "../Images/boy.jpeg";
import girl from "../Images/girl.jpeg";
import boy2 from "../Images/boy2.jpeg";

const styles = {
  mainImageContainer: {
    display: "flex",
    // margin: "20px 40px",

    paddingLeft: "70px",
    paddingRight: "70px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",

    flexWrap: "wrap",
    gap: "3px",

    // margin: "0 auto",
    marginBottom: "20px",
    // "@media (max-width: 1275px)": {
    //   width: "307px",
    //   height: "394px",
    // },
    // "@media (max-width: 600px)": {
    //   width: "407px",
    //   height: "494px",
    // },
    // "@media (max-width: 600px)": {
    //   width: "307px",
    //   height: "394px",
    // },
  },
  heading1: {
    fontFamily: "Playfair Display",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "81.6px",
    textAlign: "center",
  },
  heading1Typo: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "34px",
    textAlign: "center",
  },
  heading2: {
    fontFamily: "Playfair Display",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "81.6px",
    textAlign: "center",
  },
  heading2Typo: {
    fontFamily: "Nunito Sans",
    fontWeight: 400,
    fontSize: "22px",
    color: "#2D2C2C",
    lineHeight: "34px",
    textAlign: "center",
    textWrap: "wrap",
    marginTop: "10px",
  },
  contentBox: {
    margin: "20px 80px",
  },
  joinBox: {
    display: "flex",
    // backgroundColor: "#f6931f",
    margin: "20px 40px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  joinBoxButton: {
    background: "#7E563D",
    color: "#000",
    width: "170px",
    textTransform: "none",
    "&:hover": {
      // Apply styles on hover
      color: "#000", // Change text color to white
      backgroundColor: "#7E563D", // Change background color to black
    },
  },
  joinBoxButtonBox: {
    display: "flex",
    alignItems: "center",
  },
  joinBoxTypo: {
    color: "#7E563D",
    fontFamily: "Playfair Display",
  },
  teamTypo: {
    fontFamily: "Playfair Display",
    textAlign: "center",
    margin: "20px 0",
  },
  teamBox: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    flexWrap: "Wrap",
    "@media (max-width: 693px)": {
      justifyContent: "center",
    },
  },
  teamImgBox: {
    margin: "20px 0",
  },
  teamMemberName: {
    textAlign: "center",
    margin: "5px 0",
    fontFamily: "Playfair Display",
  },
  teamMemberDes: {
    textAlign: "center",
    fontFamily: "Playfair Display",
  },
  textOverlay: {
    fontWeight: "600",
    fontSize: "50px",
    fontFamily: "Playfair Display",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#7E563D",
    zIndex: 999, // Ensure it's above the image and icons
  },
};

const AboutUs = () => {
  return (
    <>
      <Grid
        container
        xs={12}
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={12}>
          <Box style={styles.contentBox}>
            <Typography style={styles.heading2}>About Us: </Typography>

            <Typography style={styles.heading2Typo}>
              <br />
              ELEGLAM began in Delhi when founder Aastha turned her passion for
              fashion into a jewelry line that marries classic elegance with
              modern flair. We create statement necklaces and refined pieces
              that feel personal, comfortable, and effortlessly stylish—without
              the luxury price tag. At ELEGLAM, every item is crafted to become
              part of your story and add a touch of glamor to your everyday.
              Discover your next favorite piece at www.eleglam.co.
            </Typography>
          </Box>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>Affordable Price</Typography>
              <Typography style={styles.heading2Typo}>
                Quisque ut nisi at mi venenatis blandit. In ante risus,
                hendrerit sed tempus eget, eleifend id massa. Nam neque felis,
                iaculis cursus libero id, mattis convallis nisi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>Fresh & Hygiene</Typography>
              <Typography style={styles.heading2Typo}>
                Quisque ut nisi at mi venenatis blandit. In ante risus,
                hendrerit sed tempus eget, eleifend id massa. Nam neque felis,
                iaculis cursus libero id, mattis convallis nisi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.contentBox}>
              <Typography style={styles.heading2}>Awardable Products</Typography>
              <Typography style={styles.heading2Typo}>
                Quisque ut nisi at mi venenatis blandit. In ante risus,
                hendrerit sed tempus eget, eleifend id massa. Nam neque felis,
                iaculis cursus libero id, mattis convallis nisi.
              </Typography>
            </Box>
          </Grid> */}
      </Grid>
    </>
  );
};

export default AboutUs;
