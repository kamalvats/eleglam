import React, { useState } from "react";
import {
  makeStyles,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  FormControl,
  Typography,
  TextField,
  Box,
  Button,
  Avatar,
  Divider,
  Grid,
} from "@material-ui/core";
import { IoClose } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  checkOutModalBox: {
    padding: "30px",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& p": {
      color:"#7E563D",
      marginBottom:"6px",
    },
    "& h6": {
      "& span": {
        color: "#7E563D",
      },
    },
    "& h4": {
      color: "#7E563D",
      marginBottom: "16px",
    },
    "& .checkOutBox": {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "& .placeBidFlex": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  cancelBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    "& svg": {
      color: "#7E563D",
      fontWeight: "700",
    },
  },
}));

function PlaceBid({ placebid, setPlacebid }) {
  const classes = useStyles();
  return (
    <>
      <Dialog
        open={placebid}
        onClose={() => setPlacebid("false")}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogContent className="borderShadowBox">
          <Box className={classes.checkOutModalBox}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <Box className="checkOutBox">
                  <img
                    width="100%"
                    height="100%"
                    src="images/PlaceBidImage.png"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} className="placeBidFlex">
                <Typography variant="h4" className="ubuntu">
                  {" "}
                  Place a Bid
                </Typography>

                <Box>
                  <Typography className="ubuntu" variant="h6">
                    You are about to purchase{" "}
                    <span> Rock music audio file from </span>
                    NEKO NFT
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant="body2">Your bid</Typography>
                </Box>
                <Box className="customVariant">
                  <TextField placeholder="0" fullWidth />
                </Box>
                <Box mt={2}>
                  <Typography variant="body2" className="ubuntu">Duration</Typography>
                </Box>
                <Box className="customVariant">
                  <TextField placeholder="10/01/2023 10:19" fullWidth />
                </Box>
                <Box mt={4}>
                  <Button variant="contained" color="secondary">
                    Place a Bid
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    variant="contained"
                    style={{ color: "#7E563D", background: "#2c2c2c" }}
                    onClick={() => setPlacebid(false)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <IconButton
              className={classes.cancelBtn}
              onClick={() => setPlacebid(false)}
            >
              <IoClose />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PlaceBid;
