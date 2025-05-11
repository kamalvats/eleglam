/* eslint-disable no-undef */
import { Box, Button, Grid, Typography, colors } from "@material-ui/core";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red !important",
  },
  slider: {
    // height: "700px",
    // height: "600px",
    marginTop: "14px",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  slickActive: {
    "& .slick-dots li.slick-active button:before": {
      color: "white ",
    },
    "& .slick-dots li.slick-active button:after": {
      color: "white ",
    },
  },
  sliderImage: {
    // height: "600px",
    // height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "relative",
  },
  // "@media (max-width: 768px)": {
  //   slider: {
  //     height: "360px",
  //   },
  //   sliderImage: {
  //     height: "360px",
  //   },
  // },
  // "@media (max-width: 1024px)": {
  //   slider: {
  //     // height: "460px",
  //   },
  //   sliderImage: {
  //     // height: "460px",
  //   },
  // },
  innerSlider: {
    position: "absolute",
    top: "50%",
    left: "25%",
    width: "40%",
    transform: "translate(-50%, -50%)",

    color: "#7E563D",
    zIndex: 1,
  },
  heading: {
    fontSize: "90px",
    fontFamily: "Playfair Display",
    "@media (max-width: 800px)": {
      fontSize: "70px",
    },
    "@media (max-width: 600px)": {
      fontSize: "60px",
    },
    "@media (max-width: 380px)": {
      fontSize: "50px",
    },
  },
  paragraph: {
    fontSize: "20px",
    "@media (max-width: 800px)": {
      fontSize: "18px",
    },
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
    "@media (max-width: 380px)": {
      fontSize: "13px",
    },
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    marginTop: "5%",
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#7E563D",
    // padding:"10px",
    height: "40px",
    width: "120px",
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
}));

export default function Slidder() {
  const classes = useStyles();

  const sliderData = [
    {
      image: "/Image/eg-banner-3.jpg",
      // heading: "Black Tea",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      image: "/Image/eg-banner-2.jpg",
      // heading: "Black Tea",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      image: "/Image/eg-banner-1.jpg",
      // heading: "Black Tea",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      image: "/Image/eg-banner-4.jpg",
      // heading: "Beauty Products",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,

    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <Box style={{ bottom: "20px", textAlign: "center" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </Box>
    ),
  };

  return (
    <>
      <Slider {...settings} className={classes.slickActive}>
        {sliderData.map((slide, index) => (
          <Box
            key={index}
            className={classes.slider}
            style={{
              height: "816px",
              width: "100vw",
              backgroundImage: `linear-gradient(to right, #000000, transparent), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Box className={classes.slider}>
              <img
                src={slide.image}
                alt={slide.heading}
                className={classes.sliderImage}
              />
              {/* 
          <Box className={classes.innerSlider}> 
            <Typography className={classes.heading} variant="h1">{slide.heading}</Typography> 
            <Button className={classes.loginButton}> Shop Now</Button> 
          </Box> */}
            </Box>
          </Box>
        ))}
      </Slider>
    </>
  );
}
