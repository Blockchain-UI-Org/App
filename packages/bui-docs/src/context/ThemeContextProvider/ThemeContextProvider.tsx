import { DEFAULT_THEME } from "@site/src/config/base.config";
import { appThemes } from "@site/src/theme/AppThemes/Theme";
import { ITheme, ThemeTypes } from "@site/src/theme/AppThemes/type";
import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeContextValue {
  theme: ThemeTypes;
  setTheme: (theme: ThemeTypes) => void;
}

const initialThemeContextValue: ThemeContextValue = {
  theme: DEFAULT_THEME,
  setTheme: () => {},
};

/** Initializing theme context.. */
export const ThemeContext = createContext<ThemeContextValue>(initialThemeContextValue);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>(DEFAULT_THEME);

  const contextValue: ThemeContextValue = {
    theme,
    setTheme,
  };

  /** Utilizing Styled theme */
  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={appThemes[theme] as ITheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
