import {
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";

export const Fonts = {
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
} as const;

export type TFontNames = keyof typeof Fonts;

export const FontNames = Object.entries(Fonts).reduce((acc, [key]) => {
  acc[key] = key;
  return acc;
}, {} as Record<string, string>) as Record<TFontNames, TFontNames>;
