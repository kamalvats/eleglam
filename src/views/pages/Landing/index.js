import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";

import Explore from "./Explore";
import Slidder from "./Slidder";
import TeaKind from "./TeaKind";
import Crousel from "./Crousel";

function Home(props) {
  return (
    <Page title="ELEGLAM">
      <Box className="spacingLanding-p">
        <Slidder />
      </Box>
      <Box>
        {/* <TeaKind/> */}
        <Crousel />
      </Box>
      {/* <Box style={{margin:"5%"}}>
        <Explore />
        
      </Box> */}
    </Page>
  );
}

export default Home;
