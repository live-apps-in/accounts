import { PartialTheme, teamsLightTheme } from "@fluentui/react-components";
import {
  CUSTOM_THEME,
  CUSTOMIZED_THEME_COLORS,
  CUSTOM_BUTTON_STYLE_BASED_ON_SIZE,
} from "src/theme";
import { mediaQuery } from "../viewport";

const themeColors = {
  primary: "#de0a1e",
  primaryHovered: "#a82330",
  secondary: "#353535",
  secondaryHovered: "#242222",
  success: "#3DAB54",
  successHovered: "#317a40",
  warning: "#de9426",
  warningHovered: "#317a40",
  error: "#FF1943",
  errorHovered: "#bf1f3c",
  info: "#33C2FF",
  infoHovered: "#327c9c",
  black: "#353535",
  default: "#353535",
  white: "#ffffff",
  link: "#3392ff",
  google: "#F5F5F5",
  googleHovered: "#e0dede",
  facebook: "#3B5998",
  facebookHovered: "#385185",
  twitter: "#1DA1F2",
  twitterHovered: "#226d9c",
  instagram: "#833AB4",
  instagramHovered: "#68368a",
  linkedin: "#0077B5",
  linkedinHovered: "#285e7a",
  microsoft: "#FFFFFF",
  microsoftHovered: "#F5F5F5",
};

const colors: CUSTOMIZED_THEME_COLORS = {
  alpha: {
    white: {
      5: "#ffffff",
      10: "#ffffff",
      30: "#ffffff",
      50: "#ffffff",
      70: "#ffffff",
      100: themeColors.white,
    },
    trueWhite: {
      5: "#ffffff",
      10: "#ffffff",
      30: "#ffffff",
      50: "#ffffff",
      70: "#ffffff",
      100: themeColors.white,
    },
    black: {
      5: "#263757",
      10: "#384765",
      30: "#647087",
      50: "#9199aa",
      70: "#bdc2cc",
      100: themeColors.black,
    },
  },
  themeColors,
};

const commonButtonStyles: any = {
  borderRadius: "4px",
  fontFamily: "Gilroy",
  width: "fit-content",
};

export const customButtonStyleBasedOnSize: CUSTOM_BUTTON_STYLE_BASED_ON_SIZE = {
  small: {
    padding: "10px 15px",
    margin: "5px 2px",
  },
  medium: {
    padding: "20px 25px",
    margin: "10px 5px",
  },
  large: {
    padding: "25px 30px",
    margin: "15px 10px",
  },
  noSize: {
    padding: 0,
    margin: 0,
  },
};

export const PureLightTheme: PartialTheme = {
  ...teamsLightTheme,
};

