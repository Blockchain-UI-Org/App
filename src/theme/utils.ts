import styled, { css, Interpolation, OmitU, ThemedStyledProps } from "styled-components";
import { DefaultTheme, ThemeInterface } from "./theme";



export const t = (
  callback: (props:  {theme: ThemeInterface}) => Interpolation<any>
) => {
  return (props: {theme: ThemeInterface}) => {
    if (props.theme) {
      return callback(props);
    }

    return callback({ ...props, theme: DefaultTheme });
  };
};
