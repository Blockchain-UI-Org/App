import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { Button, ButtonColors, ButtonSizes, ButtonVariants, IButtonProps } from "./button";
import { capitalize } from "lodash";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<IButtonProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {ButtonColors.map((color) => {
        return (
          <div style={{ display: "flex", marginBottom: "1em" }}>
            {ButtonVariants.map((variant) => {
              return (
                <div style={{ display: "flex", marginRight: "3em", alignItems: "center" }}>
                  {[...ButtonSizes].reverse().map((size) => {
                    return (
                      <div style={{ margin: "0.3em" }}>
                        {<Button label={capitalize(size)} variant={variant} size={size} color={color} />}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const Buttons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
