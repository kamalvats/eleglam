import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreCard from "src/component/ExploreCard";
import { AuthContext } from "src/context/Auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .slick-slider": {
      "& .slick-prev:before, .slick-next:before": {
        color: "orange",
      },
    },
  },
}));
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        background: "#7E563D",
        position: "revert",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        background: "#7E563D",
        position: "revert",
      }}
      onClick={onClick}
    />
  );
}
export default function Crousel() {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const { dealData } = useContext(AuthContext);

  const Natural = [
    { image: "/Image/eg-product-10.jpg", lebel: "Necklace" },
    { image: "/Image/eg-product-7.jpg", lebel: "Necklace" },
    { image: "/Image/eg-product-8.jpg", lebel: "Necklace" },
    { image: "/Image/eg-product-9.jpg", lebel: "Necklace" },
  ];

  const Diamond = [
    {
      image: "/Image/eg-product-6.jpg",
      lebel: "Ring",
      backgroundColor: "#D8FFF8",
    },
    {
      image: "/Image/eg-product-5.jpg",
      lebel: "Earing",
      backgroundColor: "#7E563D1DC",
    },
    {
      image: "/Image/eg-product-4.jpg",
      lebel: "Band",
      backgroundColor: "#FCDFDF",
    },
    {
      image: "/Image/eg-product-3.jpg",
      lebel: "Anklate",
      backgroundColor: "#FCDFDF",
    },
  ];

  const styles = {
    sliderBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "red !important",
    },
    slider: {
      height: "700px",
      position: "relative",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },

    heading: {
      fontSize: "90px",
      "@media (max-width: 800px)": {
        fontSize: "70px",
      },
      "@media (max-width: 600px)": {
        fontSize: "60px",
      },
      "@media (max-width: 380px)": {
        fontSize: "50px",
      },
      fontFamily: "Playfair Display",
    },

    mainBoxDeal: {
      margin: "6px",
      "@medin(min-width: 600px)": {
        margin: "20px",
      },
      "& .slick-track": {
        // backgroundColor:'green !important',
        display: "flex",
        columnGap: "1%",
      },
    },
    deal: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "40px 0",
    },
    dealHeading: {
      // fontFamily: "Playfair Display",
      // // fontSize: "35px !important",
      // fontWeight: "700",
      // color: "black ",
      // display: "flex",
      // alignItems: "center",
      "@media (max-width:600px)": {
        fontSize: "25px !important",
      },
    },
    dealButton: {
      border: " .5px solid #7E563D",
      padding: "10px",
      height: "40px",
      width: "120px",
      borderRadius: "30px",
      textTransform: "none",
      color: "#FFFFFF",
      fontWeight: "400",
      fontSize: "16px",
      fontFamily: "Nunito Sans",
      "@media (max-width:600px)": {
        fontSize: "15px",
        padding: "5px",
        textWrap: "wrap",
      },
    },
    dealSlider: {
      // height: "200px",
      // maxWidth:"348px",
      display: "flex",

      justifyContent: "center",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    dealImgBox: {
      height: "208px",
    },
    DealImage: {
      height: "100%",
      width: "100%",
      // objectFit: "cover",
      // padding: "0px 20px",
    },

    dealDetail: {
      marginTop: "10px",
      display: "flex",

      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    },
    dealtrades: {
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "16px",
      color: "#4F4F4F",
    },
    dealProduct: {
      fontFamily: "Playfair Display",
      fontWeight: "700",
      fontSize: "22px",
      color: "#ecdace",
    },
    Dealrating: {
      height: "15px",
      width: "102px",
    },
    discountPrice: {
      color: "#4D8C40",
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "16px",
    },
    originalPrice: {
      color: "#4F4F4F",
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "13px",
    },
    tea: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "100px",
      padding: "0 50px",
      paddingY: { xs: "20px", sm: "50px", md: "0px" },
      " & .slick-track": {
        // backgroundColor:'green !important',
        display: "flex",
        columnGap: "1%",
      },
    },
    teaimage: {
      height: "100%",
      width: "100%",
    },

    CartButton: {
      border: " .5px solid #7E563D",
      padding: "10px",
      height: "40px",
      width: "150px",
      borderRadius: "30px",
      textTransform: "none",
      color: "#7E563D",
      fontWeight: "400",
      fontSize: "16px",
      backgroundColor: "#7E563D",
      "&:hover": {
        backgroundColor: "#7E563D !important",
      },
      "&:active": {
        backgroundColor: "#7E563D !important",
      },
    },
    dealImgBox: {
      height: "300px",
    },
  };

  return (
    <>
      <Box style={styles.mainBoxDeal}>
        <Box style={styles.deal}>
          <Typography variant="h2">
            {" "}
            Deals For You, Order Now
          </Typography>
          {/* <Button style={styles.dealButton}>View All</Button> */}
        </Box>
        <ExploreCard />
      </Box>

      {/* <Grid
        container
        style={{
          // padding: "50px",
          
          display: "flex",
          justifyContent: "center",
         
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12} style={styles.tea}>
          <Typography
            style={{
              fontFamily: "Nunito Sans",
              fontSize: "18px",
              fontWeight: "400",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              margin: "2%",
            }}
          >
            {" "}
            Shop By Categories
          </Typography>
          <Typography
            style={{
              fontFamily: "Playfair Display",
              fontSize: "44px",
              fontWeight: "700",
              color: "#ecdace",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2%",
            }}
          >
            Jwellery

          </Typography>

          <Slider {...settings3} style={styles.sliderBox}>
            {Array.isArray(Natural) && Natural.map((value, index) => (
              <Box
                key={index}
                style={{
                  ...styles.dealSlider,
                  maxHeight: "180px",
                  width: "100%",
                }}
              >
                {" "}
                <Box p={2}>
                  <Box style={styles.dealImgBox}>
                    <img
                      src={value.image}
                      alt="tea"
                      style={{
                        ...styles.DealImage,
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box style={styles.dealDetail}>
                    <Typography style={styles.dealProduct}>
                      {value.lebel}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px 0px",
            }}
          >
            <Button style={{ ...styles.dealButton, width: "231px" }}>
              {" "}
              View all Categories
            </Button>
          </Box>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box style={{width: "100%", height: "100%"}}>
          <img src="/Image/eg-product-2.jpg" alt="ellips" style={styles.teaimage} />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          // padding: "50px",
          
          display: "flex",
          justifyContent: "center",
        
          paddingY: { xs: "20px", sm: "50px", md: "0px" },
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box style={{width: "100%", height: "100%"}}>
          <img src="/Image/eg-product-1.jpg" alt="ellips" style={styles.teaimage} />
          </Box>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12} style={styles.tea}>
          <Typography
            style={{
              fontFamily: "Nunito Sans",
              fontSize: "18px",
              fontWeight: "400",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              margin: "2% 0",
            }}
          >
            {" "}
            Shop By Categories
          </Typography>
          <Typography
            style={{
              fontFamily: "Playfair Display",
              fontSize: "44px",
              fontWeight: "700",
              color: "#ecdace",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2%",
            }}
          >
            Diamond
            
          </Typography>

          <Slider {...settings3} style={styles.sliderBox}>
            {Array.isArray(Diamond) && Diamond.map((value, index) => (
              <Box
                key={index}
                style={{
                  ...styles.dealSlider,
                  maxHeight: "180px",
                  width: "100%",
                }}
              >
                {" "}
                <Box p={2}>
                  <Box style={styles.dealImgBox}>
                    <img
                      src={value.image}
                      alt="tea"
                      style={{
                        ...styles.DealImage,
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box style={styles.dealDetail}>
                    <Typography style={styles.dealProduct}>
                      {value.lebel}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Button style={{ ...styles.dealButton, width: "231px" }}>
              {" "}
              View all Categories
            </Button>
          </Box>
        </Grid>
      </Grid> */}
    </>
  );
}
