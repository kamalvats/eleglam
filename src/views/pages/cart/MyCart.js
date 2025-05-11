import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
  Box,
  Radio,
  Link,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";
import NoDataFound from "src/component/NoDataFound";
import { useHistory } from "react-router-dom";
import AddAddress from "./AddAddress";
import { AuthContext } from "src/context/Auth";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    padding: "2% 0 4rem 2%",
    background: "white",
    [theme.breakpoints.down("md")]: {
      padding: "0.8rem 6%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.8rem 2%",
    },
    "& .headingContainer": {
      display: "flex",
      alignItems: "center",

      "& .heading": {
        // fontSize: "30px",
        fontWeight: 600,
        fontFamily: "Poppins",
        marginLeft: "10px",
      },
    },
    "& .productBox": {
      marginTop: "2rem",
      // width: "100%",
      border: "1px solid rgba(51, 51, 51, 0.2)",
      "& .text": {
        fontWeight: 400,
        fontFamily: "Open Sans",
        padding: "5px 10px",
      },
      "& .productInfo": {
        // width: "100%",
        padding: "15px 10px",
        display: "flex",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
          justifyContent: "center",
        },

        "& .imgContainer": {
          height: "200px",
          width: "218px",
        },
        "& .details": {
          padding: "0 15px",
          width: "95%",
          [theme.breakpoints.down("xs")]: {
            padding: "0",
            width: "100%",
          },
          "& .namebox": {
            // width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5px",
            "& .nameText": {
              fontWeight: 600,
              fontFamily: "Poppins",
              paddingTop: "5px",
            },
          },
          "& .price": {
            // fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Poppins",
            color: "rgba(91, 140, 86, 1)",
          },
          " .quantity": {
            fontSize: "15px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "rgba(51, 51, 51, 1)",
            padding: "3px 0",
          },
          "& .size": {
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "rgba(51, 51, 51, 1)",
            "& .sizeStyle": {
              border: "0.5px solid rgba(247, 147, 30, 1)",
              borderRadius: "5px",
              padding: "2px 8px",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "Poppins",
            },
          },
          "& .date": {
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: "Poppins",
            color: "rgba(51, 51, 51, 1)",
            margin: "3px 0",
            "& .dateStyle": {
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Poppins",
              color: "rgba(38, 38, 38, 1)",
            },
          },
          "& .addRemoveCont": {
            width: "100%",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            "& .addRemove": {
              display: "flex",
              "& .add": {
                border: "0.5px solid rgba(247, 147, 30, 1)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "@media (max-width: 425px)": {
                  height: "1em",
                  width: "1em",
                },
                "& svg": {
                  height: "1em",
                  width: "1em",
                  "@media (max-width: 425px)": {
                    width: "0.61em",
                  },
                },
              },
              "& .remove": {
                border: "0.5px solid rgba(247, 147, 30, 1)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "@media (max-width: 425px)": {
                  height: "1em",
                  width: "1em",
                },
                "& svg": {
                  height: "1em",
                  width: "1em",
                  "@media (max-width: 425px)": {
                    width: "0.61em",
                  },
                },
              },
              "@media (max-width: 425px)": {
                "& .add svg, & .remove svg": {
                  height: "0.61em",
                  width: "0.61em",
                },
              },
            },
            "& .view": {
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Poppins",
              color: "rgba(22, 147, 200, 1)",
              cursor: "pointer",
              textDecoration: "underline",
            },
          },
        },
      },
    },
    "& .proceedBox": {
      margin: "2rem 25px",
      "@media(max-width:600px)": {
        margin: "2rem 0px",
      },
      "& .couponsCont": {
        backgroundColor: "rgba(245, 245, 245, 1)",
        padding: "15px 20px",
        "& .cuponText": {
          fontSize: "14px",
          fontWeight: 600,
          LineHeight: "21px",
          fontFamily: "Poppins",
          color: "rgba(0, 0, 0, 1)",
          marginBottom: "10px",
        },
        "& .cuponhead": {
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
          "& .imgText": {
            display: "flex",
            "& .apply": {
              paddingLeft: "12px",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "Poppins",
              color: "rgba(34, 34, 34, 1)",
            },
          },
          "& .price": {
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Poppins",
            color: "rgba(0, 0, 0, 1)",
          },
        },
        "& .fieldButton": {
          marginTop: "10px",
          paddingBottom: "10px",
        },
      },
      "& .summeryContainer": {
        marginTop: "15px",
        backgroundColor: "rgba(245, 245, 245, 1)",
        padding: "15px 20px",
        "& .order": {
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "Poppins",
          color: "#000",
          marginBottom: "8px",
        },
        "& .summery": {
          display: "flex",
          marginTop: "8px",
          justifyContent: "space-between",
          "& .summeryDetail": {
            fontSize: "12px",
            fontWeight: "400",
            fontFamily: "Poppins",
            lineHeight: "18px",
            color: "#222222",
          },
          "& .summeryInfo": {
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Poppins",
            lineHeight: "16px",
            color: "#000000",
          },
        },
      },
    },
    // "& .delivery": {
    "& .adddress": {
      fontSize: "20px",
      fontWeight: "700",
      fontFamily: "Playfair Display",
      color: "#2D2C2C",
    },
    // },
    "& .addressBox": {
      border: "1px solid #D9D9D9",
      padding: "5px 15px",
      "& .nameBox": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .name": {
          fontSize: "16px",
          fontWeight: "700",
          fontFamily: "Playfair Display",
          color: "#2D2C2C",
          lineHeight: "21px",
        },
      },
      "& .information": {
        fontSize: "14px",
        fontWeight: "600",
        fontFamily: "Nunito Sans",
        color: "#4F4F4F",
        lineHeight: "19px",
      },
    },
    "& .paymentMode": {
      fontWeight: "400",
      fontFamily: "Poppins",
      color: "rgba(2, 2, 2, 1)",
      padding: "8px 10px",
    },
    "& .options": {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Poppins",
      color: "rgba(2, 2, 2, 1)",
    },
    "& .subOptions": {
      fontSize: "12px",
      fontWeight: "400",
      fontFamily: "Poppins",
      color: "rgb(75, 72, 72)",
    },

    "& .continue": {
      minWidth: "250px",
      height: "50px",
      backgroundColor: "rgba(247, 147, 30, 1)",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Nunito Sans",
      color: "rgba(255, 255, 255, 1)",
      borderRadius: "30px",
    },
  },
}));

