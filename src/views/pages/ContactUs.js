// /* eslint-disable jsx-a11y/alt-text */
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   Divider,
//   useMediaQuery,
//   ThemeProvider, createTheme 
// } from "@material-ui/core";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import MailIcon from "@material-ui/icons/Mail";
// import PhoneIcon from "@material-ui/icons/Phone";
// import ReCAPTCHA from 'react-google-recaptcha'

// // ReCAPTCHA_site_Key = 6LeG_c4pAAAAAK__NQbk8W6ATgsRl8nbXg5PzxCP
// // ReCAPTCHA_secrete_Key = 6LeG_c4pAAAAALer8v_XkomNVPXRiSMVcJf2k1RD


// const theme = createTheme();

// const ContactUs = () => {
//   const [open, setOpen] = React.useState(false);
//   const [isEmailFocused, setEmailFocused] = useState(false);
//   const [isEmailFocused2, setEmailFocused2] = useState(false);
//   const [isEmailFocused3, setEmailFocused3] = useState(false);
//   const [isEmailFocused4, setEmailFocused4] = useState(false);
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 

//   const style = {
//     ContactGrid: {
//       border: "solid 1px",
//       objectFit: "cover",
//       border: "2px solid #E7E7E7",
//       height: "150px",
//       padding: "15px",
//       backgroundSize: "cover",
//     },
//     contactMainGrid: {
//       padding: "0 5%",
//       marginTop: "5%",
//     },
//     phoneIcon: {
//       backgroundColor: "#FEF4E8",
//       height: "60px",
//       width: "60px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       borderRadius: "50%",
//       marginBottom: 1,
//     },
//     phoneText: {
//       fontSize: { sm: "18px", md: "24px" }, // Adjust font size based on screen width
//       fontWeight: "700",
//       //   flexWrap: "wrap",
//       color: "#2D2C2C",

//       textAlign: "left",
//       marginBottom: 1,
//       fontFamily: "Playfair Display",
//     },
//     phoneNumber: {
//       fontSize: { sm: "12px", md: "20px" }, // Adjust font size based on screen width
//       fontWeight: "400",
//       //   flexWrap: "wrap",
//       color: "#4F4F4F",
//       textAlign: "left",
//       fontFamily: "Nunito Sans",
//     },
//     mapMainGrid: {
//       padding: "5%",
//     },
//     formHeading: {
//       fontSize: "48px",
//       fontWeight: "700",
//       fontFamily: "Playfair Display",
//       color: "#2D2C2C",
//     },
//     dailogHeading: {
//       fontSize: "30px",
//       fontWeight: "600",
//       fontFamily: "Playfair Display",
//       color: "#080515",
//     },
//     formHeading1: {
//       fontSize: "50px",
//       fontWeight: "600",
//       fontFamily: "Playfair Display",
//       color: "#7E563D",
//     },
//     formHeading2: {
//       position: "absolute",
//       top: "20%",
//       left: "70%",
//       width: "50%",
//       transform: "translate(-50%, -50%)",
//       alignItems: "center",

//       zIndex: 1,
//     },

//     formDetail: {
//       fontSize: "22px",
//       fontWeight: "400",
//       fontFamily: "Nunito Sans",
//       color: "#4F4F4F",
//       margin:"5% 0%"
//     },
//     divider: {
//       height: "5px",
//       width: "95px",
//       marginTop: "4px",
//       backgroundColor: "#7E563D",
//     },
//     formBox: {
//       margin: "20px 10px 0px 10px",
//       paddingRight: "20px",
//       marginBottom: "10px",
//     },
//     formKey: {
//       fontSize: "18px",
//       fontWeight: "600",
//       fontFamily: "Nunito Sans",
//       marginBottom: "5px",
//       color: "#4F4F4F",
//     },
//     imgBox: {
//       width: "auto",
//       height: "400px",
//     },
//     img: {
//       objectFit: "cover",
//       position: "relative",
//     },
//     errorMessage: {
//       color: "red",
//       fontSize: "14px",
//       marginTop: "4px",
//     },
//     btnBox: {
//       marginTop: "40px",
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "center",
//     },
//     btnBox2:{
//       padding: "10px", marginBottom:"15px",
//     },
//     submitBtn: {
//       height: "45px",
//       width: "170px",
//       backgroundColor: "#7E563D",
//       borderRadius: "300px",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       textTransform: "none",
//       fontSize: "15px",
//       fontWeight: "600",
      
