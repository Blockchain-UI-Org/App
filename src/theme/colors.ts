export type ThemeColor =
  | "green"
  | "yellow"
  | "blue"
  | "red"
  | "grey"
  | "background"
  | "default";


export const colors = {
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

  red100: "#cb2d74",

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


export type IColorsPallette = {
  preloader: string,
  main: string,
  subtle: string,
  header: string,

  // Icon Background Colors

  // icon1: string,
  // icon2: string,
  // icon3:  string,


  // Background Colors
  // bg1: string,
  // bg2: string,
  // bg3: string,

  // // Text Colors
  // text1: string,
  // text2: string,
  // text3:  string,

  // Button Colors

  // btn1: string,
  // btn1Press: string,
  // btn2: string,
  // btn2Press: string,
  // btnDisabled: string,

  // // Disabled Colors
  // disable1: string,
  // disable2: string,
}

export const DefaultColorsPallete = {

  main: colors.blue500,
  subtle: "#e7edff",
  header: colors.white,

  // Icon Background Colors

  // icon1: `${colors.blue500}, #25a6ee`,
  // icon2: `#1fdeea, ${colors.success500}`,
  // icon3:  "#85d9ef, #3fadfc",


  // Background Colors
  // bg1: colors.white,
  // bg2: colors.blue100,
  // bg3: "#f2f2f2",

  // text1: colors.black,
  // text2: "#6b707e",
  // text3:  "#cfdbf2",

  // // Button Colors

  // btn1: colors.blue500,
  // btn1Press: "#001352",
  // btn2: colors.success500,
  // btn2Press: "#02684E",
  // btnDisabled: "#bdbdbd",

  // // Disabled Colors
  // disable1: colors.grey500,
  // disable2: colors.grey200,

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
}



// export const createColorsPallette = (overrides: Partial<IColorsPallette> = {}): IColorsPallette => {
//   return {
   
//     ...DefaultColorsPallete,
//     ...overrides
//   }
// }

// export const DarkColorPallette = createColorsPallette({
//   preloader: "#1b1c21",
//   main: colors.red100,
//   subtle: colors.red100,
//   header: "#0e0f15",
  
//   icon1:  "#ff67ab , #cb2d74",
//   icon2: "#cbb22d , #cb492d",
//   icon3: "#e30cc1 , #ee2525",

//   bg1: "#1b1c21",
//   bg2: "rgba(255, 255, 255, 0.1)",
//   bg3: "",

//   text1: colors.white,
//   text2: "#757575",
//   text3: "",

// })


export const shadow = "0 0 16px rgb(58 78 88 / 5%)";
