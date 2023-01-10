import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from "theme";

const Theme = ({ children }: { children: ReactElement | any }) => {
  return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>;
};

export default Theme;
