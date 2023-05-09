import { createTheme } from "@shopify/restyle";
import { ColorSchemeName } from "react-native";

import { breakpoints } from "./config/breakpoints";
import { colors } from "./config/colors";
import { iconSizes } from "./config/icon-sizes";
import { borderRadii, spacing } from "./config/spacing";
import { textVariants } from "./config/text-variants";

type ColorScheme = NonNullable<ColorSchemeName>;

export const theme = createTheme({
  borderRadii,
  breakpoints,
  colors,
  iconSizes,
  scheme: "light" as ColorScheme,
  spacing,
  textVariants,
});
export type Theme = typeof theme;
