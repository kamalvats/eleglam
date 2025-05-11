import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiPagination: {
      ul: {
        margin: "0",
        display: "flex",
        padding: "0",
        listStyle: "none",
        alignItems: "center",
        flexWrap: "inherit",
      },
    },
    PrivateValueLabel: {
      circle: {
        backgroundColor: "#e71833",
      },
    },
    MuiMenu: {
      list: {
        outline: "0",
        background: "black",
        color: "#7E563Db0",
        fontSize: "13px",
        fontWeight: "300",
        fontFamily: "'Sora' !important",
      },
    },
    // MuiCheckbox: {
    //   root: {
    //     color: "rgba(255, 255, 255, 0.1)",
    //   },
    //   "&.Mui-checked": { // corrected class name
    //     color: "blue !important"
    //   }
    // },

    MuiDialog: {
      paper: {
        backgroundColor: "#7E563D",
        borderRadius: "20px",
        padding: "2%",
      },
    },
    MuiDialogContent: {
      root: {
        flex: "1 1 auto",
        padding: "5px",
        paddingTop: "5px !important",
        borderRadius: "20px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
      containedPrimary: {
        // color: "#7E563D",
        backgroundColor: "#7E563D",
        border: "none",
        width: "90%",
        margin: "0 5%",
        height: "47px",
        fontSize: "15.12px",
        fontWeight: "400",
        fontFamily: "Nunito Sans",
        borderRadius: "50px",
        "&:hover": {
          color: "#fff !important",
          border: "none",
          // backgroundOrigin: "border-box",
          backgroundColor: "#7E563D !important",
        },
        "@media(max-width: 600px)": {
          fontSize: "10px !important",
        },
      },
      containedPrimary2: {
        color: "#7E563D",
        backgroundColor: "#7E563D",
        border: "none",
        width: "200px",
        height: "47px",
        fontSize: "15px",
        fontWeight: "400",
        fontFamily: "Nunito Sans",
        borderRadius: "50px",
        "&:hover": {
          color: "#7E563D !important",
          border: "none",
          // backgroundOrigin: "border-box",
          backgroundColor: "#7E563D !important",
        },
      },
      containedSecondary: {
        fontSize: "16px",
        fontFamily: "Poppins",
        backgroundColor: "#7E563D",
        border: "0px solid #7E563D",
        // whiteSpace: "pre",
        color: "#7E563D !important",
        fontWeight: 500,
        padding: "7px 20px",
        "&:hover": {
          color: "#7E563D !important",
          border: "1px solid #7E563D",
          // backgroundOrigin: "border-box",
          backgroundColor: "#7E563D !important",
        },
      },
      contained: {
        fontFamily: "' Nunito Sans'",
        borderRadius: "10px",
        color: "#02020F",
        fontWeight: 600,
        padding: "7px 31px",
      },
      outlined: {
        fontFamily: "'Ubuntu'",
        borderRadius: "10px",
        color: "#7E563D !important",
        backgroundColor: "#000",
        border: "1px solid #E7DDCE",
        fontWeight: 600,
        padding: "6px 25px",
      },
      outlinedSizeSmall: {
        padding: "8px 40px",
      },
      outlinedPrimary: {
        background: "linear-gradient(136.96deg, #FF1735 7.24%, #A81B2D 87.99%)",
        color: "#7E563D",
        fontWeight: "400",
        padding: "13px 30px",
      },

      containedSizeLarge: {
        width: "100%",
      },

      containedSizeMedium: {
        minWidth: "216px !important",
        width: "auto",
      },
    },
    MuiCollapse: {
      wrapperInner: {
        background: "transparent",
        paddingTop: "15px",
      },
    },

    typography: {
      root: {
        color: "#7E563D",
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: "10px",
      },
      notchedOutline: {
        borderColor: "#000",
      },
    },
    MuiFilledInput: {
      root: {
        position: "relative",
        transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        backgroundColor: "#2c2c2c",
        borderRadius: "10px !important",
      },
      input: {
        backgroundColor: "#2C2C2C",
        borderRadius: "10px",
        padding: "14px 10px",
        color: "#E7DDCE",

        "&:-webkit-autofill": {
          borderRadius: "10px !important",
          WebkitBackgroundClip: "text !important",
          WebkitTextFillColor: "#7E563D !important",
          WebkitBoxShadow: "0 0 0 1000px #2C2C2C inset",
          marginRight: "10px",
        },
      },
      inputMultiline: {
        padding: "14px 10px",
      },

      multiline: {
        padding: "0px",
      },
      underline: {
        "&:hover": {
          "&::before": {
            borderBottom: "none",
          },
        },
        "&::before": {
          borderBottom: "none",
        },
        "&::after": {
          borderBottom: "none",
        },
      },
    },

    MuiTableCell: {
      root: {
        fontWeight: "400",
        fontFamily: "Arimo",
      },
      head: {
        padding: "15px 5px",
        whiteSpace: "pre",
        color: "#E7DDCE",
      },
      body: {
        color: "#E7DDCE",
        borderBottom: "none",
        whiteSpace: "pre",
        padding: "4px",
      },
    },
    // MuiAccordionDetails: {
    //   root: {
    //     background: "#7E563D",
    //   },
    // },
    // MuiAccordionSummary: {
    //   root: {
    //     background: "rgb(83 80 74)",
    //     fontFamily: "Nico Moji",
    //     padding: "6px 16px",
    //     background: "rgba(0, 0, 0, 0.4)",
    //     backdropFilter: "blur(30px)",
    //     borderRadius: "10px",
    //     "& .Mui-expanded": {
    //       minHeight: "0px !important",
    //     },
    //   },
    // },
    // MuiPaginationItem: {
    //   root: {
    //     color: "#7E563D",
    //   },
    // },

    // MuiAccordion: {
    //   root: {
    //     color: "#7E563D",
    //   },
    // },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#FBFBFD",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#898989",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    secondary: {
      main: "#A81B2D",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#7E563D1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#52565c",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
