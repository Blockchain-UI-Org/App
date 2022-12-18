import { Story, Meta } from "@storybook/react";
import { ReactElement } from "react";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import { theme, themeWithDarkMode } from ".";
import { MEDIA_WIDTHS } from "./media";

interface ThemeProps {
  darkTheme?: boolean;
  story?: "colors" | "fonts" | "breakpoints";
}

//@ts-ignore
const colorDisplay = (darkTheme) => {
  const display: ReactElement[] = [];
  for (const [key, value] of Object.entries(
    darkTheme ? themeWithDarkMode().colors : theme.colors
  ).sort(function (a, b) {
    const nameA = a[0].toLowerCase(),
      nameB = b[0].toLowerCase();
    if (nameA < nameB)
      //sort string ascending
      return -1;
    if (nameA > nameB) return 1;
    return 0; //default return value (no sorting)
  })) {
    display.push(
      <Wrapper>
        {key}
        <ColorBlock bColor={value} />
      </Wrapper>
    );
  }
  return display;
};

//@ts-ignore
const breakPointsDisplay = (width) => {
  const { small, medium } = MEDIA_WIDTHS;
  const getDeviceType = () => {
    if (width < small) {
      return "Mobile";
    }
    if (width > small && width < medium) {
      return "Tablet";
    }
    if (width > medium) {
      return "Laptop";
    }
    return;
  };

  return (
    <Wrapper>
      Resize window to test
      <BreakPointBox>
        <div>
          Current Window Size:<b>{width}px</b>
        </div>
        <br />
        <br />
        <div>
          Type of Device:<b>{getDeviceType()}</b>
        </div>
      </BreakPointBox>
    </Wrapper>
  );
};

const Theme: React.FC<ThemeProps> = ({
  darkTheme = false,
  story = "colors",
}) => {
  const { width } = useWindowSize();
  const handleDisplay = () => {
    if (story === "colors") {
      return colorDisplay(darkTheme);
    }

    if (story === "breakpoints") {
      return breakPointsDisplay(width);
    }
    return;
  };
  return <Layout>{handleDisplay()}</Layout>;
};

export default {
  component: Theme,
  title: "Theme",
} as Meta;

const Template: Story = (args) => <Theme {...args} />;

export const Colors = Template.bind({});

Colors.args = {
  darkTheme: false,
};

export const Breakpoints = Template.bind({});

Breakpoints.args = {
  story: "breakpoints",
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 5px;
`;
interface DisplayProps {
  bColor?: string;
}
const ColorBlock = styled.div<DisplayProps>`
  width: 150px;
  height: 40px;
  background-color: ${({ bColor }) => bColor};
  border: 1px solid black;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: white;
`;

const BreakPointBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 450px;
  max-width: 550px;
  height: 200px;
  font-size: 25px;
  border: 1px solid black;
  color: white;
`;
