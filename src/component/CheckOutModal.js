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
  Hidden,
  Grid,
} from "@material-ui/core";
import { IoClose } from "react-icons/io5";
import PlaceBid from "./PlaceBid";

const useStyles = makeStyles((theme) => ({
  checkOutModalBox: {
    padding: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& h4": {
      color: "#7E563D",
      marginBottom: "30px",
    },
    "& h6": {
      "& span": {
        color: "#7E563D",
      },
    },
    "& p": {
      color: "#7E563D",
      marginBottom: "5px",
    },
    "& .checkOutFlex": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    "& button": {
      marginTop: "16px",
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

function CheckOutModal({ checkout, setCheckout }) {
  const classes = useStyles();
  const [placebid, setPlacebid] = useState(false);
  const handleOpenCheckOut = () => {
    setPlacebid(true);
    setCheckout(false);
  };
  return (
    <>
      <Dialog
        open={checkout}
        onClose={() => setCheckout(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogContent className="borderShadowBox">
          <Box className={classes.checkOutModalBox}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <Hidden xsDown>
                  <img width="100%" src="images/checkOutImage.png" />
                </Hidden>
              </Grid>
              <Grid item xs={12} sm={6} className="checkOutFlex">
                <Box>
                  <Typography className="ubuntu" variant="h4">
                    {" "}
                    Checkout
                  </Typography>
                </Box>
                <Box>
                  <Typography className="ubuntu" variant="h6">
                    You are about to purchase{" "}
                    <span> Rock music audio file from </span>
                    NEKO NFT
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant="body2">Name</Typography>
                </Box>
                <Box className="customVariant">
                  <TextField
                    placeholder="Enter your Price..."
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography>ETH</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOpenCheckOut}
                  >
                    Proceed to Payment
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    variant="contained"
                    style={{ color: "#7E563D", background: "#2c2c2c" }}
                    onClick={() => setCheckout(false)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <IconButton
              className={classes.cancelBtn}
              onClick={() => setCheckout(false)}
            >
              <IoClose />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
      <PlaceBid placebid={placebid} setPlacebid={setPlacebid} />
    </>
  );
}

export default CheckOutModal;
