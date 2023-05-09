import { createBox } from "@shopify/restyle";

import { Theme } from "@/theme";
import { Image } from "react-native";

export const ImageBox = createBox<Theme, React.ComponentProps<typeof Image>>(
  Image
);

export type ImageBoxProps = React.ComponentProps<typeof Image>;
