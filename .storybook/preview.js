import React from "react";

export const parameters = {
  backgrounds: {
    default: "darkPurple",
    values: [
      {
        name: "dark",
        value: "#161C24",
      },
      {
        name: "darkPurple",
        value: "#020028",
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
  (Story) => (
    <div
      style={{
        fontFamily: '"Public Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: "400",
      }}
    >
      <Story />
    </div>
  ),
];
