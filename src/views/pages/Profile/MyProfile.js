/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect } from "react";
import { Box, Divider, Grid, Typography, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
import { AuthContext } from "@/context/Auth";

const MyProfile = () => {
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
      margin: "1% 0",
    },
    nameBox: {
      display: "flex",
      flexDirection: "row",
      margin: "2% 0",
    },
    nameKey: {
      fontFamily: "Playfair Display",
      fontSize: "16px",
      fontWeight: "500",
      color: "#2D2C2C",
    },
    namevalue: {
      fontFamily: "Nunito Sans",
      fontSize: "16px",
      fontWeight: "400",
      color: "#4F4F4F",
    },
    addressName: {
      fontFamily: "Playfair Display",
      fontSize: "20px",
      fontWeight: "700",
      color: "#2D2C2C",
    },
    address: {
      fontFamily: "Nunito Sans",
      fontSize: "18px",
      fontWeight: "600",
      color: "#4F4F4F",
      marginTop: "2%",
    },
    addressBtn: {
      height: "45px",
      width: "170px",
      backgroundColor: "#7E563D",
      borderRadius: "30px",
      textTransform: "none",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Nunito Sans",
      margin: "2% 0%",
      color: "white",
      "&:hover": {
        backgroundColor: "#7E563D", // Remove hover color change
      },
      "&:active": {
        backgroundColor: "#7E563D", // Remove active color change
      },
      boxShadow: "none", // Remove box shadow
      "&:focus": {
        boxShadow: "none", // Remove focus box shadow
      },
    },
  };

  
  const history = useHistory();
  const { userDetails, profileAPi } = useContext(AuthContext);


  useEffect(() => {
    profileAPi();
  }, []);


  return (
    <Box sx={style.mainBox}>
      <Box sx={style.heading}>
        <ArrowBackIcon  onClick={() => history.goBack()}/>
        <Typography sx={style.headingText}>My profile</Typography>
      </Box>
      <Divider sx={{ width: "100%", margin: "2% 0%" }} />
      <Grid container sx={{ margin: "0% 0%" }} spacing={2}>
        <Grid item lg={1.5} md={3} sm={4} xs={12} sx={style.productBuyImg}>
          <img
            src="Image/myProfileImg.png"
            height={150}
            width={150}
            alt="Product Image"
          />
        </Grid>
        <Grid item lg={10} md={9} sm={8} xs={12}>
          <Typography sx={style.basicInfo}>
            <u>Basic Info:</u>
          </Typography>
          <Grid container sx={style.nameBox}>
            <Grid item lg={1.5} md={2} sm={3} xs={6}>
              <Typography sx={style.nameKey}>Full Name</Typography>
            </Grid>
            <Grid item lg={10} md={10} sm={9} xs={6}>
              <Typography sx={style.namevalue}>{`${userDetails?.firstName} ${userDetails?.lastName}`}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={style.nameBox}>
            <Grid item lg={1.5} md={2} sm={3} xs={6}>
              <Typography sx={style.nameKey}>Email:</Typography>
            </Grid>
            <Grid item lg={10} md={10} sm={9} xs={6}>
              <Typography sx={style.namevalue}>{userDetails?.email}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={style.nameBox}>
            <Grid item lg={1.5} md={2} sm={3} xs={6}>
              <Typography sx={style.nameKey}>Mobile Number:</Typography>
            </Grid>
            <Grid item lg={10} md={10} sm={9} xs={6}>
              <Typography sx={style.namevalue}>--</Typography>
              </Grid>
            </Grid>
          <Typography sx={style.basicInfo}>
            <u>Saved Address:</u>
          </Typography>
          <Grid item lg={8} md={8} sm={8} xs={12} sx={{ border: "1px solid #D9D9D9" }}>
            <Box sx={{ margin: "2% 2%" }}>
              <Typography sx={style.addressName}>{`${userDetails?.firstName} ${userDetails?.lastName}`}</Typography>
              <Typography sx={style.address}>
                --D-115, Okhla Phase-1, New Delhi, 110019--
              </Typography>
              <Typography sx={style.address}>--</Typography>
              <Typography sx={style.address}>{userDetails?.email}</Typography>
            </Box>
          </Grid>
          <Button sx={style.addressBtn}>Edit Profile</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyProfile;
