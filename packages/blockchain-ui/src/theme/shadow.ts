import { Subset } from "blockchain-ui/typeutils";
import merge from "lodash/merge";
export type IShadowTheme = {
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  depth5: string;
  depth6: string;
  depth7: string;
};

const DefaultShadowColor = "rgba(145, 158, 171, 0.16)";

export const createShadowString = (x = 0, y = 0, z = 0, color = DefaultShadowColor) => {
  return `${x}px ${y}px ${z}px ${color}`;
};

const DefaultShadowTheme: IShadowTheme = {
  depth1: createShadowString(0, 1, 2),
  depth2: createShadowString(0, 4, 8),
  depth3: createShadowString(0, 8, 16),
  depth4: createShadowString(0, 12, 24),
  depth5: createShadowString(0, 16, 32),
  depth6: createShadowString(0, 20, 40),
  depth7: createShadowString(0, 24, 48),
};

export const createShadow = (args: Subset<IShadowTheme> = {}): IShadowTheme => {
  return merge(DefaultShadowTheme, args);
};
