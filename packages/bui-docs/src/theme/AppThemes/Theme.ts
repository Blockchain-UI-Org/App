import { IAppThemes, ITheme } from "./type";

const LightTheme: ITheme = {
  primary: {
    background: "#F6F9FA",
    text: "#3F3F3F",
  },
  secondary: {
    background: "#FFFFFF",
    text: "#7D7D7D",
  },
  button: {
    text: "#FFFFFF",
  },
  default: {
    divider: "#DBDBDB",
    icon: "#525252",
  },
};

const DarkTheme: ITheme = {
  primary: {
    background: "#191919",
    text: "#F5F5F7",
  },
  secondary: {
    background: "#202020",
    text: "#C4C4C4",
  },
  button: {
    text: "#191919",
  },
  default: {
    divider: "#454545",
    icon: "#FFFFFF",
  },
};

export const appThemes: IAppThemes = {
  light: LightTheme,
  dark: DarkTheme,
};
