// export const baseUrl = "http://192.168.104.69:1990";



export const baseUrl = "https://api.eleglam.co";



let urlU = `${baseUrl}/api/v1/user`;
let urlP = `${baseUrl}/api/v1/product`;



export const apiConfig = {

    signup:`${urlU}/signup`,
    verifyOTPSignUp:`${urlU}/verifyOTPSignUp`,
    getProfile:`${urlU}/getProfile`,
    validatePinCode:`${urlU}/validatePinCode`,
    
    viewOrder:`${urlP}/viewOrder`,
    cancelOrder:`${urlP}/cancelOrder`,
    returnOrder:`${urlP}/returnOrder`,




    editProfile:`${urlU}/editProfile`,

    createPaymentOrder:`${urlP}/createPaymentOrder`,

    verifyPayment:`${urlP}/verifyPayment`,
    orderList:`${urlP}/orderList`,


    
    userProductList:`${urlP}/userProductList`,
    
    userViewProduct:`${urlP}/userViewProduct`,
    
    
    
    userSignupSendEmailOTP:`${baseUrl}/user/userSignupSendEmailOTP`,
    
    // signup:`${baseUrl}/user/signup`,
    // verifyOTPSignUp:`${baseUrl}/user/verifyOTPSignUp`,

    
    userSignup:`${baseUrl}/user/userSignup`,
    getProfileWeb:`${baseUrl}/user/getProfileWeb`,
    // userSignupSendMobileOTP:`${baseUrl}/user/userSignupSendMobileOTP`,
    getAllProductsWithDeals:`${baseUrl}/product/getAllProductsWithDeals`,
    editUserProfileWeb:`${baseUrl}/user/editUserProfileWeb`,
    verifyEmailorMobileOTP:`${baseUrl}/user/verifyEmailorMobileOTP`,
    userLoginSendOTP:`${baseUrl}/user/userLoginSendOTP`,
    verifyLoginOTP:`${baseUrl}/user/verifyLoginOTP`,
    logout:`${baseUrl}/user/logout`,

    ///GUEST///
    fetchProductCategory2:`${baseUrl}/guestFlow/fetchProductCategory`,
    fetchCategoryBasedProducts2:`${baseUrl}/guestFlow/fetchCategoryBasedProducts`,
    fetchProduct2:`${baseUrl}/guestFlow/fetchProduct`,
    getAllProductsWithDeals2:`${baseUrl}/guestFlow/getAllProductsWithDeals`,
    
    ///PRODUCT///
    giveReviewAndRating:`${baseUrl}/product/giveReviewAndRating`,
    getFilteredProducts:`${baseUrl}/product/getFilteredProducts`,
    ProductFavouriteList:`${baseUrl}/product/ProductFavouriteList`,
    fetchProduct:`${baseUrl}/product/fetchProduct`,
    addAndRemoveCart:`${baseUrl}/product/addAndRemoveCart`,
    addAndRemoveToWishlist  :`${baseUrl}/product/addAndRemoveToWishlist`,
    fetchProductCategory:`${baseUrl}/product/fetchProductCategory`,
    fetchCategoryBasedProducts:`${baseUrl}/product/fetchCategoryBasedProducts`,
    getCart: `${baseUrl}/product/getCart`,
    deleteCartProduct: `${baseUrl}/product/deleteCartProduct`,
    fetchAddresses: `${baseUrl}/product/fetchAddresses`,
    addOrUpdateAddress: `${baseUrl}/product/addOrUpdateAddress`,
    deleteAddress: `${baseUrl}/product/deleteAddress`,
};