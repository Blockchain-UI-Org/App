import { TColorSchemes } from "blockchain-ui/typeutils/theme";
import { useEffect, useState } from "react";
import { useTheme as useStyledTheme } from "styled-components";
import { appThemes, DefaultTheme, ThemeInterface } from "./theme";

export const useTheme = (): ThemeInterface => {
  const theme = useStyledTheme();
  const [themeName, setThemeName] = useState<TColorSchemes | null>();
  useEffect(() => {
    /**
     * if theme not exists ..
     * look for color scheme globally defined in root..
     */
    const defaultThemeName =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setThemeName(defaultThemeName);
  }, []);

  return (theme as ThemeInterface) || (themeName ? appThemes[themeName] : DefaultTheme);
};
