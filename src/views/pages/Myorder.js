import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@material-ui/lab/Pagination";
import { CircularProgress } from "@mui/material";

import { CiSearch } from "react-icons/ci";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NoDataFound from "src/component/NoDataFound";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heading: {
    // fontSize: "30px",
    fontWeight: "600 !important",
    fontFamily: "Poppins !important",
    marginLeft: "10px !important",
  },
}));

const OrderList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [orderProductList, setOrderProductList] = useState();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const [searchIt, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const handleOrderList = async (pincode) => {
    try {
      setLoading(true);
      const response = await axios({
        method: "GET",
        url: apiConfig.orderList,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        params: {
          page: page,
          ...(searchIt && { search: searchIt }),
        },
      });

      if (response.data && response.data.responseCode === 200) {
        // toast.success(response.data.responseMessage);
        setLoading(false);
        setNoOfPages(response?.data?.result?.pages);
        setOrderProductList(response.data.result.docs);
        console.log("object", response.data.result.docs);
      } else {
        setLoading(false);
        // toast.error("Invalid Pincode. Please enter again.");
        setOrderProductList();
        setNoOfPages(1);
      }
    } catch (error) {
      setLoading(false);
      // toast.error("Failed to fetch state and district");
      setOrderProductList();
      setNoOfPages(1);
    }
  };

  useEffect(() => {
    handleOrderList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    if (searchIt === "") {
      setPage(1); // optional: search reset karte time page ko 1 kar dena
      handleOrderList();
    }
  }, [searchIt]);

  console.log("12121212 pagepagepage", page);

  const handleSearch = async () => {
    try {
      setSearchLoading(true); // Start loading
      setPage(1); // Page reset to 1
      await handleOrderList(); // Call search API
    } finally {
      setSearchLoading(false); // End loading
    }
  };

  return (
    <>
      <Box sx={{ p: 2, maxWidth: "1100px", margin: "auto" }}>
        {/* Search Bar */}
        <Box display="flex" alignItems="center" pb={1.7}>
          <IoIosArrowRoundBack
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => history.goBack()}
          />
          <Typography className={classes.heading} variant="h4" pl={1.2}>
            My Order
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 0, sm: 2 }} alignItems="center">
          <Grid item xs={12} padding={{ xs: "4px 0" }} sm={8} md={9}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search your orders here"
              size="small"
              value={searchIt} // 👈 Controlled input
              onChange={(e) => setSearch(e.target.value)} // 👈 Update on change
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(); // 👈 instead of directly calling handleOrderList
                }
              }}
              InputProps={{ sx: { height: "40px" } }}
            />
          </Grid>
          <Grid item xs={12} padding={{ xs: "4px 0" }} sm={4} md={3}>
            <Button
              variant="contained"
              startIcon={!searchLoading && <CiSearch />} // Agar loading nahi hai tab icon
              disabled={searchLoading} // Searching ke time button disable
              sx={{
                height: "40px",
                color: "white",
                width: { xs: "100%", sm: "auto" },
              }}
              onClick={handleSearch} // 👈 handleSearch function banayenge
            >
              {searchLoading ? (
                <CircularProgress size={20} color="inherit" /> // Chhota loader
              ) : (
                "Search Orders"
              )}
            </Button>
          </Grid>
        </Grid>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="60vh"
          >
            <CircularProgress style={{ color: "#7E563D" }} />
          </Box>
        ) : (
          <>
            {!orderProductList || orderProductList.length === 0 ? (
              <NoDataFound
                content={"Explore more and shortlist some items."}
                headingText={"Orders"}
              />
            ) : (
              <>
                <Box mt={2}>
                  {orderProductList?.map((orderItem, orderIndex) => (
                    <Box
                      key={orderItem._id}
                      onClick={() =>
                        history.push("/order-detail-page", {
                          order: orderItem._id,
                        })
                      }
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        p: 2,
                        mb: 3,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                        transition: "0.2s",
                        "&:hover": {
                          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      {orderItem?.products.map((product, index) => {
                        const serial = `${orderIndex + 1}${String.fromCharCode(
                          97 + index
                        )}`;
                        return (
                          <Grid
                            key={index}
                            container
                            spacing={2}
                            alignItems="flex-start"
                            sx={{
                              borderBottom:
                                index !== orderItem.products.length - 1
                                  ? "1px solid #eee"
                                  : "none",
                              pb: 2,
                              mb: 2,
                            }}
                          >
                            {/* Image */}
                            <Grid item xs={3} sm={2}>
                              <Box
                                component="img"
                                src={product?.productDetails?.images[0]}
                                alt="product"
                                sx={{
                                  width: "100%",
                                  maxWidth: "70px",
                                  height: "70px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            </Grid>

                            {/* Details */}
                            <Grid item xs={9} sm={7}>
                              <Typography
                                fontWeight={600}
                                fontSize="15px"
                                noWrap
                              >
                                {product.productDetails.productTitle}
                              </Typography>
                              <Typography
                                fontSize="13px"
                                color="text.secondary"
                                sx={{ mt: 0.5 }}
                              >
                                Qty: {product.quantity}
                              </Typography>
                              <Typography
                                fontSize="13px"
                                color="text.secondary"
                                dangerouslySetInnerHTML={{
                                  __html: `${product.productDetails.productDetails
                                    ?.split(" ")
                                    .slice(0, 18)
                                    .join(" ")}...`,
                                }}
                              />
                            </Grid>

                            {/* Price */}
                            <Grid item xs={12} sm={3} textAlign="right">
                              <Typography fontWeight="bold" fontSize="15px">
                                ₹{product.productDetails.price}
                              </Typography>
                            </Grid>
                          </Grid>
                        );
                      })}

                      {/* Delivery Status */}
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        px={1}
                        pt={1}
                      >
                        <Typography
                          fontWeight="600"
                          fontSize="14px"
                          sx={{
                            color:
                              orderItem.status === "DELIVERED"
                                ? "green"
                                : orderItem.status === "CANCELLED"
                                ? "red"
                                : "#F7931E",
                            width: "45%",
                          }}
                        >
                          ● {orderItem.status}
                        </Typography>

                        <Typography fontSize="13px" color="text.secondary">
                          {orderItem.status === "DELIVERED"
                            ? "Your order was successfully delivered."
                            : orderItem.status === "CANCELLED"
                            ? "Your order was cancelled due to certain conditions."
                            : orderItem.status === "PENDING"
                            ? "Your order is pending as it is not yet confirmed by the supplier."
                            : "Your order is on its way and will be delivered within 4-5 days."}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box mb={1} mt={10} display="flex" justifyContent="center">
                  <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    shape="rounded"
                    color="primary"
                  />
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default OrderList;
