import React from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import classes from "./styles.module.css";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function NavbarColorModeToggle({ className }) {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  const handleClick = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };
  if (disabled) {
    return null;
  }

  return (
    <div onMouseDown={handleClick} className={classes.toggleSwitch}>
      <label>
        <div className="innerelement">
          <input checked={colorMode === "dark"} type="checkbox" />
          <span className={classes.sliderElement + (colorMode === "dark" ? ` ${classes.active}`: "")}>
            {colorMode === "dark" ? <BsMoonStars size={12} /> : <BsSun size={14} />}
          </span>
        </div>
      </label>
    </div>
  );
}
