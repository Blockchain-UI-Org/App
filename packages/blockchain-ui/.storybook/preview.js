import React from "react";
import "../src/index.css";
import { useDarkMode } from "storybook-dark-mode";
import ThemeProvider from "blockchain-ui/src/theme/themeProvider";
export const parameters = {
  backgrounds: {
    default: "darkPurple",
    values: [
      {
        name: "dark",
        value: "#161C24",
      },
      {
        name: "light",
        value: "#fffff",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const isDark = useDarkMode();

    /**
     * Configuring mode for components story.
     */
    return (
      <ThemeProvider theme={isDark ? "dark" : "light"}>
        <div
          style={{
            fontFamily: '"Public Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
          }}
        >
          <Story {...context} />
        </div>
      </ThemeProvider>
    );
  },
];