//       color: "white",
//       // position: "absolute",
//       "&:hover": {
//         backgroundColor: "#7E563D !important",
//       },
//       "&:active": {
//         backgroundColor: "#7E563D !important",
//       },

//       //   border: ".5px solid #3E3EDE",
//     },
//     submitBtn2: {
//       height: "55px",
//       width: "573px",
//       backgroundColor: "#7E563D",
//       borderRadius: "300px",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       textTransform: "none",
//       fontSize: "15px",
//       fontWeight: "600",
      
//       color: "white",
//       // position: "absolute",
//       "&:hover": {
//         backgroundColor: "#7E563D !important",
//       },
//       "&:active": {
//         backgroundColor: "#7E563D !important",
//       },

//       //   border: ".5px solid #3E3EDE",
//     },
//     dialogContent: {
//       display: "flex",
//       justifyContent: "center",
//       marginTop:"10%"
//     },
//     thankyou: {
//       // padding:"2%",
//       marginBottom:"30px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems:"center"
//     },
//     dailogAction:{
//         display:"flex",
//         justifyContent:"center",
//         padding:"5%"
        
//     },
//     dailogParagraph:{
//         fontSize:"18px",
//         fontFamily:"Nunito Sans",
//         fontWeight:"400",
//         color:"#4F4F4F"
//     },
//     mainBoxDeal: {
//       // backgroundColor:'red !important',
//       margin: "70px",
//       "@media (max-width: 800px)": {
//         margin: "20px",
//       },
//       " & .slick-track":{
//         // backgroundColor:'green !important',
//         display:"flex",
//         columnGap:'1%',
//       }
//     },
//     deal: {
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//       marginBottom:"20px"
//       //   alignItems: "center",
//     },
//     dealHeading: {
//       fontFamily: "Playfair Display",
//       fontSize: "35px",
//       fontWeight: "700",
//       color: "#2D2C2C",
//       "@media (max-width:600px)": {
//         fontSize: "25px",
//       },
//     },
//     dealButton: {
//       border: " .5px solid #7E563D",
//       padding: "10px",
//       height: "40px",
//       width: "120px",
//       borderRadius: "30px",
//       textTransform: "none",
//       color: "#6D6D6D",
//       fontWeight: "400",
//       fontSize: "16px",
//     },
//     dealSlider: {
//       // height: "200px",
//       // maxWidth:"348px",
//       display: "flex",

//       justifyContent: "center",

