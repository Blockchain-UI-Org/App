import typography from "./typography/typography";
import media from "./media";
import { legacyColors, colorsWithDarkMode, shadow } from "./colors";

import { IconSizes, IconType } from "../static/types/icons";
import { DefaultTheme } from "styled-components";
import { getIconSize } from "./icons";

export interface ThemeInterface extends DefaultTheme {
  colors: Record<
    keyof typeof legacyColors | keyof ReturnType<typeof colorsWithDarkMode>,
    string
  >;
  media: typeof media;
  shadow: string;
  typography: typeof typography;
  getIconSize: Record<IconType, IconSizes>;
}

const theme: ThemeInterface = {
  colors: { ...colorsWithDarkMode(), ...legacyColors },
  media,
  typography,
  shadow,
  getIconSize,
};

const themeWithDarkMode = (darkMode = true): ThemeInterface => ({
  colors: { ...colorsWithDarkMode(darkMode), ...legacyColors },
  media,
  typography,
  shadow,
  getIconSize,
});

export { theme, themeWithDarkMode };
