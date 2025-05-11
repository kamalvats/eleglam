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
    color: "#2D2C2C",
    marginTop: "30px",
    marginBottom: "10px",
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
          <Typography variant="h3" style={styles.mainHeading}>
            Terms and Conditions
          </Typography>

          <Typography style={styles.paragraph}>
            These Terms and Conditions ("Terms") govern your use of the Eleglam website and any products or services offered through it.
            By accessing or using the website, you agree to be bound by these Terms. If you do not agree with these Terms, please refrain from using the website.
          </Typography>

          <Typography style={styles.subHeading}>1. Website Use</Typography>
          <Typography style={styles.paragraph}>
            a. You must be at least 18 years old or have the legal capacity to enter into a binding agreement to use the website.
            <br />
            b. You agree to use the website only for lawful purposes and in accordance with all applicable laws and regulations.
          </Typography>

          <Typography style={styles.subHeading}>2. Account Registration</Typography>
          <Typography style={styles.paragraph}>
            a. To access certain features of the website, you may be required to register and create an account.
            You agree to provide accurate and complete information and to keep your account details updated.
            <br />
            b. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            Please notify us immediately of any unauthorized access or security breach.
          </Typography>

          <Typography style={styles.subHeading}>3. Product Purchases</Typography>
          <Typography style={styles.paragraph}>
            a. All purchases made through the website are subject to our Shipping Policy, Refund Policy, and Privacy Policy.
            <br />
            b. Prices and product availability are subject to change without notice. We reserve the right to modify or discontinue any product or service at any time.
          </Typography>

          <Typography style={styles.subHeading}>4. Intellectual Property</Typography>
          <Typography style={styles.paragraph}>
            a. All content on the website—including text, images, logos, designs, and code—is the property of Eleglam and protected by applicable intellectual property laws.
            You may not reproduce, copy, distribute, or use any content without our prior written permission.
            <br />
            b. You retain rights to any content you submit to the website, but by doing so, you grant us a non-exclusive, royalty-free, irrevocable, and sublicensable license to use and display such content globally.
          </Typography>

          <Typography style={styles.subHeading}>5. Limitation of Liability</Typography>
          <Typography style={styles.paragraph}>
            a. To the maximum extent permitted by law, Eleglam will not be liable for any indirect, incidental, special, consequential, or punitive damages,
            including loss of profits or data, arising from your use of the website or products purchased.
            <br />
            b. Our maximum liability to you for any claim will not exceed the amount you paid for the specific product or service in question.
          </Typography>

          <Typography style={styles.subHeading}>6. Indemnification</Typography>
          <Typography style={styles.paragraph}>
            You agree to indemnify, defend, and hold harmless Eleglam, its founders, employees, agents, and affiliates from and against any claims, damages,
            liabilities, costs, or expenses (including reasonable legal fees) arising from:
            <br /><br />
            • Your use or misuse of the website or products;<br />
            • Your breach of these Terms;<br />
            • Your violation of any applicable law or third-party rights;<br />
            • Any content you post, submit, or share on the website.
            <br /><br />
            We reserve the right, at your expense, to assume the exclusive defense of any matter for which you are required to indemnify us.
            You agree to fully cooperate with our defense.
          </Typography>

          <Typography style={styles.subHeading}>7. Governing Law and Jurisdiction</Typography>
          <Typography style={styles.paragraph}>
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes will be subject to the exclusive jurisdiction of the courts located in Chandigarh.
          </Typography>

          <Typography style={styles.subHeading}>8. Changes to Terms</Typography>
          <Typography style={styles.paragraph}>
            We may update or modify these Terms at any time without prior notice.
            Changes will be effective upon posting on the website. Continued use of the website indicates your acceptance of the updated Terms.
          </Typography>

          <Typography style={styles.subHeading}>9. Contact Us</Typography>
          <Typography style={styles.paragraph}>
            For any questions or concerns regarding these Terms, you may contact us at:<br />
            📧 Email: <a href="mailto:eleglamjewel@gmail.com">eleglamjewel@gmail.com</a><br />
            🌐 Website: <a href="https://www.eleglam.co" target="_blank" rel="noopener noreferrer">www.eleglam.co</a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TermsAndConditions;
