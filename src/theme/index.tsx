import * as CSS from "csstype";
import { PartialTheme, Theme } from "@fluentui/react-components";
import { projectSetup } from "src/data";
import * as Themes from "./variants";
import { CUSTOM_BUTTON_PROPS } from "src/components";

export type THEME = keyof typeof themes;

export enum THEME_NAMES {
  PureLightTheme = "pure-light-theme",
}

const themes = {
  [THEME_NAMES.PureLightTheme]: Themes.PureLightTheme,
};

const themesCustomizations = {
  [THEME_NAMES.PureLightTheme]: Themes.PureLightThemeCustomization,
};

export type CUSTOMIZED_THEME = PartialTheme & CUSTOM_THEME;

// styled components CSS type
export type CSSProperties = CSS.Properties<string | number>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | string | number | undefined;
}

export type STYLES = CSSObject;
// ---------------------------------- //

export interface CUSTOMIZED_THEME_COLORS {
  alpha: {
    white: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
    trueWhite: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
    black: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
  };
  themeColors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    black: string;
    default: string;
    white: string;
    link: string;
    google?: string;
    facebook?: string;
    twitter?: string;
    googleHovered?: string;
    facebookHovered?: string;
    twitterHovered?: string;
    microsoft?: string;
    microsoftHovered?: string;
  };
}

export type CUSTOM_BUTTON_STYLE_BASED_ON_SIZE = Record<
  CUSTOM_BUTTON_PROPS["size"] | "noSize",
  STYLES
>; // https://bobbyhadz.com/blog/typescript-index-signature-parameter-cannot-be-union-type -- reference

export interface CUSTOM_THEME {
  general: {
    bodyBg: string;
    fontFamily?: string;
  };
  colors: CUSTOMIZED_THEME_COLORS;
  sidebar: {
    background: React.CSSProperties["color"];
    boxShadow: React.CSSProperties["color"];
    width: string;
    dividerBg: React.CSSProperties["color"];
  };
  header: {
    height: string;
    background: React.CSSProperties["color"];
    boxShadow: React.CSSProperties["color"];
    textColor: React.CSSProperties["color"];
  };
  components: {
    h1: STYLES;
    h2: STYLES;
    h3: STYLES;
    h4: STYLES;
    h5: STYLES;
    h6: STYLES;
    p: STYLES;
    pre: STYLES;
    span: STYLES;
    link: STYLES;
    label: STYLES;
    Input?: STYLES;
    TextareaInput?: STYLES;
    Select?: STYLES;
    TransparentButton?: STYLES;
    OutlineButton?: STYLES;
    PrimaryButton?: STYLES;
    SecondaryButton?: STYLES;
    SubtleButton?: STYLES;
    LinkButton?: STYLES;
    GoogleButton?: STYLES;
    MicrosoftButton?: STYLES;
    FacebookButton?: STYLES;
    TwitterButton?: STYLES;
    LinkedinButton?: STYLES;
    InstagramButton?: STYLES;
    customButtonStyleBasedOnSize?: CUSTOM_BUTTON_STYLE_BASED_ON_SIZE;
    [ComponentName: string]: STYLES;
  };
}

export const getThemeName = () => {
  try {
    return (window.localStorage.getItem("theme") ||
      projectSetup.defaultTheme) as THEME;
  } catch {
    return projectSetup.defaultTheme;
  }
};

export const getTheme = (): PartialTheme | Theme => {
  try {
    // const { theme = getThemeName() } = store.getState(); // TODO: get the theme from store
    const theme = "pure-light-theme";
    return themes[theme];
  } catch {
    return themes[getThemeName()];
  }
};

export const getCustomizedTheme = (): CUSTOMIZED_THEME => {
  // const { theme = getThemeName() } = store.getState(); // TODO: get the theme from store
  const theme = "pure-light-theme";
  return { ...themesCustomizations[theme], ...themes[theme] };
};

export function themeCreator(theme: keyof typeof themes): PartialTheme | Theme {
  return themes[theme];
}
export const customizedTheme = getCustomizedTheme();
export const theme = getTheme();

// export other folders and files from here
export * from "./icons";
export * from "./viewport";
export * from "./variants";
