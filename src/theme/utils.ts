import { Interpolation, ThemedStyledProps } from "styled-components";
import { DefaultTheme, ThemeInterface } from "./theme";
import isEmpty from "lodash/isEmpty";


export const withTheme = <P extends object>(
  callback: (props: P & {theme: ThemeInterface}) => Interpolation<ThemedStyledProps<P,ThemeInterface>>
) => {
  return (props: P & {theme: ThemeInterface}) => {
    const {theme} = props;
    if (!isEmpty(theme)) {
      return callback(props);
    }
    return callback({ ...props, theme: DefaultTheme });
  };
};
