import { IconSizes } from "../static/types/icons";

export const buttonSizes = {
  small: { width: "69px", height: "24px" },
  medium: { width: "116px", height: "40px" },
  large: { width: "132px", height: "56px" },
};

export const iconSizes = (size: keyof IconSizes) => {
  return {
    xsmall: "24px",
    small: "32px",
    medium: "40px",
    large: "48px",
    xlarge: "40px",
  }[size];
};
