import React, { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CustomIcon from "../views/pages/wishlist_page/DiscountBage";
import { Rating } from "@material-ui/lab";
import productImg from "../views/Images/product2.jpeg";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "300px",
    margin: "0 auto",
    padding: " 20px 0px",
  },
  amountBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  ratingBox: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
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
    "@media(max-width:600px)": {
      fontSize: "10px !important",
    },
  },
  title: {
    color: "#4f4f4f",
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "400px",
    lineHeight: "24.55px",
    textAlign: "center",
  },
  subtitle: {
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
  imgBox: {
    position: "relative",
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
};

const Card = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box style={styles.cardContainer}>
      <Box style={styles.imgBox}>
        {isFavorite ? (
          <FavoriteIcon
            style={styles.favoriteIcon}
            onClick={handleFavoriteToggle}
          />
        ) : (
          <FavoriteBorderIcon
            style={styles.favoriteIcon}
            onClick={handleFavoriteToggle}
          />
        )}
        <Box component={"span"} style={styles.addToCartIcon}>
          <CustomIcon discount={80} />
        </Box>
        <img
          src={productImg}
          alt="Product Name"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Typography style={styles.title}>Brand Name</Typography>
      <Typography style={styles.subtitle}>Product Name</Typography>
      <Box style={styles.ratingBox}>
        <Rating
          onClick={handleRating}
          //   onPointerEnter={onPointerEnter}
          //   onPointerLeave={onPointerLeave}
          //   onPointerMove={onPointerMove}
          ratingValue={rating}
        />
      </Box>
      <Box style={styles.amountBox}>
        <Typography style={styles.discountPrice}>Rs. 180</Typography>
        <Typography style={styles.actualPrice}>Rs. 200</Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button fullWidth style={styles.button}>
          <ShoppingCartIcon
            style={{
              height: "18px",
              width: "18px",
              marginRight: "5px",
            }}
          />
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
