import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  // {
  //   exact: true,
  //   path: "/home",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Home")),
  // },

  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Landing")),
  },
  // {
  //   exact: true,
  //   path: "/collection",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Collection")),
  //   // guard:true
  // },

  // {
  //   exact: true,
  //   path: "/productDetail-page",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/ProductDetailPage")),
  //   // guard:true
  // },
  {
    exact: true,
    path: "/product-page",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/ProductPage")),
    // guard:true
  },
  {
    exact: true,
    path: "/about-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/AboutUs")),
    // guard:true
  },
  // {
  //   exact: true,
  //   path: "/Contact-us",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/ContactUs")),
  //   // guard:true
  // },
  {
    exact: true,
    path: "/terms-conditions",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/TermsAndPrivacy/TermsConditions")
    ),
    // guard:true
  },
  {
    exact: true,
    path: "/sign-in",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/SignUp")),
    // guard:true
  },
  {
    exact: true,
    path: "/order-detail-page",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Profile/OrderDetail")),
    guard:true
  },
  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/TermsAndPrivacy/PrivacyPolicy")
    ),
    // guard:true
  },
  // {
  //   exact: true,
  //   path: "/faq",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Home/FAQ")),
  // },

  {
    exact: true,
    path: "/faq",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/TermsAndPrivacy/FaQ")),
    // guard:true
  },
  {
    exact: true,
    path: "/return-policy",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/TermsAndPrivacy/Refund policy")
    ),
    // guard:true
  },
  {
    exact: true,
    path: "/shipping-policy",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/TermsAndPrivacy/Shipping")
    ),
    // guard:true
  },
  // {
  //   exact: true,
  //   path: "/product-listing",
  //   layout: HomeLayout,
  //   component: lazy(() =>
  //     import("src/views/pages/Product Listing/ProductListing")
  //   ),
  //   // guard:true
  // },
  {
    exact: true,
    path: "/my-cart",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/cart/MyCart")),
    // guard:true
  },
  // {
  //   exact: true,
  //   path: "/product-wishlist",
  //   layout: HomeLayout,
  //   component: lazy(() =>
  //     import("src/views/pages/wishlist_page/Wishlist")
  //   ),
  //   // guard:true
  // },

  // {
  //   exact: true,
  //   path: "/cards",
  //   layout: HomeLayout,
  //   component: lazy(() =>
  //     import("src/component/Card")
  //   ),
  //   // guard:true
  // },
  

  //profile
  // {
  //   exact: true,
  //   path: "/profile",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Profile_page/Profile")),
  //   // guard:true
  // },
  // {
  //   exact: true,
  //   path: "/editprofile",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Profile_page/EditProfile")),
  //   // guard:true
  // },

  {
    exact: true,
    path: "/myorder",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Myorder")),
    // guard:true
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  // {
  //   exact: true,
  //   path: "/lets-connect",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/ContactUs/LetsConnect")),
  // },
  // {
  //   exact: true,
  //   path: "/create-nft",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/CreateNFT/Create")),
  // },
  // {
  //   exact: true,
  //   path: "/Experience",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Experience")),
  // },
  {
    component: () => <Redirect to="/404" />,
  },
];
