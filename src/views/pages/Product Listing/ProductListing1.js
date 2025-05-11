import React from "react";
import { Grid } from "@material-ui/core";

const ProductListing = () => {
  return (
    <Grid container spacing={2}>
      {/* First box with 4 columns for xs and sm screens, and 3 columns for md screens */}
      <Grid item xs={12} sm={6} md={4} style={{background:"red", height:"50vh"}}>
        {/* Your content for the first box */}
      </Grid>

      {/* Second box with 8 columns for xs and sm screens, and 9 columns for md screens */}
      <Grid item xs={12} sm={6} md={8}>
        {/* Your content for the second box */}
      </Grid>
    </Grid>
  );
};

export default ProductListing;
