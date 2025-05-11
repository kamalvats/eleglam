import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  textFieldStyle: {
    background: "#00000008",
    borderRadius: "30px",
    border: "1px solid #D8D7D7",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: "0px",
      },
    },
  },
  iconStyle: {
    color: "#7E563D",
    border: "2px solid #7E563D",
    borderRadius: "50%",
    padding: "2px",
  },
};

const MyOrders = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box>
                <TextField
                  fullWidth
                  sx={styles.textFieldStyle}
                  placeholder="Search by product name...."
                  // InputProps={{
                  //   endAdornment: <SearchIcon sx={styles.iconStyle} />,
                  // }}
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <TextField
                  fullWidth
                  //   type="date"
                  sx={styles.textFieldStyle}
                  placeholder="Select Date"
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MyOrders;
