import styled, { css, FlattenInterpolation, OmitU, ThemedStyledProps } from "styled-components";
import { DefaultTheme, ThemeInterface } from "./theme";



export const t = <P extends object, >(
  callback: (props: P & {theme: ThemeInterface}) => FlattenInterpolation<P>
) => {
  return (props: P & {theme: ThemeInterface}) => {
    if (props.theme) {
      return callback(props);
    }

    return callback({ ...props, theme: DefaultTheme });
  };
};
