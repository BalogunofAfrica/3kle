import { palette } from "./palette";

export const colors = {
  ...palette,
  main: palette.white,
  textColor: palette.black,
};

export type TColors = keyof typeof colors;
