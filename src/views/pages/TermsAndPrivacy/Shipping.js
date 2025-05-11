import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const styles = {
  box1: {
    margin: "10px",
  },
  mainHeading: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    fontSize: "32px",
    marginBottom: "30px",
    color: "#2D2C2C",
  },
  subHeading: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    fontSize: "22px",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#2D2C2C",
  },
  paragraph: {
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize: "16px",
    color: "#202123",
    marginBottom: "20px",
    lineHeight: 1.6,
  },
};

const TermsAndConditions = () => {
  return (
    <Grid container style={{ margin: "75px 0" }}>
      <Grid item xs={10} style={{ margin: "0 auto" }}>
        <Box style={styles.box1}>
          {/* Main Heading */}
          <Typography variant="h3" style={styles.mainHeading}>
            Shipping & Delivery Policy
          </Typography>

          {/* Intro Paragraph */}
          <Typography style={styles.paragraph}>
            This Shipping & Delivery Policy is part of our Terms and Conditions and should be read in conjunction with them.
            By placing an order with us, you agree to the terms outlined below.
          </Typography>

          {/* 1. Shipping & Delivery Options */}
          <Typography style={styles.subHeading}>1. Shipping & Delivery Options</Typography>
          <Typography style={styles.paragraph}>
            We offer a range of shipping options to suit your needs.
            In some cases, a third-party supplier may manage our inventory and handle the shipping of your order.
          </Typography>

          {/* 2. Dispatch Time */}
          <Typography style={styles.subHeading}>2. Dispatch Time</Typography>
          <Typography style={styles.paragraph}>
            Orders are typically processed and dispatched within <strong>1–3 business days</strong> from the date of purchase.
          </Typography>

          {/* 3. Delivery Time */}
          <Typography style={styles.subHeading}>3. Delivery Time</Typography>
          <Typography style={styles.paragraph}>
            Once dispatched, your order is usually delivered within <strong>7–10 business days</strong>, depending on your delivery pincode.
            <br /><br />
            <strong>Please note:</strong> All delivery timelines provided are estimates and may vary.
            We strive to ensure timely delivery, but delays can occasionally occur due to unforeseen circumstances.
          </Typography>

          {/* 4. International Shipping */}
          <Typography style={styles.subHeading}>4. International Shipping</Typography>
          <Typography style={styles.paragraph}>
            Yes, we offer international shipping!
            <br />
            If you're placing an international order, please DM us on Instagram <strong>@eleglamm</strong> and our team will be happy to assist you with shipping options and rates.
          </Typography>

          {/* 5. Questions About Returns? */}
          <Typography style={styles.subHeading}>5. Questions About Returns?</Typography>
          <Typography style={styles.paragraph}>
            For information regarding returns or refunds, please refer to our <strong>Returns & Exchange Policy</strong>.
          </Typography>

          {/* 6. Contact Us */}
          <Typography style={styles.subHeading}>6. Contact Us</Typography>
          <Typography style={styles.paragraph}>
            If you have any questions or need further assistance, feel free to reach out to us at:<br />
            📧 Email: <a href="mailto:eleglamjewel@gmail.com">eleglamjewel@gmail.com</a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TermsAndConditions;
