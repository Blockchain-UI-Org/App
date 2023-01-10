import { useTheme as useStyledTheme } from "styled-components"
import { DefaultTheme, ThemeInterface } from "./theme";

export const  useTheme = (): ThemeInterface => {
    const theme = useStyledTheme();

    return (theme as ThemeInterface) || DefaultTheme
}