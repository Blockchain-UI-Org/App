import { colors } from "./colors";

export type IVariant = {
  color: string;
  background: string;
  highlightLight?: string;
  highlightDark?: string;
  midtone?: string;
};
export type IColorVariants = {
  red: IVariant;
  green: IVariant;
  blue: IVariant;
  yellow: IVariant;
  default: IVariant;
};

export const colorVariants: IColorVariants = {
  green: {
    color: colors.darkgreen800,
    background: colors.green100,
    highlightLight: colors.green900,
    highlightDark: colors.darkgreen900,
    midtone: colors.green900,
  },
  blue: {
    color: colors.blue900,
    background: colors.blue100,
    midtone: colors.blue500,
  },
  red: {
    color: colors.red900,
    background: colors.brown50,
    highlightDark: colors.brown800,
    highlightLight: colors.red500,
    midtone: colors.red500,
  },
  yellow: {
    color: colors.brown700,
    background: colors.brown100,
    midtone: colors.yellow800,
  },
  default: {
    background: colors.black800,
    color: colors.white,
    midtone: colors.white,
  },
};
