import { Box, Text } from "@/components/base";
import { Icon, IconName } from "@/components/icon";
import { wpx } from "@/constants";

type Props = {
  icon: IconName;
  text: string;
};

export function Knowledge({ icon, text }: Props) {
  return (
    <Box p={"sm"} gap={"sm"} flexDirection={"row"} alignItems={"center"}>
      <Box
        borderRadius={"round"}
        bg={"primaryTint"}
        aspectRatio={1}
        width={wpx(24)}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon size="m" name={icon} />
      </Box>
      <Text fontFamily="Mulish_600SemiBold" textAlign={"left"}>
        {text}
      </Text>
    </Box>
  );
}