//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//     },
//     DealImage: {
//       height: "100%",
//       width: "100%",
//       // objectFit: "cover",
//       // padding: "0px 20px",
//     },
//     mainBox: {
//       margin: "15px 0",
//       paddingLeft: "20px",
//     },
//     mainBoxBorder: {
//       borderLeft: "2px solid #7E563D",
//       // paddingLeft: "18px !important",
//     },
//     textOverlay: {
//       fontWeight: "600",
//       fontSize: "50px",
//       fontFamily:"Playfair Display",
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       textAlign: "center",
//       color: "#7E563D",
//       zIndex: 999, // Ensure it's above the image and icons
//     },
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const validationSchema = Yup.object().shape({
//     fullName: Yup.string().required("Full name is required."),
//     email: Yup.string()
//       .email("Please enter a valid email.")
//       .required("Email is required."),
//     phoneNumber: Yup.string()
//       .required("Phone number is required.")
//       .matches(/^\d{6,16}$/, "Phone number must be between 6 and 16 digits."),
//     message: Yup.string().required("Message is required."),
//     ReCAPTCHAer: Yup.boolean().oneOf([true],"please check the capture"),
//   });

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };

//     scrollToTop();
//   }, []);

//   return (
//     <div style={{ overflowX: "hidden" }}>
      
//       <Box style={{ width: "100vw",
//       height: "400px", position: "relative" }}>
//         <img
//           src="/Image/cattleimg.png"
//           height="100%"
//           width="100%"
//           style={{  objectFit: "cover",      }} 
//         />
//          {/* Text overlay */}
//          <Typography  style={{...style.textOverlay, zIndex: 2}}>
//         CONTACT US
//         </Typography>
//       </Box>
//       <Grid container spacing={3} style={style.contactMainGrid}>
//         <Grid item xs={12} sm={12} md={4}>
//           <Box style={style.ContactGrid}>
//             <Box style={style.phoneIcon}>
//               <PhoneIcon
//                 style={{ fontSize: "30px", fontWeight: "700", color: "#7E563D" }}
//               />
//             </Box>
//             <Typography style={style.phoneText}>Phone</Typography>
//             <Typography style={style.phoneNumber}>Toll free number 1800-309-1817,</Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={4}>
//           <Box style={style.ContactGrid}>
//             <Box style={style.phoneIcon}>
//               <MailIcon
//                 style={{ fontSize: "30px", fontWeight: "700", color: "#7E563D" }}
//               />
//             </Box>
//             <Typography style={style.phoneText}>Email</Typography>
//             <Typography style={style.phoneNumber}>www.Eleglam.co</Typography>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sm={12} md={4}>
//           <Box style={style.ContactGrid}>
//             <Box style={style.phoneIcon}>
//               <LocationOnIcon
//                 style={{ fontSize: "30px", fontWeight: "700", color: "#7E563D" }}
//               />
//             </Box>
//             <Typography style={style.phoneText}>Address</Typography>
//             <Typography style={style.phoneNumber}>
//             Phase 8B, Industrial area, Sector 74, SAS Nagar, Mohali 160055
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid container style={style.mapMainGrid} spacing={4}>
//         <Grid item xs={12} sm={12} md={7} lg={7} style={{ height: "900px" }}>
       
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2628887948877!2d76.69217567567563!3d30.711009086681972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef858fa21947%3A0x9b864e4966c5de7a!2sG%20FLIGHT%20MODE!5e0!3m2!1sen!2sin!4v1713453553744!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             // style="border:0;"
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </Grid>

//         <Grid item xs={12} sm={12} md={5}  lg={5} style={{ height: "900px" }}>
//           <Grid
//             style={{
//               backgroundColor: "#FAFAFA",
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             <Box style={{ marginLeft: "40px", paddingTop: "30px" }}>
//               <Typography style={style.formHeading}>Contact Us!</Typography>
//               <Typography style={style.formDetail}>
//                 Please enter the details for contacting us.
//               </Typography>
//               <Divider style={style.divider} />
//               <Box style={style.formBox}>
//                 <Formik
//                   initialValues={{
//                     fullName: "",
//                     email: "",
//                     phoneNumber: "",
//                     message: "",
//                     ReCAPTCHAer:""
//                   }}
//                     validationSchema={validationSchema}
//                   onSubmit={(values, { resetForm }, event) => {
//                     handleClickOpen();
//                     // event.preventDefault();
//                     // submitData(values);
//                     console.log("Form values:", values);
//                     // Reset form after submission
//                     resetForm();
//                   }}
//                 >
//                   {({
//                     touched,
//                     errors,
//                     values,
//                     handleChange,
//                     handleSubmit,
//                   }) => (
//                     <Form onSubmit={handleSubmit}>
//                       {/* <Box
//                         style={{
//                           padding: "10px",
//                           border:
//                             touched.fullName && errors.fullName
//                               ? "1px solid red"
//                               : "none",
//                         }}
//                       > */}
//                        <Box
//                          style={{ padding: "10px",marginBottom:"15px", ...(isEmailFocused ? style.mainBoxBorder : style.mainBoxFocused) }}

//                           onBlur={() => setEmailFocused(false)} // Add onBlur event handler
//                         >
//                       <Typography style={style.formKey}>Full Name</Typography>
//                       <div className="form-group">
//                         <Field
//                           type="text"
//                           name="fullName"
//                           autoComplete="off"
//                           placeholder="Enter full name"
//                           value={values.fullName}
//                           onChange={handleChange}
//                           className={
//                             touched.email && errors.email ? "error" : ""
//                           }
//                           onFocus={() => setEmailFocused(true)}
//                           style={{
//                             backgroundColor: "#F2F2F2",

//                             borderRadius: "30px",
//                             height: "45px",
//                             width: "90%",
//                             border: "none", // Set the border to none initially
//                             paddingLeft: "15px",
//                             // Add other styles as needed
//                           }}
//                         />
//                         <ErrorMessage
//                           name="fullName"
//                           component="div"
//                           className="error-message"
//                           style={{ color: "red" }}
//                         />
//                       </div>
//                       </Box>
//                       {/* </Box> */}

//                       <Box
//                          style={{ padding: "10px", marginBottom:"15px",...(isEmailFocused2 ? style.mainBoxBorder : style.mainBoxFocused) }}

//                           onBlur={() => setEmailFocused2(false)} // Add onBlur event handler
//                         >
//                         <Typography style={style.formKey}>Email</Typography>
//                         <div className="form-group">
//                           <Field
//                             type="text"
//                             name="email"
//                             autocomplete="off"
//                             placeholder="Enter email address"
//                             value={values.email}
//                             onChange={handleChange}
//                             className={
//                               touched.email && errors.email ? "error" : ""
//                             }
//                             onFocus={() => setEmailFocused2(true)}
//                             style={{
//                               backgroundColor: "#F2F2F2",

//                               borderRadius: "30px",
//                               height: "45px",
//                               width: "90%",
//                               border: "none",
//                               paddingLeft: "15px",
//                               // Add other styles as needed
//                             }}
//                           />
//                           <ErrorMessage
//                             name="email"
//                             component="div"
//                             className="error-message"
//                             style={{ color: "red" }}
//                           />
//                         </div>
//                       </Box>

//                       <Box
//                          style={{ padding: "10px",marginBottom:"15px", ...(isEmailFocused3 ? style.mainBoxBorder : style.mainBoxFocused) }}

//                           onBlur={() => setEmailFocused3(false)} // Add onBlur event handler
//                         >
//                         <Typography style={style.formKey}>Phone Number</Typography>
//                         <div className="form-group">
//                           <Field
//                             type="number"
//                             name="phoneNumber"
                            
//                             autocomplete="off"
//                             placeholder="Enter phone number"
//                             value={values.phoneNumber}
//                             onChange={handleChange}
//                             className={
//                               touched.phoneNumber && errors.phoneNumber
//                                 ? "error"
//                                 : ""
//                             }
//                             onFocus={() => setEmailFocused3(true)}
//                             style={{
//                               backgroundColor: "#F2F2F2",

//                               borderRadius: "30px",
//                               height: "45px",
//                               width: "90%",
//                               border: "none",
//                               paddingLeft: "15px",
//                               // Add other styles as needed
//                             }}
//                           />
//                           <ErrorMessage
//                             name="phoneNumber"
//                             component="div"
//                             className="error-message"
//                             style={{ color: "red" }}
//                           />
//                         </div>
//                       </Box>

//                       <Box
//                          style={{ padding: "10px", marginBottom:"15px",...(isEmailFocused4 ? style.mainBoxBorder : style.mainBoxFocused) }}

//                           onBlur={() => setEmailFocused4(false)} // Add onBlur event handler
//                         >
//                         <Typography style={style.formKey}>Message</Typography>
//                         <div className="form-group">
//                           <textarea
//                             type="text"
//                             name="message"
//                             placeholder="Enter message"
//                             value={values.message}
//                             onChange={handleChange}
//                             className={
//                               touched.message && errors.message ? "error" : ""
//                             }
//                             onFocus={() => setEmailFocused4(true)}
//                             style={{
//                               backgroundColor: "#F2F2F2",

//                               borderRadius: "30px",
//                               height: "120px",
//                               width: "90%",
//                               border: "none",
//                               paddingLeft: "15px",
//                               paddingTop: "10px",
//                               // Add other styles as needed
//                             }}
//                             multiline
//                           />
//                           <ErrorMessage
//                             name="message"
//                             component="div"
//                             className="error-message"
//                             style={{ color: "red" }}
//                           />
//                         </div>
//                       </Box>

//                       {/* <Box
//                          style={{ padding: "10px", marginBottom:"15px", }}

//                           onBlur={() => setEmailFocused4(false)} // Add onBlur event handler
//                         >
                       
//                         <div className="form-group">
//                         <ReCAPTCHA name="ReCAPTCHAer" sitekey={`6Lfu_s4pAAAAAPVpUJ7qc1vAy45NOJv4bSvMAuow`} />
//                           <ErrorMessage
//                             name="ReCAPTCHAer"
//                             component="div"
//                             className="error-message"
//                             style={{ color: "red" }}
//                           />
//                         </div>
//                       </Box> */}
//                       <Box
//   style={{
//     padding: "10px",
//     marginBottom: "15px",
//     // width: "100%", // Set width to 100% initially
//     maxWidth: "250px", // Set a maximum width to prevent overflowing on small devices
//     // margin: "0 auto", // Center the box horizontally
//   }}
//   onBlur={() => setEmailFocused4(false)} // Add onBlur event handler
// >
//   <div className="form-group">
//     <ReCAPTCHA name="ReCAPTCHAer" sitekey={`6Lfu_s4pAAAAAPVpUJ7qc1vAy45NOJv4bSvMAuow`} />
//     <ErrorMessage
//       name="ReCAPTCHAer"
//       component="div"
//       className="error-message"
//       style={{ color: "red" }}
//     />
//   </div>
// </Box>


//                       {/* <ReCAPTCHA sitekey={`6LeG_c4pAAAAAK__NQbk8W6ATgsRl8nbXg5PzxCP`} /> */}
//                       <Box
//                       style={style.btnBox}
                         
//                           onBlur={() => setEmailFocused4(false)} // Add onBlur event handler
//                         >
                       
//                         <div className="form-group">
//                         <Button style={style.submitBtn} type="submit">
//                           Send Message
//                         </Button>
//                         </div>
//                       </Box>

//                       {/* <Box style={style.btnBox}>
//                       <div className="form-group">
//                         <Button style={style.submitBtn} type="submit">
//                           Send Message
//                         </Button>
//                         </div>
//                       </Box> */}
//                     </Form>
//                   )}
//                 </Formik>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Dialog
//     fullScreen={fullScreen}
//     open={open}
//     onClose={handleClose}
//     aria-labelledby="responsive-dialog-title"
//     PaperProps={{
//         style: {
//             maxWidth: "100%",
//             margin: "auto",
//             overflow: "hidden"
//         }
//     }}
// >
//         <DialogContent>
//           <DialogContentText style={style.dialogContent}>
//             <img src="Image/namaste.png" alt="namaste" height={100} />
//           </DialogContentText>

//           <Box style={style.thankyou}>
//             <Typography style={style.dailogHeading}>Thank You!</Typography>
//            {/* <Typography style={style.dailogParagraph}> Your Submission has been sent.</Typography> */}
//           </Box>
//           <Box style={style.thankyou}>
//             {/* <Typography style={style.dailogHeading}>Thank You!</Typography> */}
//            <Typography style={style.dailogParagraph}> Your Submission has been sent.</Typography>
//           </Box>

//           {/* <Box style={style.thankyou}>
           
//             <Button style={style.submitBtn} >
//         Continue
//                         </Button>
//           </Box> */}


//         </DialogContent>
//         <DialogActions style={style.dailogAction}>
//         <Button style={style.submitBtn2} onClick={handleClose}>
//         Continue
//                         </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default ContactUs;
