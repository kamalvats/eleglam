import { Box, Typography, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Page from "src/component/Page";
export default function NotFound(props) {
  const history = useHistory();
  return (
    <Page title="page not found!">
      <Box pt={20} textAlign="center">
        <Typography variant="h1" align="center" style={{marginBottom:"20px"}} >
          Oops!
        </Typography>
        <Typography variant="h1" align="center" paragraph>
          404 Not Found
        </Typography>
        <Typography variant="h4" align="center" paragraph>
          Sorry, an error has occured, Requested page not found!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
          style={{Width:"200px"}}
        >
          Go to Home Page
        </Button>
      </Box>
    </Page>
  );
}
