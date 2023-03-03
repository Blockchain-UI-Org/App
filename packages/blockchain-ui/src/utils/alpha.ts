import tinycolor from "tinycolor2";

export const alpha = (color: string, alpha: number) => {
  return tinycolor(color).setAlpha(alpha).toRgbString();
};
