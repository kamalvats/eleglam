import React, { useContext, useEffect, useState } from "react";
import { Grid, Box, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Accordion from "@material-ui/core/Accordion";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "src/context/Auth";

import { CircularProgress } from "@mui/material";


const styles = {
  mainImageContainer: {
    background: "white",
    display: "flex",
    aspectRatio: "1/1",
    maxWidth: "400px",
  },
  thumbnailImage: {
    width: 80,
    height: 80,
    borderRadius: "4px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
  },
  activeThumbnail: {
    border: "2px solid #fff",
    transform: "scale(1.1)",
  },
  mainImage: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  },
  button: {
    borderRadius: "25px",
    padding: "15px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background 0.3s ease, transform 0.2s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  rightSection: {
    maxHeight: "500px",
    overflowY: "auto",
    padding: "20px",
    borderRadius: "8px",
    scrollBehavior: "smooth",
  },
};

const thumbnails = [
  { src: "/Image/Green690.jpg", alt: "Thumbnail 1" },
  { src: "/Image/2TriplelayerRyby950.jpg", alt: "Thumbnail 2" },
  { src: "/Image/tripleayeredgreen800.jpg", alt: "Thumbnail 3" },
];

const ProductPage = () => {
  const { userDetails, profileAPi } = useContext(AuthContext);
  const accessToken = window.sessionStorage.getItem("ELEGLAMToken");
  const [mainImage, setMainImage] = useState("");
  const history = useHistory();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const [dealData, setDealData] = useState([]);

  const productId = location.state?.productId; // ✅ Accessing passed state

  console.log("Product ID:", productId);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const getData = async () => {
    try {
      setLoading(true)
      const res = await axios({
        method: "GET",
        url: apiConfig.userViewProduct,
        params: { _id: productId },
      });
      if (res.data?.responseCode === 200) {
        setLoading(false)
        setDealData(res?.data?.result);
        setMainImage(res?.data?.result?.images[0]);
        console.log("Cart Response...", res?.data?.result);
      }
    } catch (error) {
      setLoading(false)
      setDealData([]);
      console.log("gggggggg", error);
      console.log(
        error?.res?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    getData();
  }, [productId]);

  const handleCart = async (productId) => {
    setIsAddingToCart(true);
    try {
      let updatedCart = [...(userDetails?.cart || [])]; // Get current cart

      // Check if the product is already in the cart
      const isAlreadyInCart = updatedCart.some(
        (item) => item.productId._id === productId
      );

      if (!isAlreadyInCart) {
        updatedCart.push({ productId, quantity: 1 }); // Add new product to cart
      }

      const res = await axios({
        method: "PUT",
        url: apiConfig.editProfile,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: { cart: updatedCart }, // Send updated cart
      });

      if (res.data?.responseCode === 200) {
        toast.success(res.data?.responseMessage);
        profileAPi();
        console.log("Updated Cart Response:", res?.data?.result);
      }
    } catch (error) {
      console.log("Cart Error:", error);
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsAddingToCart(false); // Stop loading
    }
  };

  const isAlreadyInCart = userDetails?.cart?.some(
    (item) => item.productId._id === dealData?._id
  );

  
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
          {/* <Typography variant="h6">Backend is working. Please try again after some time.</Typography> */}
        </Box>
      );
    }
  

  return (
    <Grid container spacing={4} p={4} style={{ background: "white" }}>
      {/* Left Section - Product Image Gallery */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.mainImageContainer}
        >
          <img src={mainImage} alt="Product" style={styles.mainImage} />
        </motion.div>
        <Box display="flex" gap={2} mt={2}>
          {dealData?.images?.length > 0 ? (
            dealData.images.map((thumbnail, index) => (
              <motion.img
                key={index}
                src={thumbnail}
                alt="Product Image"
                onClick={() => handleThumbnailClick(thumbnail)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  ...styles.thumbnailImage,
                  ...(mainImage === thumbnail ? styles.activeThumbnail : {}),
                }}
              />
            ))
          ) : (
            <Typography>No images available</Typography> // ✅ Default case
          )}
        </Box>
      </Grid>

      {/* Right Section - Product Details (Scrollable) */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.rightSection}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {dealData.productTitle}{" "}
          </Typography>
          <Box className="displayStart" mt={1}>
            <WhatshotIcon style={{ color: "red" }} />
            <Typography variant="body2" style={{ color: "red" }}>
              36 sold in last 8 hours
            </Typography>
          </Box>
          <Box className="displayStart" mt={1} mb={3}>
            <VisibilityIcon />
            <Typography variant="body2">
              &nbsp; Free Shipping on Prepaid Orders (India) Save ₹1,299.00
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight="bold" mb={1}>
            Product Details:
          </Typography>

          <Typography
            variant="body2"
            fontWeight="500"
            dangerouslySetInnerHTML={{
              __html: dealData?.productDetails || "--",
            }}
          />

          {/* </>
          )} */}

          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={2}
            my={3}
          >
            <Button
              variant="contained"
              sx={{
                ...styles.button,
                background: "#fff",
                color: "#000",
                width: { xs: "100%", sm: "50%" },
                fontSize: { xs: "14px !important", sm: "18px !important" },
              }}
              fullWidth
              onClick={() => {
                if (!accessToken) {
                  sessionStorage.setItem("prevPage", "/product-page"); // Store the intended page
                  sessionStorage.setItem("prevProductId", dealData?._id); // Store Product ID
                  history.push("/sign-in");
                  return;
                }
                if (!isAlreadyInCart) {
                  handleCart(dealData?._id);
                  toast.success("Successfully added to cart.");
                }
              }}
              disabled={isAlreadyInCart || dealData?.stockAvailable === false} // Disable button if already in cart
            >
              {dealData?.stockAvailable === false
                ? "Out of Stock"
                : isAlreadyInCart
                ? "✓ Added to Cart"
                : isAddingToCart
                ? "Adding..."
                : "Add to Cart"}
            </Button>

            {/* <Button
              variant="contained"
              sx={{ ...styles.button, background: "#000", color: "#fff" }}
              fullWidth
            >
              Buy It Now
            </Button> */}
          </Box>

          {isMobile ? (
            <>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1" fontWeight="bold">
                    Why You'll Love It:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className="">
                    <Typography
                      variant="body2"
                      fontWeight="500"
                      dangerouslySetInnerHTML={{
                        __html: dealData?.otherDescription || "--",
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1" fontWeight="bold">
                    Style Tip:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    fontWeight="500"
                    dangerouslySetInnerHTML={{
                      __html: dealData?.styleTip || "--",
                    }}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1" fontWeight="bold">
                    Product Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    fontWeight="500"
                    dangerouslySetInnerHTML={{
                      __html: dealData?.productDescription || "--",
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            </>
          ) : (
            <>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                Why You'll Love It:
              </Typography>
              <Typography
                variant="body2"
                fontWeight="500"
                dangerouslySetInnerHTML={{
                  __html: dealData?.otherDescription || "--",
                }}
              />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                Style Tip:
              </Typography>
              <Typography
                variant="body2"
                fontWeight="500"
                dangerouslySetInnerHTML={{
                  __html: dealData?.styleTip || "--",
                }}
              />
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Product Description
              </Typography>
              <Typography
                variant="body2"
                fontWeight="500"
                dangerouslySetInnerHTML={{
                  __html: dealData?.productDescription || "--",
                }}
              />
            </>
          )}
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
