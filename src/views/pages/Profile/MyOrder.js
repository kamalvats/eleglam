import React from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Button
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";


const MyOrder = () => {
  const style = {
    mainBox: {
      margin: "0 5%",
    },
    heading: {
      marginTop: "1%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    headingText: {
      margin: "10px",
      fontFamily: "Playfair Display",
      fontSize: "30px",
      fontWeight: "600",
    },
    productBuyImg: {
      display: "flex",
      justifyContent: "center",
    },
    basicInfo: {
      fontFamily: "Nunito Sans",
      fontSize: "24px",
      fontWeight: "700",
      color: "#2D2C2C",
      margin:"1% 0"
    },
    nameBox: {
      display: "flex",
      flexDirection: "row",
      margin:"2% 0"
    },
    nameKey:{
        fontFamily: "Playfair Display",
      fontSize: "16px",
      fontWeight: "500",
      color: "#2D2C2C",
    },
    namevalue:{
        
        fontFamily: "Nunito Sans",
        fontSize: "16px",
        fontWeight: "400",
        color: "#4F4F4F",
    },
    addressName:{
        fontFamily: "Playfair Display",
        fontSize: "20px",
        fontWeight: "700",
        color: "#2D2C2C",
       
    },
    address:{
        
        fontFamily: "Nunito Sans",
        fontSize: "18px",
        fontWeight: "600",
        color: "#4F4F4F",
        marginTop:"2%"
    },
    addressBtn: {
        height: "45px",
        width: "170px",
        backgroundColor: "#7E563D",
        borderRadius: "300px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "Nunito Sans",
        margin:"2% 0%",
        color: "white",
       
        "&:hover": {
          backgroundColor: "#7E563D !important",
        },
        "&:active": {
          backgroundColor: "#7E563D !important",
        },
  
        //   border: ".5px solid #3E3EDE",
      },
  };
  const data = [
    { key: "Full Name", value: "Arvind Tyagi" },
    { key: "Email:", value: "arvind@gmail.com" },
    { key: "Mobile Number:", value: "+91-7337463363" },
  ];
  const history = useHistory();

  return (
    <Box sx={style.mainBox}>
      <Box sx={style.heading} spacing={2}>
        <ArrowBackIcon  onClick={() => history.goBack()}/>
        <Typography sx={style.headingText}>My Orders</Typography>
      </Box>
      <Divider sx={{ width: "100%", margin: "2% 0%" }} />
     <Grid container>
        <Grid item >

        </Grid>
     </Grid>
      
    </Box>
  );
};

export default MyOrder;