const MyCart = () => {
  const { userDetails, profileAPi } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const address = userDetails?.address || [];
  const cart = userDetails?.cart || [];
  const [value, setValue] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [isCODAvailable, setIsCODAvailable] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const isLoading = !userDetails || Object.keys(userDetails).length === 0;
  const [deletingProductId, setDeletingProductId] = useState(null);

  useEffect(() => {
    profileAPi();
  }, []);

  console.log("addId", selectedAddressId);

  const handleShowAddress = () => {
    setShowAddress(!showAddress);
  };

  const handleCartUpdate = async (productId, action) => {
    try {
      if (action === "remove") {
        setDeletingProductId(productId); // Start loader for this product
      }
      let updatedCart = [...(userDetails?.cart || [])];

      if (action === "clear") {
        updatedCart = []; // ✅ Cart clear
      } else if (action === "remove") {
        // Remove product from the cart
        updatedCart = updatedCart.filter(
          (item) => item.productId._id !== productId
        );
      } else {
        updatedCart = updatedCart.map((item) => {
          if (item.productId._id === productId) {
            let price = item.productId.price;
            let discountPrice = item.productId.discountPrice;
            let newQuantity =
              action === "increase" ? item.quantity + 1 : item.quantity - 1;
            newQuantity = Math.max(newQuantity, 1); // Ensure quantity doesn't go below 1
            return {
              ...item,
              quantity: newQuantity,
              price: price,
              discountPrice: discountPrice,
            };
          }
          return item;
        });
      }

      const res = await axios({
        method: "PUT",
        url: apiConfig.editProfile,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: { cart: updatedCart },
      });

      if (res.data?.responseCode === 200) {
        toast.success(res.data?.responseMessage);
        profileAPi(); // Refresh user details after update
      }
    } catch (error) {
      console.log("Cart Error:", error);
      console.log(
        error?.response?.data?.responseMessage ||
          "Something went wrong. Please try again."
      );
    } finally {
      setDeletingProductId(null); // Stop loader after everything
    }
  };
  const clearCart = async () => {
    await handleCartUpdate(null, "clear");
  };
  

  const handleDelete = async (id) => {
    // setSubmitting(true);

    // Get existing addresses (if any), otherwise initialize an empty array
    let updatedAddresses = [...(userDetails?.address || [])];

    // If deleting, remove the address and update API
    if (id) {
      updatedAddresses = updatedAddresses.filter((addr) => addr._id !== id);
    }

    try {
      const response = await axios({
        method: "PUT",
        url: apiConfig.editProfile,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: { address: updatedAddresses }, // Send the updated address list
      });

      if (response.data.responseCode === 200) {
        toast.success("Address removed successfully");
        // resetForm();
        profileAPi(); // Refresh profile data
        // setShowAddress(false); // Close modal/form
      } else {
        toast.error(
          response.data.responseMessage || "Failed to remove address"
        );
      }
    } catch (error) {
      toast.error("Error removing address");
    }

    // setSubmitting(false);
  };

  const handlePincodeChange = async (pincode) => {
    try {
      const response = await axios({
        method: "GET",
        url: apiConfig.validatePinCode,
        params: { pinCode: pincode },
      });

      if (response.data && response.data.responseCode === 200) {
        // toast.success(response.data.responseMessage);

        // Check if COD is available
        const isCod =
          response.data.result?.delivery_codes?.[0]?.postal_code?.cod === "Y";
        setIsCODAvailable(isCod);
      } else {
        toast.error("Invalid Pincode. Please enter again.");
        setIsCODAvailable(false); // Disable COD if response is invalid
      }
    } catch (error) {
      toast.error("Failed to fetch state and district");
      setIsCODAvailable(false); // Disable COD in case of an error
    }
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      toast.error("Please select payment type.");
      return;
    }

    try {
      const selectedAddress = userDetails?.address.find(
        (addr) => addr._id === selectedAddressId
      );
      if (!selectedAddress) {
        toast.error("Please add or select an address for the order.");
        return;
      }
      // Prepare form data
      const body = {
        amount: finalAmount - userDetails?.totalDiscount, // Ensure this is a number
        // products: userDetails?.cart, // Array of cart items
        products: userDetails?.cart.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          price: item.productId.price, // ✅ Add price
          discountPrice: (item.productId.discountPrice + (item.productId.price - finalAmount )), // ✅ Add discount price
        })),
        totalDiscount: (userDetails?.totalDiscount + (userDetails?.totalAmount - finalAmount )),
        paymentType: paymentMethod,
        address: selectedAddress,
      };
      // Step 1: Create Order via Backend
      const { data } = await axios.post(apiConfig.createPaymentOrder, body, {
        headers: { token: window.sessionStorage.getItem("ELEGLAMToken") },
      });

      if (data.responseCode === 200) {
        if (paymentMethod === "COD") {
          await clearCart(); 
          toast.success("Order placed successfully!");
          history.push("/myorder"); // Redirect to order details
        } else {
          const { id, amount, currency } = data.result;

          // Step 2: Open Razorpay Payment Modal
          const options = {
            key: "rzp_test_9LiQfQNEYrcCXo", // Razorpay API Key from Backend
            amount: amount * 100, // Razorpay needs amount in paise
            currency,
            name: "ELEGLAM",
            description: "Order Payment",
            order_id: id, // Razorpay Order ID
            handler: async function (response) {
              console.log("Payment Successful:", response);

              // Step 3: Verify Payment via Backend
              const verifyRes = await axios.post(apiConfig.verifyPayment, {
                razorpay_order_id: id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              if (verifyRes.data.responseCode === 200) {
                toast.success("Payment Successful!");
                await clearCart(); 
                profileAPi(); // Refresh user profile

                history.push("/myorder");
              } else {
                toast.error("Payment Verification Failed!");
              }
            },
            prefill: {
              name: userDetails?.name,
              email: userDetails?.email,
              // contact: userDetails?.phone,
            },
            theme: { color: "#F7941E" }, // Razorpay theme color
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        }
      } else {
        toast.error(data.responseMessage || "Failed to create payment order");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  const [finalAmount, setFinalAmount] = useState(0); // default to 0 or null

  useEffect(() => {
    if (userDetails?.totalAmount !== undefined) {
      setFinalAmount(
        paymentMethod === "Payment"
          ? userDetails.totalAmount - 50
          : userDetails.totalAmount
      );
    }
  }, [userDetails, paymentMethod]);

  const handlePaymentMethodChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);

    if (method === "Payment") {
      setFinalAmount((userDetails?.totalAmount || 0) - 50);
    } else {
      setFinalAmount(userDetails?.totalAmount || 0);
    }
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {cart?.length === 0 ? (
        <NoDataFound
          content={"Explore more and shortlist some items."}
          headingText={"Cart"}
        />
      ) : (
        <Box className={classes.cartContainer}>
          <Box className="headingContainer">
            <IoIosArrowRoundBack
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => history.goBack()}
            />
            <Typography className="heading" variant="h2">
              My Cart
            </Typography>
          </Box>

          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className="productBox">
                <Typography className="text" variant="h5">
                  Products
                </Typography>
                <Divider />
                <Grid container>
                  {userDetails?.cart
                    ?.filter(
                      (value) => value?.productId?.stockAvailable !== false
                    )
                    ?.map((value, i) => (
                      <Grid item xs={12} sm={12} key={i}>
                        <Box className="productInfo">
                          <Box className="imgContainer">
                            <img
                              src={value?.productId?.images[0]}
                              alt="Img"
                              height="100%"
                              width="100%"
                            />
                          </Box>
                          <Box className="details">
                            <Box className="namebox">
                              <Typography className="nameText" variant="h6">
                                {value?.productId?.productTitle}
                              </Typography>
                              {deletingProductId === value?.productId?._id ? (
                                <CircularProgress
                                  size={24}
                                  style={{
                                    color: "#7E563D",
                                    marginLeft: "15px",
                                    alignSelf: "center",
                                  }}
                                />
                              ) : (
                                <RiDeleteBin5Fill
                                  onClick={() =>
                                    handleCartUpdate(
                                      value?.productId?._id,
                                      "remove"
                                    )
                                  }
                                  style={{
                                    color: "rgba(247, 147, 30, 1)",
                                    cursor: "pointer",
                                    fontSize: "30px",
                                    alignSelf: "center",
                                    marginLeft: "15px",
                                  }}
                                />
                              )}
                            </Box>
                            <Typography className="price" variant="h5">
                              ₹ {value?.productId?.price}
                            </Typography>
                            <Typography variant="body2">
                              Expected Delivery in 3-5 Days.
                            </Typography>
                            <Typography className="quantity">
                              Qty: {value?.quantity}
                            </Typography>
                            <Box className="addRemoveCont">
                              <Box className="addRemove">
                                <Box
                                  className="add"
                                  onClick={() =>
                                    value?.quantity > 1 &&
                                    handleCartUpdate(
                                      value?.productId?._id,
                                      "decrease"
                                    )
                                  }
                                  style={{
                                    opacity: value?.quantity === 1 ? 0.5 : 1,
                                    cursor:
                                      value?.quantity === 1
                                        ? "not-allowed"
                                        : "pointer",
                                  }}
                                >
                                  <RemoveIcon style={{ color: "#7E563D" }} />
                                </Box>
                                <Typography
                                  style={{
                                    padding: "0 12px",
                                    alignSelf: "center",
                                  }}
                                >
                                  {value?.quantity}
                                </Typography>
                                <Box
                                  className="remove"
                                  onClick={() =>
                                    handleCartUpdate(
                                      value?.productId?._id,
                                      "increase"
                                    )
                                  }
                                >
                                  <AddIcon
                                    style={{
                                      color: "#7E563D",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Box>
                              </Box>

                              <Link
                                className="view"
                                onClick={() => {
                                  history.push({
                                    pathname: "/product-page",
                                    state: { productId: value?.productId?._id },
                                  });
                                }}
                              >
                                View Details
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                        <Divider />
                      </Grid>
                    ))}
                </Grid>
              </Box>
              <Box
                className="delivery"
                style={{ marginBottom: "20px", marginTop: "40px" }}
              >
                <Typography className="adddress" variant="H3">
                  Delivery Address
                </Typography>
              </Box>
              <Grid container>
                {address &&
                  address.map((values, i) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      key={i}
                      // style={{ paddingLeft: "10px" }}
                    >
                      <Box className="addressBox">
                        <Box className="nameBox">
                          <Typography className="name">
                            {values.name}
                          </Typography>
                          <FormControl component="fieldset">
                            <RadioGroup
                              name="address1"
                              value={selectedAddressId} // Bind selected value from state
                              onChange={(event) => {
                                setSelectedAddressId(event.target.value); // Update selected radio button
                                const selectedAddress = address.find(
                                  (addr) => addr._id === event.target.value
                                );
                                if (selectedAddress) {
                                  handlePincodeChange(selectedAddress.pinCode);
                                }
                              }}
                            >
                              <FormControlLabel
                                key={i}
                                value={values._id}
                                control={<Radio />}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                        <Typography className="information">
                          {values.address}
                          {values.city}&nbsp;{values.district}&nbsp;
                          {values.pinCode}
                        </Typography>
                        <Typography className="information">
                          {values.phone}
                        </Typography>

                        <Box
                          style={{ marginTop: "20px", marginBottom: "10px" }}
                        >
                          <Link
                            style={{
                              fontSize: "14px",
                              fontWeight: 400,
                              fontFamily: "Poppins",
                              color: "rgba(22, 147, 200, 1)",
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => {
                              setIsEdit(true);
                              setEditAddress(values);
                              handleShowAddress();
                            }}
                          >
                            Edit Address
                          </Link>
                          <Link
                            style={{
                              fontSize: "14px",
                              fontWeight: 400,
                              fontFamily: "Poppins",
                              color: "#F95656",
                              cursor: "pointer",
                              textDecoration: "underline",
                              marginLeft: "30px",
                            }}
                            onClick={() => handleDelete(values._id)}
                          >
                            Remove
                          </Link>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
              {address?.length < 2 && (
                <Box style={{ margin: "2px 0", padding: "0 10px" }}>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      fontFamily: "Nunito Sans",
                      color: "#1693C8",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      setIsEdit(false);
                      handleShowAddress();
                    }}
                  >
                    + Add Address
                  </Typography>
                </Box>
              )}

              {showAddress && (
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ marginTop: "1.5rem" }}
                  >
                    <Box>
                      <AddAddress
                        editAddress={editAddress}
                        isEdit={isEdit}
                        setShowAddress={setShowAddress}
                      />
                    </Box>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4}>
              <Box className="proceedBox">
                <Box style={{ margin: "2rem 0 0 0" }}>
                  <Typography
                    className="adddress"
                    variant="H3"
                    // style={{
                    //   // fontSize: "20px",
                    //   fontWeight: "600",
                    //   fontFamily: "Playfair Display",
                    //   lineHeight: "26px",
                    //   color: "#262626",
                    // }}
                  >
                    Choose Payment Method{" "}
                  </Typography>
                </Box>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ marginTop: "1.5rem" }}
                  >
                    <Box style={{ border: "1px solid rgba(51, 51, 51, 0.2)" }}>
                      <Typography className="paymentMode" variant="h6">
                        Choose Payment Mode
                      </Typography>
                      <Divider />
                      <FormControl
                        component="fieldset"
                        style={{ width: "100%" }}
                      >
                        <RadioGroup
                          name="paymentMethod"
                          value={paymentMethod}
                          onChange={handlePaymentMethodChange}
                        >
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "15px 10px",
                            }}
                          >
                            <FormControlLabel
                              value="COD"
                              control={<Radio />}
                              disabled={!isCODAvailable}
                            />
                            <Typography className="options">
                              {isCODAvailable ? (
                                " Cash on Delivery "
                              ) : (
                                <Typography
                                  className="summeryDetail"
                                  style={{ color: "grey" }}
                                >
                                  Cash on Delivery is not available in your area
                                </Typography>
                              )}
                            </Typography>
                          </Box>
                          <Divider style={{ width: "100%" }} />
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "15px 10px",
                            }}
                          >
                            <FormControlLabel
                              value="Payment"
                              control={<Radio />}
                            />
                            <Typography className="options">
                              Pay Online{" "}
                              <span className="subOptions">
                                ( Get extra ₹50 off )
                              </span>
                            </Typography>
                          </Box>
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Box className="summeryContainer">
                  <Typography className="order">Order Summary </Typography>
                  <Divider />
                  <Box className="summery">
                    <Typography className="summeryDetail">Subtotal</Typography>
                    <Typography className="summeryInfo">
                      ₹ {userDetails?.totalAmount}.00
                    </Typography>
                  </Box>
                  <Box className="summery">
                    <Typography className="summeryDetail">Discount</Typography>
                    <Typography className="summeryInfo">
                      - ₹ {userDetails?.totalDiscount}.00
                    </Typography>
                  </Box>
                  {paymentMethod === "Payment" && (
                    <Box className="summery">
                      <Typography className="summeryDetail">
                        Extra Discount
                      </Typography>
                      <Typography className="summeryInfo">- ₹ 50.00</Typography>
                    </Box>
                  )}
                  <Box className="summery">
                    <Typography className="summeryDetail">Total</Typography>
                    <Typography className="summeryInfo">
                      ₹ {finalAmount - userDetails?.totalDiscount}.00
                    </Typography>
                  </Box>
                  <Box className="summery">
                    <Typography className="summeryDetail">
                      Shipping & Handling
                    </Typography>
                    <Typography className="summeryInfo">
                      ₹ <del style={{ color: "#A1A1A1" }}> 75 </del>
                      <span style={{ color: "#7E563D" }}>FREE</span>
                    </Typography>
                  </Box>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      lineHeight: "18px",
                      color: "#222222",
                    }}
                  >
                    (Standard)
                  </Typography>
                  <Divider style={{ marginTop: "5px", marginBottom: "10px" }} />
                  <Box className="summery">
                    <Typography
                      className="summeryInfo"
                      style={{ fontWeight: "500" }}
                    >
                      Grand Total
                    </Typography>
                    <Typography
                      className="summeryInfo"
                      style={{ fontWeight: "600" }}
                    >
                      ₹ {finalAmount - userDetails?.totalDiscount}.00
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      // color: "#7E563D",
                      // backgroundColor: "#7E563D",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginTop: "20px",
                    }}
                    onClick={() => {
                      handlePayment();
                      // history.push("/myorder");
                    }}
                  >
                    Proceed To Checkout
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default MyCart;
