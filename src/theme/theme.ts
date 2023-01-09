import { colors, DefaultColorsPallete } from "./colors";
// import typography from "../component/typography/typography";
import media from "./media";
import {
  DarkColorPallette,
  IColorsPallette,
  // legacyColors as colors,
  shadow,
} from "./colors";

import { IconSizes, IconType } from "../component/static/types/icons";
import { DefaultTheme as IDefaultTheme } from "styled-components";
import { getIconSize } from "./icons";


type IFontInterface = {
  fontWeight?: number | string;
  fontSize?: string | number;
  lineHeight?: number | string;
  fontFamily?: string;
};

type IVariant = {
  bg: string;
  // bgLight: string;
  // bgDark: string;
  color: string;
}

export interface ThemeInterface extends IDefaultTheme {
  colors: {
    primary: IVariant,
    secondary: IVariant,
    error: IVariant,
    warning:IVariant,
    info: IVariant,
    success: IVariant,
  };
  media: typeof media;
  shadow: {depth1: string};
  chart: {
    colors: string[];
    foreColor: string;
    gridBorderColor: string;
    markerColor: string;
    labelColor: string;
    radialBarBackground: string;
    radarStrokeColor: string;
    radarConnectorColor: string;
    polarRingColor: string;
    polarSpokeConnectorColor: string;
  }
  typography: {
    common:IFontInterface;
    h1: IFontInterface;
    h2: IFontInterface;
    h3:IFontInterface;
    h4: IFontInterface;
    h5: IFontInterface;
    h6: IFontInterface;
    display1: IFontInterface;
    display2: IFontInterface;
    body1: IFontInterface,
    body2: IFontInterface,
  };



  getIconSize: Record<IconType, IconSizes>;
}

const createTypography = (): ThemeInterface["typography"] => {
  return {
    common: { fontFamily: "CircularStd, Public Sans" },
    h1: {
      fontSize: 32,
      lineHeight: "48px",
    },
    h2: {
      fontSize: 24,
      lineHeight: "36px"
    },
    h3: {
      fontSize: 20,
      lineHeight: "30px"
    },
    h4: {
      fontSize: 18,
      lineHeight: "28px",
    },
    h5: {
      fontSize: 16,
      lineHeight: "24px",
    },
    h6: {
      fontSize: 14,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px"
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
    },
    display1: {
      fontSize: 48,
      lineHeight: "62px",
    },
    display2: {
      fontSize: 36,
      lineHeight: "48px",
    }
  };
};

const createChartConfig = (): ThemeInterface["chart"] => {
  return {
    colors: [],
    foreColor: "",
    gridBorderColor: "",
    markerColor: "",
    labelColor: "",
    radialBarBackground: "",
    radarStrokeColor: "",
    radarConnectorColor: "",
    polarRingColor: "",
    polarSpokeConnectorColor: "",
  }
}

const typography = createTypography();
const chart = createChartConfig();
export const createTheme = (): ThemeInterface => {
  const typography = createTypography();
  const chart = createChartConfig();
  return {
    colors: {
      primary: {
    

      },
      secondary: {},
      error: {
        bg: colors.error100,
        color: colors.error500,
      },
      warning: {

      },
      info: {
        bg: colors.blue100,
        color: colors.grey900,
      },
      success: {},

    },
    typography,
    chart,
    
    shadows: {
      depth1: shadow,
    },
    getIconSize,
  };
};

const themeWithDarkMode = (darkMode = true): ThemeInterface => ({
  // colors: DarkColorPallette,
  media,
  chart,
  typography,
  shadow: {depth1: shadow},
  getIconSize,
});


 const theme: ThemeInterface = {
  // colors: DefaultColorsPallete,
  media,
  chart,
  typography,
  shadow: {depth1: shadow},
  getIconSize,
};

const DefaultTheme = theme;

export { theme, DefaultTheme, themeWithDarkMode };