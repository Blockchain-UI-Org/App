import { Story } from "@storybook/react";
import { ReactElement } from "react";
import styled from "styled-components";
import {
  FONT_HEADER_STYLES,
  FONT_DISPLAY_STYLES,
  FONT_BODY_STYLES,
  FontWeightTypes,
  FONT_WEIGHTS,
  FONT_FAMILY,
} from "./typography";

interface FontProps {
  variant?: Record<string, Record<string, string>>;
  "font-weight": FontWeightTypes;
  "font-family"?: string;
  "font-size"?: string;
  "line-height"?: string;
}
const StyledFont = styled.p<FontProps>`
  font-weight: ${(props) =>
    props["font-weight"] ? FONT_WEIGHTS[props["font-weight"]] : ""};
  font-family: ${FONT_FAMILY};
  font-size: ${(props) => props["font-size"]};
  line-height: ${(props) => props["line-height"]};
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  component: Text,
  title: "Themes/Typography",
};

//@ts-ignore
const generateDisplay = (args) => {
  const display: ReactElement[] = [];
  for (const [key, value] of Object.entries(
    args.variant as Record<string, Record<string, string>>
  )) {
    display.push(
      <StyledFont {...{ ...value, "font-weight": args["font-weight"] }}>
        {key}
      </StyledFont>
    );
  }
  return display;
};

const Template: Story<FontProps> = (args) => (
  <Wrapper>{generateDisplay(args)}</Wrapper>
);

export const Header = Template.bind({});

Header.args = {
  variant: FONT_HEADER_STYLES,
};

Header.argTypes = {
  variant: {
    control: { type: false },
  },
  "font-weight": {
    options: ["regular", "medium", "bold"],
    control: { type: "radio" },
  },
};

export const Display = Template.bind({});

Display.args = {
  variant: FONT_DISPLAY_STYLES,
};

Display.argTypes = {
  variant: {
    control: { type: false },
  },
  "font-weight": {
    options: ["regular", "medium", "bold"],
    control: { type: "radio" },
  },
};

export const Body = Template.bind({});

Body.args = {
  variant: FONT_BODY_STYLES,
};

Body.argTypes = {
  variant: {
    control: { type: false },
  },
  "font-weight": {
    options: ["regular", "medium", "bold"],
    control: { type: "radio" },
  },
};
