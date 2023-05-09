import { Fonts } from "@/theme/config/fonts";
import { useFonts } from "@expo-google-fonts/mulish";

export function useAppStart() {
  const [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded;
}
