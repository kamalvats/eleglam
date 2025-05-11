import React, { useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  Grid,
  Typography,
} from "@mui/material";

const ViewProfile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
      >
        <Grid container>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Box sx={{ borderRadius: "30px", padding: "8%" }}>
              <img
                src="Image/AcountProfile.png"
                alt="Img"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box sx={{ padding: "20% 20%" }}>
              <Typography sx={{ fontFamily: "Playfair Display", fontWeight: "500", fontSize: "24px" }}>Your Account</Typography>
              <Typography sx={{ fontFamily: "Nunito Sans", fontWeight: "500", fontSize: "18px", marginTop: "10px", color: "#4F4F4F" }}>My Profile</Typography>
              <Typography sx={{ fontFamily: "Nunito Sans", fontWeight: "500", fontSize: "18px", marginTop: "10px", color: "#4F4F4F" }}>My Wishlist</Typography>
              <Typography sx={{ fontFamily: "Nunito Sans", fontWeight: "500", fontSize: "18px", marginTop: "10px", color: "#4F4F4F" }}>My Orders</Typography>
              <Typography sx={{ fontFamily: "Nunito Sans", fontWeight: "500", fontSize: "18px", marginTop: "10px", color: "#4F4F4F" }}>Change Password</Typography>
              <Typography sx={{ fontFamily: "Nunito Sans", fontWeight: "500", fontSize: "18px", marginTop: "10px", color: "#4F4F4F" }}>Logout</Typography>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default ViewProfile;
