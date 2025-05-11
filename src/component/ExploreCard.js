import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { AuthContext } from "src/context/Auth";

import axios from "axios";
import {
  Router,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { CircularProgress } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  MainContainer: {
    padding: "4px 2px",
    marginBottom: "60px",
    "@media(max-width:600px)": {
      padding: "3px 2px",
      marginBottom: "40px",
    },
  },
  cardContainer: {
    textAlign: "center",
    height: "100%",
    paddingBottom: "4px",
    backgroundColor: "white",
  },
  cardContainer2: {
    backgroundColor: "white",
    height: "100%",
  },
  imgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    width: "100%",
    height: "320px",
    "@media(max-width:425px)": {
      height: "180px",
    },
    "@media(max-width:600px)": {
      height: "220px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    alignItems: "flex-start",
    textAlign: "left",
    flexGrow: 1,
  },
  contentBox2: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    
    flexGrow: 1,
  },
  traderName: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: 400,
    color: "black",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  priceBox: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
    "@media (max-width: 600px)": {
      gap: "6px",
    },
  },
  discountPrice: {
    color: "red",
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px !important",
    },
  },
  actualPrice: {
    color: "black",
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    textDecoration: "line-through",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px !important",
    },
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
  },
  productDescription: {
    fontFamily: "Playfair Display",
    color: "#ecdace",
    fontSize: "18px",
    fontWeight: 600,
  },
  button: {
    width: "90%",
    marginTop: "auto", // Pushes the button to the bottom
    backgroundColor: "#f6931f",
    borderRadius: "30px",
    padding: theme.spacing(1, 2),
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#f6931f",
    },
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
}));

const ExploreCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [dealData, setDealData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);


  // const { dealData } = useContext(AuthContext);

  const getData = async () => { 
    try {
      setLoading(true)
      const res = await axios({
        method: "GET",
        url: apiConfig.userProductList,
      });
      if (res.data?.responseCode === 200) {
        setDealData(res?.data?.result?.docs);
        setLoading(false);
        console.log("Cart Response...", res?.data?.result?.docs);
      } else {
        console.log(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
        setLoading(false);
        return null;
      }
    } catch (error) {
      setDealData([]);
      setLoading(false);
      console.log(
        error?.res?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    getData();
  }, [location.pathname]); 


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (dealData.length === 0) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="60vh">
        <img src="/Image/backendIssue.png" alt="Backend Issue" style={{ width: "250px", marginBottom: 10 }} />
        {/* <Typography variant="h6">Backend is working !<br /> Please try again after some time.</Typography> */}
      </Box>
    );
  }

  return (
    
    <Grid container justifyContent="center">
      {dealData &&
        dealData.map((deal, index) => (
          <Grid
            item
            className={classes.MainContainer}
            lg={3}
            md={4}
            sm={6}
            xs={6}
            key={index}
          >
            <Box className={classes.cardContainer}>
              <Box className={classes.cardContainer2}>
                <Box
                  className={classes.imgBox}
                  onClick={() => {
                    history.push({
                      pathname: "/product-page",
                      state: { productId: deal._id }, // ✅ Correct way to pass state
                    });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Box className={classes.imageContainer}>
                    <img
                      src={deal.images[0]}
                      alt={deal.product}
                      className={classes.image}
                    />
                  </Box>
                </Box>
                <Box className={classes.contentBox}>
                  <Box className={classes.contentBox2}>
                    <Box className={classes.contentBox}>
                      <Typography className={classes.traderName}>
                        {/* {deal.productTitle.length > 30
                          ? `${deal.productTitle.slice(0, 30)}...`
                          : deal.productTitle} */}
                          {deal.productTitle}
                      </Typography>
                      <Box className={classes.priceBox}>
                        <Typography className={classes.discountPrice}>
                          ₹{" "}
                          {deal.price > deal.discountPrice
                            ? deal.price - deal.discountPrice
                            : 0}
                          .00 INR
                        </Typography>

                        <Typography className={classes.actualPrice}>
                          ₹ {deal.price}.00 INR
                        </Typography>

                        <Typography className={classes.discountPrice}>
                          |{" "}
                          {deal.price > deal.discountPrice
                            ? Math.round(
                                (deal.discountPrice / deal.price) * 100
                              )
                            : 0}
                          % off
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  {/* <Button
                    variant="contained"
                    startIcon={
                      buttonText[deal.trader] === "Successfully Added" ? (
                        <TiTick />
                      ) : (
                        <ShoppingCartIcon />
                      )
                    }
                    className={classes.button}
                    onClick={() => {
                      handleAddToCart(deal.trader);
                      addToCart(deal.trader);
                    }}
                  >
                    {buttonText[deal.trader] || "Add To Cart"}
                  </Button> */}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default ExploreCard;
