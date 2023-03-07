import { useTheme as useStyledTheme } from "styled-components";
import { appThemes, DefaultTheme, ThemeInterface } from "./theme";

export const useTheme = (): ThemeInterface => {
  const theme = useStyledTheme();
  /**
   * if theme not exists ..
   * look for color scheme globally defined in root..
   */
  const defaultThemeName =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  return (theme as ThemeInterface) || (defaultThemeName ? appThemes[defaultThemeName] : DefaultTheme);
};
