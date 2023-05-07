import { ITheme } from "./src/theme/AppThemes/type";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
