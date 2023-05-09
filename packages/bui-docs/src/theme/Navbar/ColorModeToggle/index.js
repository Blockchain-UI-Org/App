import React, { useContext, useEffect } from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import { ThemeContext } from "@site/src/context/ThemeContextProvider";
export default function NavbarColorModeToggle({ className }) {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTheme(colorMode);
  }, [colorMode]);
  if (disabled) {
    return null;
  }
  return <ColorModeToggle className={className} value={colorMode} onChange={setColorMode} />;
}
