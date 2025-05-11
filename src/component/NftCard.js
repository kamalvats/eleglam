import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  launchpadbox: {
    position: "relative",
    overflow: "hidden",
    "& .launchbox": {
      minHeight: "222px",
      background: "#000",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "20px",
      position: "relative",
      padding: "20px",
      zIndex: "1",
      transition: "0.4s ease-in-out",
      cursor:"pointer",
      [theme.breakpoints.down("xs")]: {
        minHeight: "150px",
      },
      "&::before": {
        content: '""',
        background:
          "linear-gradient(90.21deg, #02020f -5.91%, #02020f4d 111.58%)",
        opacity: "0.85",
        top: "0",
        left: "0",
        position: "absolute",
        width: "100%",
        height: "0",
        transition: "0.4s ease-in-out",
      },

      "&:hover": {
        transform: "scale(1.1)",
        "&::before": {
          height: "100%",
        },
        "& .textbox": {
          top: "50%",
          opacity: "1",
        },
        "& .textbox2": {
          display: "none",
        },
      },

      "& h6": {
        color: "#7E563D",
      },
      "& p": {
        color: "#7E563D",
      },
    },
    "& .textbox": {
      position: "absolute",
      textAlign: "center",
      top: "65%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      transition: "0.5s ease-in-out",
      opacity: "0",
      width: "100%",
    },
  },
}));

export default function NftCard({ data }) {
  const classes = useStyles();
  const history =useHistory();
  return (
    <>
      <Box className={classes.launchpadbox}>
        <Box
          style={{ overflow: "hidden", borderRadius: "20px", margin: "5px" }}
        >
          <Box
            className="launchbox"
            style={{
              backgroundImage: `url(${data.img})`,
            }}
            onClick={()=>history.push("/single-nft")}
          >
            <Box style={{ position: "absolute" }} className="textbox">
              <Typography variant="h6" className="nicoMoji">{data.text1}</Typography>

              <Typography variant="body1">{data.text2}</Typography>
            </Box>
            <Box
              style={{ position: "absolute", bottom: "20px" }}
              className="textbox2"
            >
              <Typography variant="h6" className="nicoMoji">{data.text1}</Typography>
              <Typography variant="body1">{data.text2}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
