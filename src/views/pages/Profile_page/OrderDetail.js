import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Arrow from "../assets/arrow.png";
import { Divider } from "@mui/material";
import ProductImage from "../assets/product.png";
import Stepper from "./Stepper.js";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "87%",
    margin: "0 auto",
    height: "90%",
  },
  productBox: {
    display: "flex",
    marginTop: "2rem",
    border: "1px solid #33333333",
  },
  productImage: {
    backgroundColor: "#D3DBCF",
    height: "10rem",
    marginTop: "1rem",
    marginLeft: "1rem",

    // Equal spacing between columns
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%", // Equal spacing between columns
    padding: "1rem",
  },
  column: {
    flexGrow: 1,
    padding: "0 1rem",
  },

  descriptionBox: {
    border: "0.5px solid #7E563D",
    borderRadius: "7px",
    padding: "2px 7px 2px 7px",
    height: "23px",
  },
  shippingBox: {
    backgroundColor: "#7E563D",
    borderRadius: "5px",
    padding: "5px",
    color: "white",
    textAlign: "center",
    width: "fit-content",
    marginTop: "5px",
  },
  discountBox: {
    backgroundColor: "#A1A1A1",
    borderRadius: "5px",
    padding: "5px",
    color: "white",
    textAlign: "center",
    width: "fit-content",
  },
  free: {
    color: "#7E563D",
  },
  fifteen: {
    color: "#A1A1A1",
    textDecoration: "line-through",
  },
  v1: {
    borderLeft: "1px solid #33333333",
    height: "500px",
  },
}));

const Page3 = () => {
  const classes = useStyles();
  const productInfo = {
    name: "Good Best Tea",
    image: ProductImage,
    amount: "Rs. 270.00",
    quantity: "Qty: 1",
    description: "1kg",
    text: "Expected delivery date: Thu,22 Feb",
  };

  const personInfo = {
    name: "Arvind Tyagi",
    address: "D-115,OKhla Phase-1,New Delhi,110019",
    phone: "+91-985745674",
    email: "mailto:arvind@gmail.com",
  };

  const paymentInfo = {
    subtotal: "Rs. 270.00",
    discount: "-Rs. 15.00",
    total: "Rs. 255.00",
    shipping: "Rs. 15 FREE",
  };
  const standard = "(Standard)";

  const grandTotal = "Rs. 255.00";

  return (
    <div style={{ marginTop: "10rem" }} className={classes.container}>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        style={{
          marginTop: "20px",
          fontFamily: "Nunito Sans",
          fontSize: "30px",
          fontWeight: 700,
          lineHeight: "39.99px",
          textAlign: "left",
        }}
      >
        <img src={Arrow} alt="arrow" /> My Orders
      </Typography>
      <Divider style={{ marginBottom: "20px", border: "1px solid #D8D7D7" }} />
      <div style={{}}>
        Ordered on 27 April 2024 &nbsp;&nbsp;
        <span className={classes.v1}> </span>&nbsp; Order# 407-9341958-9839552
      </div>
      <div className={classes.productBox}>
        <div className={classes.productTextContainer}>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontSize: "21px",
              marginLeft: "1rem",
              marginTop: "2rem",
            }}
          >
            Product
          </p>
          <div className={classes.productImage}>
            <img src={productInfo.image} alt={productInfo.name} />
          </div>
        </div>

        <div className={classes.productDetails}>
          <div className="row">
            <div style={{ marginTop: "2.2rem" }} className={classes.column}>
              <p
                style={{
                  color: "#2D2C2C",
                  fontWeight: "bold",
                  fontFamily: "Playfair Display",
                  fontSize: "23px",
                }}
              >
                {productInfo.name}
              </p>
              <p
                style={{
                  color: "#4D8C40",
                  fontFamily: "Nunito Sans",
                  fontSize: "21px",
                  marginTop: "-1rem",
                }}
              >
                {productInfo.amount}
              </p>
              <p style={{ marginTop: "-1.2rem" }}>{productInfo.quantity}</p>
              <p style={{ marginTop: "-1rem" }}>
                Value/Size:{" "}
                <span
                  style={{
                    fontSize: "12px",
                    color: " #7E563D",
                    fontFamily: "Poppins",
                  }}
                  className={classes.descriptionBox}
                >
                  {productInfo.description}
                </span>
              </p>
              <p style={{ marginTop: "-1rem" }}>{productInfo.text}</p>
            </div>
            <div className={classes.column}>
              <p style={{ fontFamily: "Playfair Display", fontSize: "20px" }}>
                Deliver To
              </p>
              <h3 style={{ fontFamily: "Playfair Display", fontSize: "21px" }}>
                {personInfo.name}
              </h3>
              <p>{personInfo.address}</p>
              <p>{personInfo.phone}</p>
              <p>{personInfo.email}</p>
            </div>
            <div className={classes.column}>
              <p
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "21px",
                  fontWeight: "bold",
                }}
              >
                Payment Details
              </p>
              <p>Subtotal:</p>
              <p>Discount: </p>
              <p>Total: </p>
              <p style={{ width: "14rem" }}>
                Shipping & Handling:{" "}
                <p style={{ marginTop: "1px" }}>{standard}</p>
              </p>
              <p>Grand Total:</p>
            </div>
            <div style={{ marginTop: "2.5rem" }} className={classes.column}>
              <p>{paymentInfo.subtotal}</p>
              <p>{paymentInfo.discount}</p>
              <p>{paymentInfo.total}</p>
              <p>
                {" "}
                Rs.<span className={classes.fifteen}>15</span>{" "}
                <span className={classes.free}>FREE</span>
              </p>

              <p style={{ marginTop: "1.7rem" }}>{grandTotal}</p>
            </div>
          </div>
        </div>
      </div>
      <Stepper />
    </div>
  );
};

export default Page3;
