import ExploreCard from "src/component/ExploreCard";
import {
  Box,
  Grid,
  makeStyles,
  Container,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect , useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import Menu from "@material-ui/core/Menu";
import { CategoryButtons, exploreData, RankingButtons } from "src/constants";
import FilterListIcon from "@material-ui/icons/FilterList";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { toast } from "react-hot-toast";


// ];

export default function Myprofilecard() {
  const styles = {
    deal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:"2%"
        //   alignItems: "center",
      },
      dealHeading: {
        fontFamily: "Playfair Display",
        fontSize: "35px",
        fontWeight: "700",
        color: "#ecdace",
        marginBottom: "20px",
        
        "@media (max-width:600px)": {
          fontSize: "25px",
        },
      },
      productButton:{
        border: " .5px solid #7E563D",
        padding: "10px",
        height: "40px",
        width: "100px",
        borderRadius: "30px",
        textTransform: "none",
        color: "#6D6D6D",
        fontWeight: "400",
        fontSize: "16px",
      },}

  const [productDetails ,setProductDetails] = useState([]);

    const productAPi =async()=>{
      const token = await window.sessionStorage.getItem("ELEGLAMToken")
        try {
          const res = await axios({
            method: "GET",
            url: token ? apiConfig.fetchProduct : apiConfig.fetchProduct2,
            headers: {token : token},
          });
          
          if (res?.data?.responseCode === 200) {
            console.log(res?.data);
            console.log(res?.data?.responseMessage || "Data fetch successfully.")
            setProductDetails(res?.data?.result?.docs)
    
          } else {
            console.log("Failed to Fetch Products");
          }
        } catch (error) {
          console.log(
            error?.response?.data?.responseMessage ||
              "Something went wrong. Please try again."
          );
        }
      }
      useEffect(() => {
        productAPi();
      }, [setProductDetails]); 

  return (
    <>
       {/* <Box style={styles.deal}> */}
          <Typography style={styles.dealHeading}> Explore Products</Typography>
          {/* <Button style={styles.productButton}> </Button> */}
        {/* </Box> */}
      <ExploreCard />
    </>
  );
}
