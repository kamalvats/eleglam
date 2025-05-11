import { Avatar, Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ProfileCardsBox: {
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "11.3171px",
    padding: "10px",

    transition: "0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 0px 17px #c91028",
      // boxShadow:
      //   "rgb(81 20 218 / 37%) 0px 30px 50px -33px, rgb(235 31 31 / 17%) 0px 18px 36px -18px",
    },
    // "& .avatarcard1": {
    //   width: "100%",
    //   height: "310px",
    //   minHeight: "100%",
    //   borderRadius: "10px",
    //   boxShadow: "0px 0px 14px #1078B3",
    //   overflow: "hidden",
    //   "& img": {
    //     transition: "0.9s",
    //     "&:hover": {
    //       transform: "scale(1.1)",
    //     },
    //   },
    //   [theme.breakpoints.down("xs")]: {
    //     height: "200px",
    //   },
    // },
    "& .avatarcard2": {
      marginTop: "25px",
      width: "80px",
      height: "80px",
      [theme.breakpoints.down("sm")]: {
        width: "50px",
        height: "50px",
        marginTop: "10px",
      },
    },

    "& h2": {
      fontFamily: "'Ubuntu'",

      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "34px",
      color: "#7E563D",
      paddingBottom: "10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px !important",
        paddingBottom: "0px",
      },
    },
    "& h3": {
      fontFamily: "'Ubuntu'",

      fontWeight: "200",
      fontSize: "18px",
      lineHeight: "28px",
      color: "#9c9c9c",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px !important",
      },
      "& span": {
        fontWeight: "400",
        color: "#7E563D",
      },
    },
    "& .TimeBox": {
      "& p": {
        fontSize: "17px",
        color: "#7E563D",

        [theme.breakpoints.down("sm")]: {
          fontSize: "11px !important",
        },
      },
    },
  },
  mainimg: {
    width: "100%",
    boxShadow: "0px 0px 14px #1078B3",
    overflow: "hidden",
   height:"213px",
    position: "relative",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",
    borderRadius: "10px",
    
  },
}));

export default function ProfileCards({ value, index }) {
  const classes = useStyles();
  const history = useHistory();

  const updateDimensions = () => {
    var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
    var newoofsetWidth = offsetWidth - 80;
    document.getElementById("imagecard" + index).style.height =
      newoofsetWidth + "px";
  };

  useEffect(() => {
    updateDimensions();
  }, [value, index]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <Box className={classes.ProfileCardsBox}  onClick={()=>history.push("/single-nft")}>
      {/* <Avatar className="avatarcard1" src={value.img} /> */}
      <Box
        id={`imagecard${index}`}
        className={classes.mainimg}
        style={{ background: "url(" + value.img + ")", cursor:"pointer" }}
      
      ></Box>
      <Box className="displaySpacebetween">
        <Box>
          <Typography variant="h2">Crazy Apes</Typography>
          <Typography variant="h3">
            Created by <span>Rick </span>{" "}
          </Typography>
        </Box>
        <Avatar className="avatarcard2" src="images/profileimg.png" />
      </Box>
      <Box className="displaySpacebetween" mt={2}>
        <Typography
          variant="body2"
          style={{ color: "rgba(255, 255, 255, 0.25)" }}
          className="dmMono"
        >
          Current Bid
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "rgba(255, 255, 255, 0.25)" }}
          className="dmMono"
        >
          Ending In
        </Typography>
      </Box>
      <Box className="displaySpacebetween TimeBox" mt={1}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Avatar src="images/tokken1.png"></Avatar>
          <Box ml={1}>
            <Typography variant="body2" className="dmMono">
              0.90 ETH
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" className="dmMono">
          10h 43m 26s
        </Typography>
      </Box>
    </Box>
  );
}
