import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Grid,
  Box,
  Divider,
  Typography,
  Step,
  StepLabel,
  Button,
  Stepper,
  StepIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, // Add StepIcon import
} from "@material-ui/core";
import { Card, CardContent } from "@mui/material";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import toast from "react-hot-toast";
import { AuthContext } from "src/context/Auth";
import ClearIcon from "@material-ui/icons/Clear";
import { CircularProgress } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  startBox: {
    display: "flex",
    marginLeft: "8%",
    marginTop: "3%",
    gap: "20px",
  },
  headBox: {
    display: "flex",
    alignItems: "center",
  },
  headText: {
    fontFamily: "Playfair Display",
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: "39.99px",
  },
  firstDivider: {
    marginTop: "3em",
    width: "84%",
  },
  secondHeadBox: {
    display: "flex",
    marginLeft: "8%",
    marginTop: "2%",
    gap: "20px",
  },
  container: {
    width: "87%",
    margin: "0 auto", // Center the container
  },
  imgBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  flex: {
    display: "flex",
  },
  firstProductBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
    marginLeft: "2rem",
    marginTop: "2rem",
  },
  mainBoxImg: {
    justifyContent: "center",
    alignSelf: "center",
    paddingRight: "25px",
    height: "100%",
  },
  vertcalDivider: {
    height: "20px",
  },
  divider: {
    marginTop: "25px",
    marginBottom: "20px",
    border: "1px  #D8D7D7",
  },
  typo: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
  },
  headTypo: {
    fontFamily: "Playfair Display",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "20px",
  },
  ProductText: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: 700,
    marginTop: "5%",
    lineHeight: "26.66px",
  },
  ProductsecondText: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24.55px",
    color: "#4D8C40",
  },
  ProductCommonText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24.55px",
  },
  lineThrough: {
    textDecoration: "line-through",
    color: "grey",
  },
  searchBox: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  valueText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.1px",
  },
  payText: {
    fontFamily: "Nunito Sans",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16.37px",
  },
  ProductQuantityText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.1px",
  },
  productBox: {
    margin: "8%",
    width: "100%",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2.5),
    display: "flex",
    justifyContent: "space-between", // Align children to the ends
    border: "1px solid #33333333",
    marginTop: "15px",
    "@media(max-width:767px)": {
      flexDirection: "column",
    },
  },
  image: {
    width: "7rem",
    height: "8rem",
    marginTop: "10%",
    // marginRight: theme.spacing(2),
  },
  statusBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  selectDate: {
    marginLeft: "2rem",
    borderRadius: "10rem",
    border: "1px solid #ccc",
    padding: theme.spacing(2),
    display: "flex", // Make it a flex container
    alignItems: "center", // Center align the content vertically
    background: "#f0f0f0", // Add a background color
  },
  formkeyboardPicker: {
    width: "35%",
    height: "80%",
  },

  keyboardPicker: {
    marginLeft: "1.5rem",
    borderRadius: "10rem",
    // border: "1px solid #ccc",
    borderRadius: "100px",
    height: "100%",
    justifyContent: "center",
    // padding: theme.spacing(2),
    display: "flex", // Make it a flex container
    alignItems: "center", // Center align the content vertically
    background: "#f0f0f08f", // Add a background color
  },
  mainBox: {
    display: "flex",
  },
  dropBox: {
    width: "20%",
    height: "80%",
    // border: "1px solid #ccc",

    borderRadius: "100px",
    marginLeft: "3%",

    "& .MuiSelect-select": {
      background: "none",
    },
  },
  select: {
    height: "100%",
    background: "#f0f0f08f",

    borderRadius: "100px",
  },
  all: {
    marginLeft: "1rem",
    borderRadius: "10rem",
    padding: theme.spacing(1),
    width: "7rem",
    border: "1px solid #D8D7D7",
    display: "flex", // Make it a flex container
    alignItems: "center", // Center align the content vertically
    background: "#f0f0f0", // Add a background color
  },
  calendarImage: {
    width: 30, // Increase the width of the calendar image
    marginRight: theme.spacing(1), // Add some space between the calendar image and the text field border
  },
  searchField: {
    borderRadius: "9rem", // Add border radius to the search field
    marginRight: theme.spacing(1), // Add spacing between the two input fields
    padding: theme.spacing(2), // Add padding to match TextField styling
    border: "none",
    background: "#f0f0f08f",
    width: "20rem", // Add border to match TextField styling
  },
  searchimg: {
    //  marginRight:"15px",
  },
  descriptionBox: {
    border: "0.5px solid #7E563D",
    borderRadius: "5px",
    padding: "2px 7px 2px 7px",
    height: "23px",
    marginLeft: "6px",
    fontSize: "12px",
    color: "#7E563D",
    fontFamily: "Poppins",
  },
  root: {
    width: "100%",
    marginTop: "3%",
    marginBottom: "15%",
    "& .MuiStepConnector-completed": {
      "& .MuiStepConnector-lineHorizontal": {
        border: "3.1px solid #4DB044",
      },
    },
    "& .MuiStepper-root": {
     '@media (max-width:880px)': {
      padding: "24px 0",
      fontSize:"11px !important",
      lineHeight:"13px !important",
    }, 
    },


    "& .MuiStep-completed + .MuiStep-horizontal .Mui-disabled .MuiStepConnector-line":
      {
        border: "3.1px solid #4DB044",
      },
    "& .MuiStepIcon-root": {
      fontSize: "30px",
    },

    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#4DB044",
    },
    "& .MuiStepConnector-line": {
      display: "block",
      border: "3.1px solid #D9D9D9",
      marginTop: "5px",
    },
  },
  freeText: {
    color: "#7E563D",
  },

  rupeeText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "16px",
    letterSpacing: "0.005em",
  },
  label: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: 400,
    color: "black",
    lineHeight: "24.42px",
    '@media (max-width:880px)':{
      fontSize:"10px",
      lineHeight:"13px",
    }
  },
  totalText: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "19.1px",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid #D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#7E563D",
  },
  imageIcon: {
    borderRadius: "50%",
  },
  completedCircle: {
    background: "#4DB044",
    border: "none",
  },
  incompletedCircle: {
    background: "#D9D9D9",
    border: "none",
  },
  modalText: {
    "& .MuiDialog-paper": {
      background: "white",
    },
    "& .MuiDialogTitle-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
      padding: " 2px 17px 0px 17px",
    },
    "& .MuiDialogActions-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      marginTop: "20px",
    },
    "& h6": {
      width: "100%",
      maxWidth: "427px",
      margin: "0 auto",
    },
  },
}));

