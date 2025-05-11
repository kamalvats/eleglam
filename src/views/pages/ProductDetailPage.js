import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Rating } from "@material-ui/lab";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ExploreCard from "src/component/ExploreCard";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { styles } from "@material-ui/pickers/views/Calendar/Calendar";
import { toast } from "react-hot-toast";

const ProductDetailPage = () => {
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const history = useHistory();
  const location = useLocation();

  const [deal, setDeal] = useState(() => {
    const savedDeal = sessionStorage.getItem("deal");
    return savedDeal ? JSON.parse(savedDeal) : null;
  });

  useEffect(() => {
    if (location.query?.deal && !deal !== location.query.deal) {
      sessionStorage.setItem("deal", JSON.stringify(location.query.deal));
      setDeal(location.query.deal);
    }
  }, [location]);

  useEffect(() => {
    if (deal) {
      sessionStorage.setItem("deal", JSON.stringify(deal));
    }
  }, [deal]);

  const handleRating = (rate) => {
    setRating(rate);
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          // centerMode: true,
          // centerPadding: "30px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          // centerMode: true,
          // centerPadding: "20px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          // centerPadding: "10px",
        },
      },
    ],
  };

  var settings3 = {
    dots: false,
    infinite: true,
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  const dealData = [
    {
      image: "/Image/eg-product-1.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-2.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-3.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-4.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-5.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-6.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-7.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-8.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-9.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
    {
      image: "/Image/eg-product-10.jpg",
      trader: "Jwellery Traders",
      product: "Ring",
      price: "Rs. 180.00",
      originalPrice: "Rs. 200.00",
    },
  ];

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  const style = {
    mainBox: {
      margin: "0 10%",
      // backgroundColor:"red",
      // height:"500px"
    },
    heading: {
      marginTop: "1%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    headingText: {
      margin: "10px",
      fontFamily: "Playfair Display",
      fontSize: "30px",
      fontWeight: "600",
    },
    productBuyImg: {
      backgroundColor: "#DACFCA",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    headingText2: {
      // margin: "10px",
      color: "#2D2C2C",
      fontFamily: "Playfair Display",
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "2rem",
    },
    Dealrating: {
      height: "35px",
      width: "121px",
    },
    headingText3: {
      margin: "2% 0%",
      color: "#4F4F4F",
      fontFamily: "Nunito Sans",
      fontSize: "18px",
      fontWeight: "400",
      "@media (max-width: 900px)": {
        fontSize: "12px",
      },
    },
    value: {
      margin: "2% 0",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    valueText: {
      color: "#2D2C2C",
      fontFamily: "Playfair Display",
      fontSize: "16px",
      fontWeight: "500",
      wordBreak: "break-all",
    },
    discountPrice2: {
      color: "#4D8C40",
      fontFamily: "Nunito Sans",
      fontSize: "18px",
      fontWeight: "600",
      display: "flex",
      flexDirection: "row",
      marginRight: "1rem",
    },
    valueText2: {
      // marginLeft:"1%",
      color: "rgba(79, 79, 79, 1)",
      fontFamily: "Nunito Sans",
      fontSize: "18px",
      fontWeight: "600",
      display: "flex",
      flexDirection: "row",
    },
    dealButton3: {
      border: " .5px solid #7E563D",
      // padding: "10px",
      height: "32px",
      width: "70px",
      borderRadius: "10px",
      textTransform: "none",
      fontFamily: "Nunito Sans",
      color: "#7E563D",
      fontWeight: "400",
      fontSize: "14px",
      margin: "0.5rem",
    },
    dealButton2: {
      border: " .5px solid #C9C9C9",
      // padding: "10px",
      height: "32px",
      width: "70px",
      borderRadius: "10px",
      textTransform: "none",
      fontFamily: "Nunito Sans",
      color: "#C9C9C9",
      fontWeight: "400",
      fontSize: "14px",
      margin: "0.5rem",
    },
    type: {
      color: "#4F4F4F",
      fontFamily: "Nunito Sans",
      fontSize: "16px",
      fontWeight: "400",
      display: "flex",
      flexDirection: "row",
    },
    quantityButton: {
      border: " .5px solid #7E563D",
      // padding: "10px",
      height: "30px",
      minWidth: "30px",

      textTransform: "none",
      fontFamily: "Nunito Sans",
      color: "#7E563D",
      // fontWeight: "400",
      fontSize: "14px",
      backgroundColor: "#F4F4F4",
    },
    quantityValue: {
      fontFamily: "Source Sans Pro",
      color: "#333333",
      fontWeight: "400",
      fontSize: "15px",
      margin: " 0px 0.5rem",
    },
    CartButton: {
      border: " .5px solid #7E563D",
      padding: "10px",
      height: "50px",
      width: "158px",
      borderRadius: "30px",
      textTransform: "none",
      color: "#7E563D",
      fontWeight: "400",
      fontSize: "16px",
      backgroundColor: "#7E563D",
      marginRight: "1rem",
      "&:hover": {
        backgroundColor: "#7E563D !important",
      },
      "&:active": {
        backgroundColor: "#7E563D !important",
      },
    },
    divider: {
      width: "100%",
      color: "#D8D7D7",
      marginTop: "2%",
    },
    mainBoxDeal: {
      // backgroundColor:'red !important',
      // margin: "70px",
      // "@media (max-width: 800px)": {
      //   margin: "20px",
      // },
      " & .slick-track": {
        // backgroundColor:'green !important',
        display: "flex",
        columnGap: ".5%",
      },
    },
    dealHeading: {
      fontFamily: "Playfair Display",
      color: "#000000",
      fontWeight: "500",
      fontSize: "22px",
      margin: "3% 0",
    },
    sliderBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "red !important",
    },
    dealSlider: {
      // height: "200px",
      // maxWidth:"348px",
      display: "flex",

      justifyContent: "center",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
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
    },
    dealtrades: {
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "16px",
      color: "#4F4F4F",
    },
    dealProduct: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "20px",
      color: "#262626",
    },

    discountPrice: {
      color: "#4D8C40",
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "16px",
      margin: "10px 0px",
    },
    originalPrice: {
      color: "#4F4F4F",
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "13px",
    },
    dealButton: {
      border: " .5px solid #7E563D",
      padding: "10px",
      height: "40px",
      width: "100px",
      borderRadius: "30px",
      textTransform: "none",
      color: "#6D6D6D",
      fontWeight: "400",
      fontSize: "16px",
      // backgroundColor: "#7E563D",
    },
    CartButton2: {
      border: " .5px solid #7E563D",
      padding: "10px",
      height: "50px",
      width: "158px",
      borderRadius: "10px",
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
    divider2: {
      marginTop: "2.5%",
      width: "100%",
      color: "#D8D7D7",
    },
    ellipse: {
      backgroundImage: "/Image/ellipse.png",
      padding: "20px",
    },
    reviewMainBox: {
      display: "flex",
      flexDirection: "row",
    },
    reviewBox: {
      height: "44px",
      width: "44px",
      borderRadius: "50%",
      backgroundColor: "#FEF4E9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    totalReviewMainBox: {
      // display: "flex",
      margin: "0px 1.5rem",
      alignItems: "center",
    },
    totalReview: {
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "18px",
      color: "#4F4F4F",
    },
    reviewValue: {
      fontWeight: "700",
      fontSize: "22px",
      color: "#2D2C2C",
      fontFamily: "Nunito Sans",
      marginTop: "1rem",
    },
    divider3: {
      // marginTop: "2.5%",
      width: "1px",
      height: "70px",
      color: "#D8D7D7",
      backgroundColor: "#D8D7D7",
    },
    divider4: {
      margin: "1% 0",
      height: "1px",
      width: "100%",
      color: "#D8D7D7",
      // backgroundColor: "#D8D7D7",
    },
    reviewDate: {
      fontWeight: "400",
      fontSize: "12px",
      color: "#A4A4A4",
      fontFamily: "Poppins",
    },
    reviewName: {
      fontWeight: "700",
      fontSize: "20px",
      color: "#2D2C2C",
      fontFamily: "Playfair Display",
    },
    reviewDetail: {
      fontWeight: "400",
      fontSize: "16px",
      color: "#4F4F4F",
      fontFamily: "Nunito Sans",
      textWrap: "pretty",
    },
    viewMore: {
      display: "flex",
      // flexDirection: "row",
      justifyContent: "flex-end",
      width: "100%",
    },
    viewMoreBtn: {
      height: "50px",
      width: "158px",
      fontFamily: "Nunito Sans",
      textTransform: "none",
      color: "#7E563D",
      fontWeight: "700",
      fontSize: "18px",
      textDecoration: "underline",
      backgroundColor: "transparent", // Set background color to transparent
      border: "none",
      "&:hover": {
        backgroundColor: "transparent", // Set hover background color to transparent
      },
      "&:focus": {
        outline: "none", // Remove focus outline
      },
      "&:active": {
        backgroundColor: "transparent", // Set active background color to transparent
      },
    },
  };

  const ReviewRow = ({ name, date, text }) => (
    <>
      <Divider style={style.divider4} />
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <img src="Image/reviewprofile.png" height={63} />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginLeft: "2%",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography style={style.reviewName}>{name}</Typography>
            <Typography style={style.reviewDate}>{date}</Typography>
          </Box>
          <Typography style={style.reviewDetail}>{text}</Typography>
        </Box>
      </Box>
    </>
  );

  const [productDetails, setProductDetails] = useState([]);

  console.log(productDetails, "productDetailsproductDetails");

  useEffect(() => {
    if (deal) {
      productAPi();
    }
  }, [deal]);

  const productAPi = async () => {
    const token = window.sessionStorage.getItem("ELEGLAMToken");
    console.log("categoryID", location.query?.deal?.category);
    try {
      const res = await axios({
        method: "GET",
        url: token ? apiConfig.fetchProduct : apiConfig.fetchProduct2,
        headers: { token: token },
        params: { categoryId: location.query?.deal?.category },
      });

      if (res?.data?.responseCode === 200) {
        console.log(res?.data?.result?.docs);
        setProductDetails(res?.data?.result?.docs);
      } else {
        console.log("Failed to Fetch Products");
      }
    } catch (error) {
      console.log(
        error?.response?.data?.responseMessage ||
        "Something went wrong. Please try again."
      );
    }
  };
  useEffect(() => {
    productAPi();
  }, [location.query?.deal?.category]);

  const [selectedInventory, setSelectedInventory] = useState(
    deal?.inventory[0]
  );

  const handleButtonClick = (inventoryItem) => {
    setSelectedInventory(inventoryItem);
  };

  useEffect(() => {
    setSelectedInventory(deal?.inventory[0]);
  }, [deal?.inventory]);

  const addAndRemoveCart = async (deal) => {
    try {
      const res = await axios({
        method: "POST",
        url: apiConfig.addAndRemoveCart,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          productId: deal?._id,
          quantity: quantity,
        },
      });
      if (res.data?.responseCode === 200) {
        // console.log("Cart...",res.data?.result)
        setDeal((prevDeal) => ({ ...prevDeal, isInCart: true }));
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

  return (
    <Box style={style.mainBox}>
      <Box style={style.heading}>
        <ArrowBackIcon onClick={() => history.goBack()} />
        <Typography style={style.headingText}>Product Details</Typography>
      </Box>
      <Grid container spacing={6} style={{ margin: "2% 0%" }}>
        <Grid item lg={6} md={6} sm={6} xs={12} style={style.productBuyImg}>
          <Box style={{ width: "100%", height: "100%" }}>
          <img
            src={"/Image/eg-product-2.jpg"}
            alt="product"
            style={{ width: "100%", height: "100%" }}
          />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ paddingTop: "10px", marginTop: "0px" }}
        >
          <Box>
            <Typography style={style.headingText2}>
              {deal?.name ? deal.name : "dummy"}
            </Typography>
            <Box style={style.Dealrating}>
              <Rating
                style={{ width: "100%" }}
                onClick={(e) => {
                  handleRating(e);
                }}
              />
            </Box>

            <Typography style={style.headingText3}>
              {deal?.description ? deal.description : "dummy"}
            </Typography>
            <Grid container style={style.value}>
              <Grid item sm={3} md={3} xs={3}>
                {" "}
                <Typography style={style.valueText}>Price:</Typography>
              </Grid>
              <Grid
                item
                sm={9}
                md={9}
                xs={9}
                style={{ display: "flex", flexDirection: "row" }}
                gap={2}
              >
                <Typography style={style.discountPrice2}>
                  Rs.
                  {selectedInventory?.discountPrice === 0 &&
                    deal?.discountPrice !== 0
                    ? selectedInventory?.price -
                    selectedInventory?.price * (deal?.discountPrice / 100)
                    : selectedInventory?.discountPrice === 0 &&
                      deal?.discountPrice === 0
                      ? selectedInventory?.price
                      : selectedInventory?.price -
                      selectedInventory?.price *
                      (selectedInventory?.discountPrice / 100)}
                  .00
                </Typography>
                {/* {deal?.discountPrice === 0 &&
                  selectedInventory?.discountPrice === 0 && ( */}
                <Typography style={style.valueText2}>
                  <del>Rs. {selectedInventory?.price}.00</del>
                </Typography>
                {/* )} */}
              </Grid>
            </Grid>

            <Grid container style={style.value}>
              <Grid item sm={3} md={3} xs={3}>
                {" "}
                <Typography style={style.valueText}>Value/Size:</Typography>
              </Grid>
              <Grid
                item
                sm={9}
                md={9}
                xs={9}
                style={{ display: "flex", flexDirection: "row" }}
                gap={2}
              >
                {Array.isArray(dealData) &&
                  dealData.map((inventoryItem, index) => (
                    <Button
                      key={index}
                      style={
                        selectedInventory === inventoryItem
                          ? style.dealButton3
                          : style.dealButton2
                      }
                      onClick={() => handleButtonClick(inventoryItem)}
                    >
                      {`${inventoryItem.size} ${inventoryItem.unit}`}
                    </Button>
                  ))}
              </Grid>
            </Grid>

            {/* <Grid container style={style.value}>
              <Grid item sm={3} md={3} xs={3}>
                {" "}
                <Typography style={style.valueText}>Type:</Typography>
              </Grid>
              <Grid
                item
                sm={9}
                md={9}
                xs={9}
                style={{ display: "flex", flexDirection: "row" }}
                gap={2}
              >
                <Typography style={style.type}>Loose Leaf</Typography>
              </Grid>
            </Grid> */}

            <Grid container style={style.value}>
              <Grid item sm={3} md={3} xs={3}>
                {" "}
                <Typography style={style.valueText}>Quantity:</Typography>
              </Grid>
              <Grid
                item
                sm={9}
                md={9}
                xs={9}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                gap={2}
              >
                 
                <Button
                  style={style.quantityButton}
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Typography style={style.quantityValue}>{quantity}</Typography>
                <Button
                  style={style.quantityButton}
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Grid>
            </Grid>

            {/* <Grid container style={style.value}>
                <Grid item sm={4} md={4} xs={4} > 
                <Button style={style.CartButton}>
                  {" "}
                  <ShoppingCartIcon /> Add to Cart
                </Button>
                </Grid>
                <Grid item sm={8} md={8} xs={8}  > 
                <Button style={style.CartButton}>
                  {" "}
                  Buy Now
                </Button>
               
                </Grid>

              </Grid> */}

            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "40px",
              }}
              gap={2}
            >
              <Button
                style={style.CartButton}
                onClick={() => {
                  deal.isInCart
                    ? history.push({
                      pathname: `/my-cart`,
                    })
                    : addAndRemoveCart(deal, quantity);
                }}
              >
                {" "}
                <ShoppingCartIcon />{" "}
                {deal?.isInCart ? "Go To Cart" : "Add To Cart"}
              </Button>
              <Button style={style.CartButton}> Buy Now</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider style={style.divider} />

      <Box style={style.mainBoxDeal}>
        <Typography style={style.dealHeading}> Related Products</Typography>

        {/* <Slider {...settings3} style={style.sliderBox}>
          <Box
            style={{
              ...styles.dealSlider,
              maxHeight: "180px",
              width: "100%",
            }}
          >
            <ExploreCard data={productDetails} />
          </Box>
        </Slider> */}
        <ExploreCard data={productDetails} />
      </Box>

      <Divider style={style.divider2} />
      <Typography style={style.dealHeading}> Reviews</Typography>
      <Box style={style.reviewMainBox} gap={3}>
        <Box style={style.reviewBox}>
          <img src="/Image/vector.png" alt="ellips" style={style.ellipse} />
        </Box>
        <Box style={style.totalReviewMainBox}>
          <Typography style={style.totalReview}>Total Reviews</Typography>
          <Typography style={style.reviewValue}>10.8 k</Typography>
        </Box>
        <Divider style={style.divider3} />
        <Box style={style.totalReviewMainBox}>
          <Typography style={style.totalReview}>Average Rating</Typography>
          <Typography style={style.reviewValue}>10.8 k</Typography>
        </Box>
      </Box>

      <Box>
        <ReviewRow
          name="Amol Yadav"
          date="29th Dec, 2024"
          text="Quisque ut nisi at mi venenatis blandit. In ante risus, hendrerit sed tempus eget, eleifend id massa. Nam neque felis, iaculis cursus libero id, mattis convallis nisi."
        />

        <ReviewRow
          name="Amol Yadav"
          date="29th Dec, 2024"
          text="Quisque ut nisi at mi venenatis blandit. In ante risus, hendrerit sed tempus eget, eleifend id massa. Nam neque felis, iaculis cursus libero id, mattis convallis nisi."
        />
        <ReviewRow
          name="Amol Yadav"
          date="29th Dec, 2024"
          text="Quisque ut nisi at mi venenatis blandit. In ante risus, hendrerit sed tempus eget, eleifend id massa. Nam neque felis, iaculis cursus libero id, mattis convallis nisi."
        />

        <ReviewRow
          name="Amol Yadav"
          date="29th Dec, 2024"
          text="Quisque ut nisi at mi venenatis blandit. In ante risus, hendrerit sed tempus eget, eleifend id massa. Nam neque felis, iaculis cursus libero id, mattis convallis nisi."
        />
      </Box>
      <Box style={style.viewMore}>
        <Button style={style.viewMoreBtn}> View More</Button>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
