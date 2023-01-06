export type ThemeColor =
  | "green"
  | "yellow"
  | "blue"
  | "red"
  | "grey"
  | "background"
  | "default";

//@ts-ignore
export const colors: Record<ThemeColor, any> = {
  green: {
    color: "#015249",
    background: "#C8FACD",
    highlightLight: "#53D62B",
    highlightDark: "#2B4737",
    midtone: "#53D62B",
  },
  yellow: { color: "#7A4F01", background: "#FFF7CC", midtone: "#FFC007" },
  blue: { color: "#042979", background: "#D0F2FE", midtone: "#1990FF" },
  red: {
    color: "#7A0B2E",
    background: "#FFE7D9",
    highlightDark: "#463138",
    highlightLight: "#FE4842",
    midtone: "#FE4842",
  },
  default: { background: "#212B36", color: "#FFF", midtone: "#212B36" },
  background: { dark: "#020028", light: "#550B40" },
};

export const legacyColors = {
  white: "#FFFFFF",
  black: "#2F2F2F",

  blue100: "#D0F2FE",
  blue500: "#1990FF",
  blue900: "#042979",

  purple100: "#E9E0FF",
  purple500: "#5314F1",
  purple900: "#2B0A7D",

  skyblue100: "#DEFBFF",
  skyblue500: "#04E2FF",
  skyblue900: "#00C0D9",

  pink100: "#FFE0F5",
  pink500: "#EF18AC",
  pink900: "#AC0678",

  grey100: "#F8F8F8",
  grey200: "#EEEEEE",
  grey300: "#D7D9E1",
  grey500: "#9BA4AE",
  grey700: "#5E6D7C",
  grey900: "#2F2F2F",

  yellow100: "#FFF6DC",
  yellow500: "#FAD972",
  yellow900: "#E4BB3B",

  success100: "#E7F8F4",
  success500: "#11BC91",
  success900: "#25735F",

  warning100: "#FFF8E7",
  warning500: "#FFBC0E",
  warning900: "#A1812D",

  error100: "#FDEEEE",
  error500: "#EB5757",
  error900: "#782424",
};

export const colorsWithDarkMode = (darkMode = false) => {
  return {
    preloader: darkMode ? "#1b1c21" : legacyColors.white,
    main: darkMode ? "#cb2d74" : legacyColors.blue500,
    subtle: darkMode ? "#cb2d74" : "#e7edff",
    header: darkMode ? "#0e0f15" : legacyColors.white,

    // icons background
    icon1: darkMode ? "#ff67ab , #cb2d74" : `${legacyColors.blue500}, #25a6ee`,
    icon2: darkMode
      ? "#cbb22d , #cb492d"
      : `#1fdeea, ${legacyColors.success500}`,
    icon3: darkMode ? "#e30cc1 , #ee2525" : "#85d9ef, #3fadfc",

    // background
    bg1: darkMode ? "#1b1c21" : legacyColors.white,
    bg2: darkMode ? "rgba(255, 255, 255, 0.1)" : legacyColors.blue100,
    bg3: darkMode ? "" : "#f2f2f2",

    // text
    text1: darkMode ? "#ffffff" : legacyColors.black,
    text2: darkMode ? "#757575" : "#6b707e",
    text3: darkMode ? "" : "#cfdbf2",

    // button
    btn1: legacyColors.blue500,
    "btn1-press": "#001352",
    btn2: legacyColors.success500,
    "btn2-press": "#02684E",
    "btn-disabled": "#bdbdbd",

    // disabled colors

    disable1: legacyColors.grey500,
    disable2: legacyColors.grey200,
  };
};

export const shadow = "0 0 16px rgb(58 78 88 / 5%)";