export const PureLightThemeCustomization: CUSTOM_THEME = {
  general: {
    bodyBg: "#FFFFFF",
    // fontFamily: "'Montserrat', sans-serif",
  },
  colors,
  sidebar: {
    width: "300px",
    background: "#FFFFFF",
    dividerBg: "#f2f5f9",
    boxShadow:
      "2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)",
  },
  header: {
    background: "#F6F8FA",
    boxShadow: "none",
    textColor: "black",
    height: "88.5px",
  },
  components: {
    // button
    //// property based styles
    customButtonStyleBasedOnSize,
    // button variant
    TransparentButton: { ...commonButtonStyles, color: themeColors.black },
    OutlineButton: { ...commonButtonStyles },
    PrimaryButton: {
      ...commonButtonStyles,
      color: "white !important",
      backgroundColor: themeColors.primary,
      border: "none",
      ":hover": {
        backgroundColor: `${themeColors.primaryHovered} !important`,
        border: "none",
      },
      ":active": {
        backgroundColor: `${themeColors.primaryHovered} !important`,
        border: "none",
      },
    },
    SecondaryButton: {
      ...commonButtonStyles,
      color: "white !important",
      border: "none",
      backgroundColor: `${themeColors.secondary} !important`,
      ":hover": {
        backgroundColor: `${themeColors.secondaryHovered} !important`,
        color: "white !important",
        border: "none",
      },
      ":active": {
        color: "white !important",
        backgroundColor: `${themeColors.secondaryHovered} !important`,
        border: "none",
      },
    },
    SubtleButton: {
      ...commonButtonStyles,
      color: "white !important",
      border: "none",
      backgroundColor: `${themeColors.success} !important`,
      ":hover": {
        color: "white !important",
        backgroundColor: `${themeColors.successHovered} !important`,
        border: "none",
      },
      ":active": {
        color: "white !important",
        backgroundColor: `${themeColors.successHovered} !important`,
        border: "none",
      },
    },
    LinkButton: {
      padding: 0,
      textAlign: "left",
      fontWeight: "normal",
      color: themeColors.link,
      ":hover": {
        textDecoration: "underline",
        background: "none",
      },
    },
    GoogleButton: {
      backgroundColor: themeColors.google,
      ":hover": { backgroundColor: `${themeColors.googleHovered} !important` },
      ":active": { backgroundColor: `${themeColors.googleHovered} !important` },
    },
    MicrosoftButton: {
      backgroundColor: themeColors.microsoft,
      ":hover": {
        backgroundColor: `${themeColors.microsoftHovered} !important`,
      },
      ":active": {
        backgroundColor: `${themeColors.microsoftHovered} !important`,
      },
    },
    FacebookButton: {
      backgroundColor: themeColors.facebook,
      ":hover": {
        backgroundColor: `${themeColors.facebookHovered} !important`,
      },
      ":active": {
        backgroundColor: `${themeColors.facebookHovered} !important`,
      },
    },
    TwitterButton: {
      backgroundColor: themeColors.twitter,
      ":hover": { backgroundColor: `${themeColors.twitterHovered} !important` },
      ":active": {
        backgroundColor: `${themeColors.twitterHovered} !important`,
      },
    },
    LinkedinButton: {
      backgroundColor: themeColors.linkedin,
      ":hover": {
        backgroundColor: `${themeColors.linkedinHovered} !important`,
      },
      ":active": {
        backgroundColor: `${themeColors.linkedinHovered} !important`,
      },
    },
    InstagramButton: {
      backgroundColor: themeColors.instagram,
      ":hover": {
        backgroundColor: `${themeColors.instagramHovered} !important`,
      },
      ":active": {
        backgroundColor: `${themeColors.instagramHovered} !important`,
      },
    },

    // typography
    h1: {
      fontFamily: "Gilroy",
      fontWeight: 700,
      fontSize: "35px",
      margin: "4px 2px",
      lineHeight: "40px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "5px 3px",
      },
    },
    h2: {
      fontFamily: "Gilroy",
      fontWeight: 700,
      fontSize: "30px",
      margin: "4px 2px",
      lineHeight: "38px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "5px 3px",
      },
    },
    h3: {
      fontFamily: "Gilroy",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: 1,
      color: colors.alpha.black[100],
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    h4: {
      fontFamily: "Gilroy",
      fontWeight: 500,
      fontSize: "20px",
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    h5: {
      fontFamily: "Gilroy",
      fontWeight: 500,
      fontSize: "17px",
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    h6: {
      fontFamily: "Gilroy",
      fontSize: "15px",
      fontWeight: 500,
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    p: {
      fontFamily: "Gilroy",
      fontWeight: 500,
      fontSize: "14px",
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    pre: {
      fontFamily: "Gilroy",
      fontWeight: 300,
      fontSize: "15px",
      color: colors.alpha.black[70],
    },
    span: {
      fontFamily: "Gilroy",
      fontSize: "14px",
      color: colors.alpha.black[70],
    },
    label: {
      fontFamily: "Gilroy",
      fontWeight: 500,
      margin: "5px 0",
    },
    link: {
      textDecoration: "none",
    },

    // Form components
    Input: {
      width: "100%",
      border: "1px solid #CED4DA",
      borderRadius: 4,
      transition: "border-color 0.1s ease",
      ":focus-within, :hover": {
        borderColor: "#939596 !important",
        borderBottom: "1px solid #939596 !important",
      },
      ":after": {
        display: "none !important",
      },
      "> input::placeholder": {
        color: "#969696",
      },
    },
    TextareaInput: {
      width: "100%",
      border: "1px solid #CED4DA",
      borderRadius: 4,
      transition: "border-color 0.1s ease",
      ":focus-within, :hover": {
        borderColor: "#939596 !important",
        borderBottom: "1px solid #939596 !important",
      },
      ":after": {
        display: "none !important",
      },
      "> textarea::placeholder": {
        color: "#969696",
      },
    },
    Select: {
      width: "100%",
      border: "1px solid #CED4DA",
      borderRadius: 4,
      transition: "border-color 0.1s ease",
      select: {
        border: "none",
      },
      options: {
        maxWidth: "100%",
      },
      "options, select": {
        textOverflow: "elipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
      ":focus-within, :hover": {
        borderColor: "#939596 !important",
        borderBottom: "1px solid #939596 !important",
      },
      ":after": {
        display: "none !important",
      },
      "> select > option:first-child": {
        color: "#969696",
      },
    },

    // Other
    Card: {
      padding: "20px",
      overflow: "visible",
      boxSizing: "border-box",
    },
  },
};
