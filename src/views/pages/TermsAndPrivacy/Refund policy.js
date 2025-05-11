import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

const styles = {
  box1: {
    margin: "10px",
  },
  heading: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    fontSize: "32px",
    color: "#2D2C2C",
    marginBottom: "24px",
    lineHeight: 1.4,
  },
  sectionTitle: {
    fontFamily: "Playfair Display",
    fontWeight: 700,
    fontSize: "20px",
    color: "#2D2C2C",
    marginTop: "24px",
    marginBottom: "12px",
    lineHeight: 1.4,
  },
  text: {
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize: "16px",
    color: "#202123",
    lineHeight: 1.6,
    marginBottom: "8px",
  },
};

const ReturnExchangePolicy = () => {
  return (
    <Grid container style={{ margin: "75px 0" }}>
      <Grid item xs={10} style={{ margin: "0 auto" }}>
        <Box style={styles.box1}>
          <Typography variant="h3" style={styles.heading}>
            Return & Exchange Policy
          </Typography>

          <Typography style={styles.text}>
            We are committed to ensuring a smooth and transparent return and exchange process.
            Please review the following terms carefully before initiating a return or exchange request.
          </Typography>

          <Typography style={styles.sectionTitle}>1. Returns:</Typography>
          <Typography style={styles.text}>• Returns are accepted only if the product received is damaged or defective.</Typography>
          <Typography style={styles.text}>• A return request must be initiated within seven (7) days from the date of delivery.</Typography>
          <Typography style={styles.text}>• Requests after the 7-day window will not be accepted under any circumstances.</Typography>
          <Typography style={styles.text}>• Products must be unused and returned with original tags and packaging.</Typography>
          <Typography style={styles.text}>• A 360-degree unboxing video and clear images are mandatory for returns.</Typography>
          <Typography style={styles.text}>• Products failing our quality check will not be eligible for refund or exchange.</Typography>
          <Typography style={styles.text}>• Used products or missing evidence will not be accepted for return.</Typography>

          <Typography style={styles.sectionTitle}>2. Exchanges:</Typography>
          <Typography style={styles.text}>• Allowed only if the product is damaged or defective.</Typography>
          <Typography style={styles.text}>• Must be requested within seven (7) days of delivery.</Typography>
          <Typography style={styles.text}>• Replacement will be for the same item ordered.</Typography>
          <Typography style={styles.text}>• Unboxing video and product images are required.</Typography>

          <Typography style={styles.sectionTitle}>3. Return Shipping and Pickup:</Typography>
          <Typography style={styles.text}>• We will arrange reverse pickup from the original address.</Typography>
          <Typography style={styles.text}>• If the customer is unavailable, pickup may be canceled and self-shipping will be required at customer’s cost.</Typography>
          <Typography style={styles.text}>• Returns and exchanges are processed at the order level only.</Typography>

          <Typography style={styles.sectionTitle}>4. Refunds:</Typography>
          <Typography style={styles.text}>• Initiated after the returned item is received and inspected.</Typography>
          <Typography style={styles.text}>• May take up to seven (7) business days after receiving the product.</Typography>
          <Typography style={styles.text}>• Prepaid orders are refunded to the original payment method.</Typography>
          <Typography style={styles.text}>• COD orders require customer’s bank details for refund.</Typography>
          <Typography style={styles.text}>• Refunds for UPI/cards/net banking take 3–5 working days after approval.</Typography>
          <Typography style={styles.text}>• Shipping and COD charges are non-refundable.</Typography>

          <Typography style={styles.sectionTitle}>5. Additional Information:</Typography>
          <Typography style={styles.text}>• A clear unboxing video with visible tags is mandatory.</Typography>
          <Typography style={styles.text}>• Missing items will result in deductions up to their full MRP, including free gifts.</Typography>
          <Typography style={styles.text}>• Claims with tampered packaging or insufficient proof will not be accepted.</Typography>
          <Typography style={styles.text}>• Products bought during sales, contests, or promotions are non-returnable.</Typography>
          <Typography style={styles.text}>• During peak seasons, processing time may be longer.</Typography>
          <Typography style={styles.text}>• Final approval lies with the brand for all return/exchange cases.</Typography>

          <Typography style={styles.sectionTitle}>6. Contact Information:</Typography>
          < Typography style={styles.text}>
            For any queries related to this policy, please contact us at:<br />
          
           Email: eleglamjewel@gmail.com</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReturnExchangePolicy;
