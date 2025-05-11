import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";


export default function TeaKind() {
  

  const styles = {
    
    
    moreAboutButton: {
      marginTop: "20px",
      backgroundColor: "#7E563D",
      padding: "10px 20px",
      // height: "40px",
      // width: "120px",
      borderRadius: "30px",
      textTransform: "none",
      color: "white",
      fontWeight: "600px",
      fontSize: "16px",
      '&:hover': {
        backgroundColor: '#7E563D !important', 
    },
    '&:active': {
        backgroundColor: '#7E563D !important', 
    },
    },
    vector: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    ellipse: {
      backgroundImage: "/Image/ellipse.png",
      padding: "20px",
    },
  upper:{
    fontFamily: "Nunito Sans",
    fontSize: "22px",
    fontWeight: "700",
    color: "#2D2C2C",
    marginBottom: "8px",
  },
  lower:{
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: "400",
    color: "#4F4F4F",
  }
  };


  return (
    <>
     
      <Grid
        container
        style={{
          padding: "50px 0px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#7E563D9F1",
        }}
        spacing={3}
      >
        <Grid item lg={3} md={3} sm={6} xs={12} style={styles.vector}>
          <img src="/Image/vector.png" alt="ellips" style={styles.ellipse} />
          <Box>
            <Typography
              style={styles.upper}
            >
              {" "}
              450 <span  style={{
                fontFamily: "Playfair Display",
                
              }}>+ KIND OF TEA</span>
            </Typography>
            <Typography
              style={styles.lower}
            >
              {" "}
              Order bouquet via mobile
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={3} md={3} sm={6} xs={12} style={styles.vector}>
          <img src="/Image/vector.png" alt="ellips" style={styles.ellipse} />
          <Box>
            <Typography
             style={styles.upper}
            >
              {" "}
              CERTIFICATED PRODUCT
            </Typography>
            <Typography
              style={styles.lower}
            >
              {" "}
              For all orders from $120
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={styles.vector}>
          <img src="/Image/vector.png" alt="ellips" style={styles.ellipse} />
          <Box>
            <Typography
             style={styles.upper}
            >
              {" "}
              FREE DELIVERY
            </Typography>
            <Typography
              style={styles.lower}
            >
              {" "}
              Bouquet are fresh & blooms
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={styles.vector}>
          <img src="/Image/vector.png" alt="ellips" style={styles.ellipse} />
          <Box>
            <Typography
             style={styles.upper}
            >
              {" "}
              SAMPLE FOR ALL TEAs
            </Typography>
            <Typography
              style={styles.lower}
            >
              {" "}
              Protect online payment
            </Typography>
          </Box>
        </Grid>
        <Button style={styles.moreAboutButton}> Know More About Us</Button>
      </Grid>

     
    </>
  );
}
