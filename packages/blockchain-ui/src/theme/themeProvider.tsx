import React, { ReactElement } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { appThemes, DefaultTheme } from "blockchain-ui/theme";
import { TColorSchemes } from "blockchain-ui/typeutils/theme";

const ThemeProvider = ({ theme, children }: { children: ReactElement | any; theme: TColorSchemes }) => {
  /**
   * Theme can be explicitly provided using theme provider..
   * Use this as wrapper..
   */
  return <StyledThemeProvider theme={theme ? appThemes[theme] : DefaultTheme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
