import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CustomIcon from "../views/pages/wishlist_page/DiscountBage";
import Slider from "react-slick";
// import { PrevArrow, NextArrow } from "./SliderArrows";

const styles = {
  imgBox: {
    position: "relative", 
    display: "inline-block",
    width: "100%",
    height: "400px",
  },
  favBox:{
    position: "absolute",
    top: "8px",
    right: "8px",
    zIndex: 1,
    width:"40px",
    height:"40px",
border:"1px solid #7E563D",
borderRadius:"50px",
display:"flex",
justifyContent:"center",
background:"#7E563D"

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
    fontWeight: "400",
    lineHeight: "27.2px",
    textAlign: "center",
    background: "#f6931f",
    color: "#7E563D",
    textTransform: "none",
    Width: "150px",
    borderRadius: "30px",
    padding: "10px 8px",
  },
  boxButtonHover: {
    color: "#7E563D",
    backgroundColor: "#f6931f",
  },
  boxTypo1: {
    color: "#4f4f4f",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "24.55px",
    textAlign: "center",
  },
  boxTypo2: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "26.66px",
    textAlign: "center",
  },
  favoriteIcon: {
    position: "absolute",
    top: "5px",
    right: "5px",
    zIndex: 1,
    color: "red",
    cursor: "pointer",
    fontSize: "30px",
  },
  addToCartIcon: {
    position: "absolute",
    top: "5px",
    left: "5px",
    zIndex: 1,
    color: "#000",
    cursor: "pointer",
  },
  discountPrice: {
    color: "#4d8c3f",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "24.55px",
    textAlign: "center",
  },
  actualPrice: {
    color: "#a7a7a7",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "600",
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
  mainBox:{
    
    // " & .slick-track":{
    //   // backgroundColor:'green !important',
    //   display:"flex",
    //   columnGap:'1%',
    //   // gap: "16px",
    // }
  }
};

// const PrevArrow = ({ onClick }) => {
//     return (
//       <div
//         className={`slick-prev`}
//         onClick={onClick}
//       >
//         Prev
//       </div>
//     );
//   };
  
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div
//         className={`slick-arrow slick-next`}
//         onClick={onClick}
//       >
//         Next
//       </div>
//     );
//   };
  const settings = {
    autoplay: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding:"20px",
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1300, // tablet/desktop breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // tablet/desktop breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // phone breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

const SliderExploreCard = ({ data, type }) => {
  console.log("gygygygy",data);
  const [ratings, setRatings] = useState({});
  const [favorites, setFavorites] = useState({});

  const history = useHistory();

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      const newFavorites = {};
      data.forEach((deal, index) => {
        newFavorites[index] = deal.wishListProduct;
      });
      setFavorites(newFavorites);
    }
  }, [data]);

  const handleRating = (rate, index) => {
    setRatings({ ...ratings, [index]: rate });
  };

  const addAndRemoveCart = async (id) => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addAndRemoveCart,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          productId: id,
          addAndRemoveCartKey: "add",
        },
      });
      if (res.data?.responseCode === 200) {
        // console.log("Cart...",res.data?.result)
        toast.success(res.data?.responseMessage);
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  const addAndRemoveToWishlist = async (id, index) => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addAndRemoveToWishlist,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          productId: id,
        },
      });
      if (res.data?.responseCode === 200) {
        const newFavorites = { ...favorites };
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);
        toast.success(res.data?.responseMessage);
      } else {
        toast.error(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  // const [isFavorite, setIsFavorite] = useState(false);
  // const [rating, setRating] = useState(0);

  //   const handleRating = (rate) => {
  //     setRating(rate);
  //   };

  const handleFavoriteToggle = (index) => {
    setFavorites({ ...favorites, [index]: !favorites[index] });
    addAndRemoveToWishlist(data[index]._id);
  };

  return (
    <Box style={styles.mainBox}>
      <Slider {...settings}>
        {Array.isArray(data) &&
          data.map((deal, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={12}
              lg={12}
              p={2}
            >
              <Box p={2}>
                <Box style={styles.imgBox}>
                  <Box style={styles.favBox}>
                  {favorites[index] ? (
                    <FavoriteIcon
                      style={styles.favoriteIcon}
                      onClick={() => addAndRemoveToWishlist(deal._id, index)}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      style={styles.favoriteIcon}
                      onClick={() => addAndRemoveToWishlist(deal._id, index)}
                    />
                  )}
                  </Box>
                  <Box component={"span"} style={styles.addToCartIcon}>
                    <CustomIcon discount={80} />
                  </Box>
                  
                  <img
                    src={deal.productImage[0]}
                    alt={deal.description}
                    style={{width: "100%", height: "100%", cursor:"pointer"}}
                    
                    onClick={() =>
                      history.push({
                        pathname: "/product-page",
                        query: {
                          deal,
                        },
                      })
                    }
                  />
                </Box>
                
              <Box style={styles.dataBox}>
                <Typography style={styles.boxTypo1}>
                  {deal.categoryName}
                </Typography>
                <Typography style={styles.boxTypo2}>{deal.name}</Typography>
                <Box style={styles.ratingBox}>
                  <Rating
                    onClick={(event, newValue) => handleRating(newValue, index)}
                    value={ratings[index] || 0}
                    style={{ width: "100px" }}
                  />
                </Box>
                <Box style={styles.amountBox}>
                  <Typography style={styles.discountPrice}>
                  Rs.{" "}
                    {deal.inventory.length > 0 &&
                    deal.inventory[0]?.discountPrice === 0 &&
                    deal.discountPrice !== 0
                      ? deal.inventory[0]?.price -
                        deal.inventory[0]?.price * (deal.discountPrice / 100)
                      : deal.inventory.length > 0 &&
                        deal.inventory[0]?.discountPrice === 0 &&
                        deal.discountPrice === 0
                      ? deal.inventory[0]?.price
                      : deal.inventory.length > 0
                      ? deal.inventory[0]?.discountPrice
                      : "0.00"}
                  </Typography>
                  <Typography style={styles.actualPrice}>
                    Rs.{" "}
                    {deal.inventory.length > 0 ? deal.inventory[0].price : "0"}
                    .00
                  </Typography>
                </Box>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addAndRemoveCart(deal._id)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
              </Box>
            </Grid>
          ))}
      </Slider>
    </Box>
  );
};

export default SliderExploreCard;