function getSteps() {
  return [
    {
      label: "Order Placed",
      image: "image/blackRight.png",
      completedImage: "image/right.png",
    },
    {
      label: "Packaging in progress",
      image: "image/profile.png",
      completedImage: "image/right.png",
    },
    {
      label: "Dispatched",
      image: "image/profile.png",
      completedImage: "image/right.png",
    },
    {
      label: "Delivery on the way",
      image: "image/delivery.png",
      completedImage: "image/right.png",
    },
    {
      label: "Delivered",
      image: "image/blackRight.png",
      completedImage: "image/right.png",
    },
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

const Page3 = () => {
  const classes = useStyles();
  const [orderDetails, setOrderDetails] = useState("");
  // const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const statusStepMap = {
    Manifested: 0,
    "Not Picked": 1,
    "In Transit": 2,
    Dispatched: 3,
    Delivered: 4,
  };
  const activeStep = statusStepMap[orderDetails?.deliveryStatus] ?? 0;

  const { userDetails } = useContext(AuthContext);
  const steps = getSteps();
  const history = useHistory();
  const [isCancelling, setIsCancelling] = useState(false);
  const [isReturning,setIsReturning  ] = useState(false);

  

  const location = useLocation();

  const orderItem = location.state?.order;
  console.log(orderItem);

  console.log("object12121212", orderDetails);

  const handleOrderList = async () => {
    try {
      setLoading(true)
      const response = await axios({
        method: "GET",
        url: apiConfig.viewOrder,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        params: {
          _id: orderItem,
        },
      });

      if (response.data && response.data.responseCode === 200) {
        setLoading(false)
        toast.success(response.data.responseMessage);
        setOrderDetails(response.data.result);
        console.log("object", response.data.result);
      } else {
        toast.error("Invalid Pincode. Please enter again.");
        setLoading(false)
      }
    } catch (error) {
      toast.error("Failed to fetch state and district");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleOrderList();
  }, []);
  console.log("1212121-id",orderItem)
  const handleCancel = async () => {
    try {
      setIsCancelling(true); // Start Loading
      const response = await axios({
        method: "POST",
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        url: apiConfig.cancelOrder,
        data: {
          _id: orderItem,
        },
      });
      if (response.data.responseCode === 200) {
        toast.success(response.data.responseMessage);
        setIsCancelling(false); 

        handleOrderList();
      }
    } catch (error) {
      console.log(" error ", error);
      setIsCancelling(false);
    }
  };

  const handleReturn = async () => {
    try {
      setIsReturning(true);
      const response = await axios({
        method: "POST",
        url: apiConfig.returnOrder,
        headers: {
          token: window.sessionStorage.getItem("ELEGLAMToken"),
        },
        data: {
          _id: orderItem,
        },
      });
      if (response.data.responseCode === 200) {
      setIsReturning(false);

        toast.success(response.data.responseMessage);
        handleOrderList();
      }
    } catch (error) {
      setIsReturning(false);

      console.log(" error ", error);
    }
  };

  const date = new Date(orderDetails?.createdAt || "");

  // Format date and time with AM/PM
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const [openActionModal, setOpenActionModal] = useState(false);
  const [actionType, setActionType] = useState("cancel");

  const handleCancelOrder = () => {
    handleCancel();
    console.log("Order cancelled");
    setOpenActionModal(false);
  };

  const handleReturnOrder = () => {
    handleReturn();
    console.log("Order returned");
    setOpenActionModal(false);
  };

  const handleOpenModal = (type) => {
    setActionType(type);
    setOpenActionModal(true);
  };

  if (loading) {
        return (
          <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
            <CircularProgress />
          </Box>
        );
      }

  return (
    <>
      <Grid container style={{ background: "white" }}>
        <Box className={classes.startBox}>
          <Box className={classes.headBox}>
            <ArrowBackIcon
              className={classes.arrow}
              style={{ fontSize: 30, cursor: "pointer" }}
              onClick={() => history.goBack()}
            />
          </Box>
          <Box className={classes.headBox}>
            <Typography className={classes.headText} variant="h2">
              Order Detail
            </Typography>
          </Box>
        </Box>
        {/* divider */}
        <Grid container justifyContent="center">
          <Divider className={classes.firstDivider} />
        </Grid>

        <Box className={classes.secondHeadBox}>
          <Box>
            <Typography className={classes.typo}>
              Ordered on {`${formattedDate}, ${formattedTime}`}
            </Typography>
          </Box>
          <Box mx={1}>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.vertcalDivider}
            />
          </Box>
          <Box>
            <Typography className={classes.typo}>
              Order ID -  {orderDetails?.orderId || ""}
            </Typography>
          </Box>
          {/* <Box mx={1}>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.vertcalDivider}
            />
          </Box> */}
          {/* <Box>
            <Typography className={classes.typo}>
              {orderDetails?.status || ""}
            </Typography>
          </Box> */}
        </Box>

        {/* box */}


<Box className={classes.productBox} style={{ padding: "24px" }}>
  <Grid container spacing={4}>
    
    {/* Products Card */}
    <Grid item xs={12} md={7}>
      <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" className={classes.headTypo} gutterBottom>
            Products
          </Typography>
          {orderDetails?.products?.map((product, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              p={2}
              mb={2}
              sx={{
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: "#f0f0f0",
                }
              }}
            >
              <img
                src={product?.productId?.images[0]}
                alt="product"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "16px",
                }}
              />
              <Box>
                <Typography variant="subtitle1" fontWeight="600">
                  {product?.productId?.productTitle || ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{product?.productId?.price || ""} &nbsp;|&nbsp; Qty: {product?.quantity || ""}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  dangerouslySetInnerHTML={{
                    __html: `${product?.productId?.productDetails
                      ?.split(" ")
                      .slice(0, 18)
                      .join(" ")}...`,
                  }}
                />
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>

    {/* Delivery & Payment Section */}
    <Grid item xs={12} md={5} display="flex" flexDirection="column" gap={3}>
      
      {/* Delivery Card */}
      <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" className={classes.headTypo} gutterBottom>
            Deliver To
          </Typography>
          <Typography variant="body1" fontWeight="600">
            {orderDetails?.address?.name || ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {orderDetails?.address?.address || ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {orderDetails?.address?.phone || ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userDetails?.email || ""}
          </Typography>
        </CardContent>
      </Card>

      {/* Payment Card */}
      <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2, mt:2 }}>
        <CardContent>
          <Typography variant="h6" className={classes.headTypo} gutterBottom>
            Payment Details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" className={classes.payText}>Subtotal</Typography>
              <Typography variant="body2" className={classes.payText}>Discount</Typography>
              <Typography variant="body2" className={classes.payText}>Total</Typography>
              <Typography variant="body2" className={classes.payText}>Shipping & Handling</Typography>
              <Typography variant="body2" fontWeight="bold" mt={1}>Grand Total</Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>

              <Typography variant="body2">₹ {orderDetails?.amount + orderDetails?.totalDiscount}.00</Typography>
              <Typography variant="body2" color="error">- ₹ {orderDetails?.totalDiscount}.00</Typography>
              <Typography variant="body2">₹ {orderDetails?.amount}.00</Typography>
              <Typography variant="body2">
                ₹ <span style={{ textDecoration: "line-through" }}>75</span> <span style={{ color: "green" }}>FREE</span>
              </Typography>
              <Typography variant="body2" fontWeight="bold" mt={1}>₹ {orderDetails?.amount}.00</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Grid>

  </Grid>
</Box>


        {orderDetails?.status === "PENDING" && (
          <Box
            sx={{
              margin: "3%",
              width: "100%",
              display: "flex",
              justifyContent: "end", // Align children to the ends
              marginTop: "15px",
              paddingLeft: "70%",
              paddingRight: "6%",
              '@media (max-width:880px)': {
      paddingLeft: "50%", 
    },
            }}
          >
            <Button
              disabled={activeStep > 1|| isCancelling} // for example, can't cancel after shipped
              variant="contained"
              color="error"
              onClick={() => handleOpenModal("cancel")}
            >
              {isCancelling ? "Cancelling..." : "Cancel Order"}
            </Button>
          </Box>
        )}
        {orderDetails?.deliveryStatus === "DELIVERED" && (
          <Box
            sx={{
              margin: "3%",
              width: "100%",
              display: "flex",
              justifyContent: "end", // Align children to the ends
              marginTop: "15px",
              paddingLeft: "70%",
              paddingRight: "6%",
              '@media (max-width:880px)': {
      paddingLeft: "50%", 
    },
            }}
          >
            <Button
              disabled={isReturning}
              variant="contained"
              color="error"
              onClick={() => handleOpenModal("return")}
            >
              {isReturning ? "Returning..." : "Return Order"}
            </Button>
          </Box>
        )}
        {/* Stepper */}
        {orderDetails?.status != "CANCELLED" && (
          <Box className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={step.label} completed={activeStep >= index}>
                <StepLabel
                  StepIconComponent={() => (
                    <div
                      className={`${classes.circleIcon} ${
                        activeStep >= index
                          ? classes.completedCircle
                          : classes.incompletedCircle
                      }`}
                    >
                      <img
                        src={
                          activeStep >= index ? step.completedImage : step.image
                        }
                        alt={step.label}
                        className={classes.imageIcon}
                      />
                    </div>
                  )}
                >
                  <Typography className={classes.label}>
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        )}
        
      </Grid>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={openActionModal}
        keepMounted
        className={classes.modalText}
      >
        <DialogTitle>
          <Typography align="center" variant="h4">
            {actionType === "cancel" ? "Cancel Order" : "Return Order"}
          </Typography>
          <Box
            onClick={() => setOpenActionModal(false)}
            color="primary"
            style={{
              height: "0px",
              position: "absolute",
              right: "10px",
              top: "4px",
              cursor: "pointer",
            }}
          >
            <ClearIcon style={{ color: "rgba(8, 5, 21, 0.6)" }} />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography align="center" style={{ marginTop: "6px" }}>
            Are you sure you want to{" "}
            {actionType === "cancel" ? "cancel" : "return"} this order?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenActionModal(false)}
            color="error"
            variant="contained"
          >
            No
          </Button>
          <Button
            onClick={
              actionType === "cancel" ? handleCancelOrder : handleReturnOrder
            }
            color="primary"
          >
            Yes, {actionType === "cancel" ? "Cancel" : "Return"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Page3;
