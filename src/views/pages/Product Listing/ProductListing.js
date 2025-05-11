import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';

import { Rating } from "@material-ui/lab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import ExploreCard from "src/component/ExploreCard";
import Pagination from "@material-ui/lab/Pagination";
import NoDataFound from "src/component/NoDataFound";
import { toast } from "react-hot-toast";

const styles = {
  squareRadio: {
    marginTop:"15px",
    '& .MuiRadio-root': {
     width:"10px",
   
    },
  },
  label:{
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "30.6px",
  
    
  },
  container: {
    position: "relative",
    textAlign: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
    transform: "scaleX(-1)",
  },
  text: {
    fontFamily: "Playfair Display",
    fontSize: "50px",
    fontWeight: 600,
    lineHeight: "66.65px",
    letterSpacing: "0.03em",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#7E563D", // adjust color as needed
  },
  productListHead: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: "700px",
    margin: "10px 0",
    // lineHeight: "81.6px",
  },
  imgBox: {
    // margin: "0 auto",
    // width: "230px",
    // height: "230px",
  },
  customDivider:{
    width:"18vw",
    height:"1px",
    marginTop:"15px",
  
   
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
  checkbox_label: {
    textWrap: "no-wrap",
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
    fontWeight: 700,
    lineHeight: "37.4px",
    textAlign: "left",
    marginTop:"50px",
    // marginLeft:"50px"
  },
  checkSubHead: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "81.6px",
    textAlign: "left",
    marginTop:"50px",

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
    width: "200px",
    // display: "block",
    // alignItems: "center",
    // lineHeight: "30.6px",
  },
  checkDivider: {
    width: "80%",
    marginLeft: "20px",
  },
};
const mediaQueries = {
  "@media (max-width: 768px)": {
    text: {
      fontSize: "2.5rem",
    },
  },
  "@media (max-width: 576px)": {
    text: {
      fontSize: "2rem",
    },
  },
};

