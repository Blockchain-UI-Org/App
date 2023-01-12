import { Story } from "@storybook/react";
import Flex from "component/flex";
import {
  Heading as HeadingComp,
  IDisplayProps,
  IHeadingProps,
  ITypographyProps,
  Typography as TypographyComp,
  Display as DisplayComp,
  Paragraph as ParagraphComp,
  IParagraphProps
} from "./typography";

export default {
  component: TypographyComp,
  title: "General/Typography",
};

const Template: Story<ITypographyProps> = (args) => <TypographyComp color="#fff" {...args} />;

export const TypographyBasic = Template.bind({});

TypographyBasic.argTypes = {
  children: {
    type: "string",
    defaultValue: "This is an example text"
  },
  fontFamily: {
    type: "string",
  },
  fontSize: {
    // defaultValue: 16,
    type: "number",
  },
  lineHeight: {
    // defaultValue: "24px",
    type: "number",
  },
  fontWeight: {
    // defaultValue: 400,
  },
  color: {
    defaultValue: "#fff"
  }
};

const HeadingTemplate: Story = (args) => {
  const headings: IHeadingProps["as"][] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  return (
    <Flex direction="column">
      {headings.map((heading) => {
        return <HeadingComp  as={heading} {...args}>This is {heading?.toUpperCase()} Heading</HeadingComp>;
      })}
    </Flex>
  );
};

export const Heading = HeadingTemplate.bind({});
Heading.argTypes = {
  color: {
    defaultValue: "#fff",
    type: "string"
  }
}

const DisplayTemplate: Story = (args) => {
  const displays: IDisplayProps["variant"][] = ["display1", "display2"];

  return (
    <Flex direction="column">
      {displays.map((variant) => {
        return <DisplayComp variant={variant}   {...args}>This is a {variant} Text</DisplayComp>;
      })}
    </Flex>
  );
};

export const Display = DisplayTemplate.bind({})

Display.argTypes ={
  color: {
    defaultValue: "#fff",
    type: "string"
  }
}

const ParagraphTemplate: Story = (args) => {
  const displays: IParagraphProps["variant"][] = ["body1", "body2"];

  return (
    <Flex direction="column">
      {displays.map((variant) => {
        return <ParagraphComp variant={variant}   {...args}>This is a {variant} Text</ParagraphComp>;
      })}
    </Flex>
  );
};




export const Paragraph = ParagraphTemplate.bind({})

Paragraph.argTypes ={
  color: {
    defaultValue: "#fff",
    type: "string"
  }
}