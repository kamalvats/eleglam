/* eslint-disable no-unused-vars */

import { Grid, Typography, Avatar, Box, makeStyles, useMediaQuery, Button, Divider } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "src/context/Auth";



const useStyle = makeStyles((theme) => ({
  profileContainer: {
    margin: "0px 100px",

  },
  profileData: {
    padding: "20px 0px 50px 0px"
  },
  profileHeader: {
    height: "100px",
    width: "100%",
    // background:"blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "start"
  },
  profileHeaderHeading: {
    color: "#2D2C2C",
    marginLeft: "20px",
    fontFamily: "Playfair Display",
  },
  customButton: {
    // width: "169px",
    // height: "50px",
    marginTop: "20px",
    // borderRadius: "30px",
    // backgroundColor: "#7E563D",
    // color: "white", // Text color
    // "&:hover": {
    //   backgroundColor: "#7E563D", // Same color as default
    // },
  },

  MainHeading: {
    fontFamily: "Nunito Sans",
    color: "#2D2C2C",
    fontWeight: "700"
  },
  leftContent: {
    fontFamily: "Playfair Display",
    fontSize: "16px",
    fontWeight: "500",
    color: "#2D2C2C",
    // marginLeft:"10px"
  },
  rightContent: {
    color: '#4F4F4F',
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "400",

  },


  //small screen css
  profileSmallContainer: {
    margin: "0px 30px"
  },
  savedAdressBox:{
    marginLeft:"10px",
    display:"flex",
    flexDirection:"column"
  },
  savedAdressInnerBox:{
    border:"1px solid #D9D9D9",
    padding: "10px 0px 10px 10px",
    width:"702px",
    '@media (max-width: 1100px)': {
      width: '500px', /* Change width for small devices */
    },
    '@media (max-width: 700px)': {
      width: '100%', /* Change width for small devices */
    },
  },
  profileImageBox:{
    display:"flex" ,
    justifyContent:"center",

  },
  divider:{
    color:"#D8D7D7",
    maxWidth:"1449px"
  },
  userDetailName:{
    fontFamily: "Playfair Display", fontSize: "20px", fontWeight: "700", color: "#2D2C2C" ,
    margin:"10px 0px"
  }
}))

const Profile = () => {

  const classes = useStyle();
  const history = useHistory();
  const { userDetails, profileAPi } = useContext(AuthContext);

  console.log(userDetails,"userDetails");
  useEffect(() => {
    profileAPi();
  }, []);


  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className={isSmallScreen ? classes.profileSmallContainer : classes.profileContainer}>
      <Box className={classes.profileHeader}>
        <Box>
          <ArrowBackIcon style={{ color: '#2D2C2C' }} fontSize="large" onClick={() => history.goBack()} />
        </Box>
        <Typography variant="h3" className={classes.profileHeaderHeading}>
          Profile
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <Grid container className={classes.profileData} spacing={3}>
        {/* First Column */}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          {/* Avatar with 50% radius */}
          <Box display="flex" justifyContent="start" className={classes.profileImageBox} >
            <Avatar
              alt="User Profile Picture"
              src={userDetails?.profilePic}
              style={{ width: 150, height: 150, borderRadius: "50%" }}
            />
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={8} md={9} lg={10} >
          <Grid container spacing={3}>
            {/* Basic Info */}

            <Grid item sm={12} xs={12}>
              <Typography variant="h4" className={classes.MainHeading}><u>Basic Info:</u> </Typography>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Typography variant="body1" className={classes.leftContent}>Full Name:</Typography>
            </Grid>
            <Grid item sm={10} xs={8}>
              <Typography variant="body1" className={classes.rightContent}>{`${userDetails?.firstName} ${userDetails?.lastName}`}</Typography>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Typography variant="body1" className={classes.leftContent}>Email:</Typography>
            </Grid>
            <Grid item sm={10} xs={8}>
              <Typography variant="body1" className={classes.rightContent}>{userDetails?.email}</Typography>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Typography variant="body1" className={classes.leftContent}>Mobile Number:</Typography>
            </Grid>
            <Grid item sm={10} xs={8}>
              <Typography variant="body1" className={classes.rightContent}>{userDetails?.mobileNumber}</Typography>
            </Grid>

            <Grid item sm={12} xs={12}>
                <Typography variant="h4" className={classes.MainHeading}><u>Saved Address:</u></Typography>
              </Grid>
            <Box className={classes.savedAdressBox}> 
            <Box className={classes.savedAdressInnerBox}>
                {/* Saved Address */} 
            
              <Grid item sm={12} xs={12}>
                <Typography variant="h6"  className={classes.userDetailName} >{`${userDetails?.firstName} ${userDetails?.lastName}`}</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography variant="body1" className={classes.rightContent} >{userDetails?.communicationAddress}</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography variant="body1" className={classes.rightContent} >{userDetails?.mobileNumber}</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography variant="body1" className={classes.rightContent} >{userDetails?.email}</Typography>
              </Grid>

            </Box>
            <Link to="/editprofile">
              <Button  variant="contained"
                    color="primary"
                     className={classes.customButton}
                // disableElevation // Remove elevation
                // disableRipple // Remove ripple effect
                // disableFocusRipple // Remove focus ripple effect
                // disableTouchRipple // Remove touch ripple effect

              >
                Edit profile
              </Button>
            </Link>
            </Box>
           
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile