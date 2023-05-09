import { Box, ImageBox, Text } from "@/components/base";
import { Icon } from "@/components/icon";
import { wpx } from "@/constants";

export function Summary({ image, text }: { image: number; text: string }) {
  return (
    <Box
      alignItems={"center"}
      borderRadius={"xs"}
      bg={"harsh"}
      flexDirection={"row"}
      px={"sm"}
      py={"sl"}
      justifyContent={"space-between"}
    >
      <Text fontFamily="Mulish_600SemiBold">{text}</Text>
      <Box gap={"s"} flexDirection={"row"} alignItems={"center"}>
        <ImageBox aspectRatio={1} width={wpx(32)} source={image} />
        <Icon name="chevron_right" />
      </Box>
    </Box>
  );
}
