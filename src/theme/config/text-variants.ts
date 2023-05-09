import { TextStyle } from "react-native";

import { fpx } from "@/constants";

import { TColors } from "./colors";
import { FontNames, TFontNames } from "./fonts";

type TStyle = TextStyle & {
  color?: TColors;
  fontFamily?: TFontNames;
};
type TextVariants = Record<string, TStyle>;

export const textVariants = {
  defaults: {
    color: "textColor",
    fontFamily: FontNames.Mulish_400Regular,
    fontSize: fpx(14),
    lineHeight: fpx(18),
    textAlign: "center",
  },
  h1: {
    color: "textColor",
    fontFamily: FontNames.Mulish_700Bold,
    fontSize: fpx(40),
    lineHeight: fpx(50),
    textAlign: "center",
  },
  h2: {
    color: "textColor",
    fontFamily: FontNames.Mulish_700Bold,
    fontSize: fpx(36),
    lineHeight: fpx(40),
    textAlign: "center",
  },
  h3: {
    color: "textColor",
    fontFamily: FontNames.Mulish_700Bold,
    fontSize: fpx(30),
    lineHeight: fpx(36),
    textAlign: "center",
  },
  h4: {
    color: "textColor",
    fontFamily: FontNames.Mulish_600SemiBold,
    fontSize: fpx(24),
    lineHeight: fpx(30),
    textAlign: "center",
  },
  h5: {
    color: "textColor",
    fontFamily: FontNames.Mulish_600SemiBold,
    fontSize: fpx(20),
    lineHeight: fpx(24),
    textAlign: "center",
  },
  h6: {
    color: "textColor",
    fontFamily: FontNames.Mulish_600SemiBold,
    fontSize: fpx(16),
    lineHeight: fpx(20),
    textAlign: "center",
  },
  p: {
    color: "textColor",
    fontFamily: FontNames.Mulish_500Medium,
    fontSize: fpx(16),
    lineHeight: fpx(20),
    textAlign: "center",
  },
  p_12: {
    color: "textColor",
    fontFamily: FontNames.Mulish_400Regular,
    fontSize: fpx(12),
    lineHeight: fpx(14),
    textAlign: "center",
  },
} satisfies TextVariants;