const ProductListing = () => {
  const [rating, setRating] = useState(0);
  const [state, setState] = useState({
    left: false,
  });
  const [value, setValue] = useState(null);
  const [subValue, setSubValue] = useState(null);
  const [categorySelected, setCategorySeleccted] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const mergedStyles = { ...styles, ...mediaQueries };
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleTypes = (event) => {
    if (event.target.value === value) {
      setValue(null);
      setCategorySeleccted(false);
    } else {
      setValue(event.target.value);
      setCategorySeleccted(true);
      setCategoryId(event.target.value);
    }
    // console.log("categoryid...", value);
    fetchProduct(event.target.value === value ? null : event.target.value);
    fetchProductCategory(
      event.target.value === value ? null : event.target.value
    );
  };

  const handleSubTypes = (event) => {
    if (event.target.value === subValue) {
      setSubValue(null);
    } else {
      setSubValue(event.target.value);
    }
    fetchProduct(
      event.target.value === subValue ? categoryId : event.target.value,
      event.target.value === subValue ? true : false
    );
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      style={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid item xs={12} md={12} justifyContent="center" alignContent="center">
        <FormGroup column>
          <Box>
            <Typography style={checkStyle.checkHeading}>Type</Typography>
          </Box>
          <FormControl>
            <RadioGroup
              aria-label="productsCategory"
              name="category"
              value={value}
              // onChange={handleTypes}
            >
              {category &&
                category.map((values, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={values._id}
                      control={<Radio onClick={handleTypes} />}
                      label={values.categoryName}
                    />
                  );
                })}
            </RadioGroup>
          </FormControl>
        </FormGroup>
        {categorySelected && (
          <FormGroup column>
            <Box>
              <Typography style={checkStyle.checkHeading}>
                Categories
              </Typography>
            </Box>
            <FormControl>
              <RadioGroup
                aria-label="productsSubCategory"
                name="subCategory"
                value={value}
              >
                {category[0].subCategory &&
                  category[0].subCategory.map((values, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={values.subcategoryName}
                        control={
                          <Radio
                            checked={subValue === values.subcategoryName}
                            onClick={handleSubTypes}
                          />
                        }
                        label={values.subcategoryName}
                      />
                    );
                  })}
              </RadioGroup>
            </FormControl>
          </FormGroup>
        )}
      </Grid>
    </Box>
  );

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchProduct = async (data, isId = true) => {
    const token = await window.sessionStorage.getItem("ELEGLAMToken");
    try {
      const params = {};
      if (isId) {
        params.categoryId = data ? data : null;
        params.page = page;
        params.limit = "10";
      } else {
        params.subCategory = data ? data : null;
        params.page = page;
        params.limit = "10";
      }
      const res = await axios({
        method: "GET",
        url: token ? apiConfig.fetchProduct : apiConfig.fetchProduct2,
        params,
        headers: {
          token: token,
        },
      });
      if (res.data?.responseCode === 200) {
        console.log(res?.data?.responseMessage || "Data fetch successfully.");
        setProducts(res?.data?.result?.docs);
        console.log("Product Response...", res?.data?.result?.docs);
        setNoOfPages(res?.data?.result?.pages);
      } else {
        console.log(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
        return null;
      }
    } catch (error) {
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  const fetchProductCategory = async (id) => {
    const token = window.sessionStorage.getItem("ELEGLAMToken");
    try {
      const res = await axios({
        method: "GET",
        url: token
          ? apiConfig.fetchProductCategory
          : apiConfig.fetchProductCategory2,
        params: {
          categoryId: id ? id : null,
        },
        headers: {
          token: token,
        },
      });
      if (res.data?.responseCode === 200) {
        console.log(res?.data?.responseMessage || "Data fetch successfully.");
        setCategory(res?.data?.result?.docs);
        console.log("Category Response...", res?.data?.result?.docs);
      } else {
        console.log(
          res.data?.responseMessage || "Something went wrong. Please try again."
        );
        return null;
      }
    } catch (error) {
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [page]);

  useEffect(() => {
    fetchProductCategory();
  }, []);

  return (
    <>
      <Box style={styles.container}>
        <img src="/Image/cattleimg.png" alt="cattle" style={styles.image} />
        <Typography variant="h1" style={styles.text}>
          PRODUCT LISTING
        </Typography>
      </Box>
      <Grid
        container
        style={isXs ? { padding: "2px 30px" } : { padding: "2px 100px" }}
      >
        {isXs && (
          <Grid item alignItems="center" style={{ marginTop: "1.4rem" }}>
            <Box component={"span"}>
              {["left"].map((anchor) => (
                <Fragment key={anchor}>
                  <MenuIcon
                    // style={{ margin: "10px" }}
                    onClick={toggleDrawer(anchor, true)}
                    fontSize="large"
                  />
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </Fragment>
              ))}
            </Box>
          </Grid>
        )}
        <Grid item xs={1} md={3} style={{ marginTop: "1.4rem" }}>
          <Grid
            item
            xs={2}
            md={3}
            justifyContent="center"
            alignContent="center"
          >
            {!isXs && (
              <FormGroup row>
                <Box>
                  <Typography style={checkStyle.checkHeading}>Type</Typography>
                </Box>
                <Divider style={styles.customDivider}  />
                <FormControl  style={styles.squareRadio}
                >
                  <RadioGroup
                    aria-label="productsCategory"
                    name="category"
                    value={value}
                 
                    size="small"
                
                    // onChange={handleTypes}
                  >
                    {category &&
                      category.map((values, index) => {
                        return (
                        <FormControlLabel
                            key={index}
                            value={values._id}
                            control={<Radio onClick={handleTypes} />}
                            label={<Typography variant="body1" style={styles.label}>{values.categoryName}</Typography>}
                             
                          />
                        );
                      })}
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            )}
            {!isXs && (
              <>
                {categorySelected && (
                  <FormGroup row>
                    <Box>
                      <Typography style={checkStyle.checkHeading}>
                        Categories
                      </Typography>
                    </Box>
                    <Divider style={styles.customDivider}  />
                    <FormControl style={styles.squareRadio}>
                      <RadioGroup
                        aria-label="productsSubCategory"
                        name="subCategory"
                        value={value}
                      >
                        {category[0].subCategory &&
                          category[0].subCategory.map((values, index) => {
                            return (
                              <FormControlLabel
                                key={index}
                                value={values.subcategoryName}
                                control={
                                  <Radio
                                    checked={
                                      subValue === values.subcategoryName
                                    }
                                    onClick={handleSubTypes}
                                  />
                                }
                                label={values.subcategoryName}
                              />
                            );
                          })}
                      </RadioGroup>
                    </FormControl>
                  </FormGroup>
                )}
              </>
            )}
          </Grid>
        </Grid>

        <Grid item xs={9} >
          <Typography variant="h4" style={checkStyle.checkSubHead}>
            Available Products- Order Now
          </Typography>
          <ExploreCard data={products} />
          {products && products?.length === 0 && <NoDataFound />}
          <Box mb={1} mt={10} >
            <Pagination
              count={noOfPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              shape="rounded"
              color="primary"
            />
          </Box>
         
        </Grid>
      </Grid>
    </>
  );
};

export default ProductListing;
