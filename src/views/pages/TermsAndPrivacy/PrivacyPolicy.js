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

const PrivacyPolicy = () => {
  return (
    <Grid container style={{ margin: "75px 0" }}>
      <Grid item xs={10} style={{ margin: "0 auto" }}>
        <Box style={styles.box1}>
          <Typography variant="h3" style={styles.heading}>
            Privacy Policy
          </Typography>

          <Typography style={styles.text}>
            At Eleglam we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you
            visit our website <strong>www.eleglam.co</strong> or purchase our products.
          </Typography>

          <Typography style={styles.sectionTitle}>1. Information We Collect</Typography>
          <Typography style={styles.text}>• <strong>Personal Information:</strong></Typography>
          <Typography style={styles.text}>  – Full Name</Typography>
          <Typography style={styles.text}>  – Billing and Shipping Address</Typography>
          <Typography style={styles.text}>  – Phone Number</Typography>
          <Typography style={styles.text}>  – Email Address</Typography>
          <Typography style={styles.text}>  – Payment details (processed securely by third-party providers)</Typography>

          <Typography style={styles.text}>• <strong>Device & Usage Data:</strong></Typography>
          <Typography style={styles.text}>  – IP address</Typography>
          <Typography style={styles.text}>  – Browser type and version</Typography>
          <Typography style={styles.text}>  – Device information</Typography>
          <Typography style={styles.text}>  – Pages viewed and interactions on our site</Typography>
          <Typography style={styles.text}>  – Cookies and tracking data</Typography>

          <Typography style={styles.sectionTitle}>2. How We Use Your Information</Typography>
          <Typography style={styles.text}>• Process and fulfill your orders</Typography>
          <Typography style={styles.text}>• Send order confirmations and shipping updates</Typography>
          <Typography style={styles.text}>• Communicate promotions, offers, or updates (only if you opt-in)</Typography>
          <Typography style={styles.text}>• Improve our website performance and user experience</Typography>
          <Typography style={styles.text}>• Prevent fraud and ensure security</Typography>

          <Typography style={styles.sectionTitle}>3. Sharing Your Information</Typography>
          <Typography style={styles.text}>• Payment processors (e.g., Razorpay, PayU)</Typography>
          <Typography style={styles.text}>• Logistics partners for delivery</Typography>
          <Typography style={styles.text}>• Platform partners like Shopify or similar if applicable</Typography>
          <Typography style={styles.text}>• Advertising and analytics tools (e.g., Google Analytics, Meta Ads)</Typography>
          <Typography style={styles.text}>• <strong>We do not sell your personal information to third parties.</strong></Typography>

          <Typography style={styles.sectionTitle}>4. Cookies and Tracking</Typography>
          <Typography style={styles.text}>• We use cookies to enhance site functionality and personalize your experience.</Typography>
          <Typography style={styles.text}>• Types include:</Typography>
          <Typography style={styles.text}>  – Essential cookies (for cart and login functionality)</Typography>
          <Typography style={styles.text}>  – Analytics cookies</Typography>
          <Typography style={styles.text}>  – Marketing cookies (for personalized ads)</Typography>
          <Typography style={styles.text}>• You may manage cookies through your browser settings.</Typography>

          <Typography style={styles.sectionTitle}>5. Your Rights</Typography>
          <Typography style={styles.text}>If you are an Indian resident, you have the right to:</Typography>
          <Typography style={styles.text}>• Access your personal data</Typography>
          <Typography style={styles.text}>• Request updates or deletion of your data</Typography>
          <Typography style={styles.text}>• Opt-out of marketing communications</Typography>
          <Typography style={styles.text}>To exercise your rights, contact:</Typography>
          <Typography style={styles.text}>  Phone: +91 81308 88600</Typography>
          <Typography style={styles.text}>  Email: eleglamjewel@gmail.com</Typography>

          <Typography style={styles.sectionTitle}>6. Data Security</Typography>
          <Typography style={styles.text}>
            We use industry-standard security measures and encryption tools to protect your data.
            However, no method is 100% secure. We encourage strong passwords and safe browsing habits.
          </Typography>

          <Typography style={styles.sectionTitle}>7. Minors</Typography>
          <Typography style={styles.text}>
            Our website is not intended for users under the age of 18.
            We do not knowingly collect personal data from minors.
          </Typography>

          <Typography style={styles.sectionTitle}>8. Updates to This Policy</Typography>
          <Typography style={styles.text}>
            We may update this policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
            Continued use of the site implies acceptance.
          </Typography>
          <Typography style={styles.text}><strong>Last Updated:</strong> 11-May-2025</Typography>

          <Typography style={styles.sectionTitle}>9. Contact Us</Typography>
          <Typography style={styles.text}>Eleglam</Typography>
          <Typography style={styles.text}>Website: www.eleglam.co</Typography>
          <Typography style={styles.text}>Phone: +91 81308 88600</Typography>
          <Typography style={styles.text}>Email: eleglamjewel@gmail.com</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
