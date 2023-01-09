import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from "theme";

const Theme = ({ children }: { children: ReactElement | any }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
