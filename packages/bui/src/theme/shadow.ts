import { Subset } from "typeutils";
import merge from "lodash/merge";
export type IShadowTheme = {
  depth1: string;
  depth2: string;
};
const DefaultShadowTheme: IShadowTheme = {
  depth1: "0 0 16px rgb(58 78 88 / 5%)",
  depth2: "0px 4px 16px rgba(58, 78, 88, 0.15)",
};

export const createShadow = (args: Subset<IShadowTheme> = {}): IShadowTheme => {
  return merge(DefaultShadowTheme, args);
};
