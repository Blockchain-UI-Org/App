import tinycolor from "tinycolor2";


export const getShades = (color: string, count = 10) => {
  const shades = [];

  const tinyc = tinycolor(color);

  const lightenedCount = Math.floor(count / 2) - 1;
  const darkenedCount = (count % 2 === 0 ? 1 : 0) + lightenedCount;

  for (let i = lightenedCount; i >= 1; i--) {
    const lightColor = tinyc.clone().lighten((i * 100) / lightenedCount);
    shades.push(lightColor.toHexString());
  }
  shades.push(tinyc.toHexString());

  for (let i = 1; i <= darkenedCount; i++) {
    const darkColor = tinyc.clone().darken(i / lightenedCount);
    shades.push(darkColor.toHexString());
  }

  return shades;
};
