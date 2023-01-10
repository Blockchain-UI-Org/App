import { Subset } from "typeutils";
import merge from "lodash/merge";
const regular = {
  small: "16px",
  medium: "24px",
  large: "32px",
  xlarge: "60px",
} as const;

export type IIconSize = {
  xsmall?: string;
  small: string;
  medium: string;
  large: string;
  xlarge?: string;
};

export type IIconTheme = {
  sizes: {
    crypto: IIconSize;
    regular: IIconSize;
    account: IIconSize;
    filled: IIconSize;
    thin: IIconSize;
  };
};

export const createIconTheme = (): IIconTheme => {
  return {
    sizes: {
      crypto: {
        xsmall: "24px",
        small: "32px",
        medium: "40px",
        large: "48px",
      },
      regular: regular,
      account: regular,
      filled: regular,
      thin: regular,
    },
  };
};
