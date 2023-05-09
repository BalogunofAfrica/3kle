import { Box, Text } from "@/components/base";
import { Icon, IconName } from "@/components/icon";
import { wpx } from "@/constants";

type Props = {
  icon: IconName;
  text: string;
};

export function Categories({ icon, text }: Props) {
  return (
    <Box gap={"xs"} alignItems={"center"}>
      <Box
        bg={"primaryTint"}
        borderRadius={"round"}
        aspectRatio={1}
        alignItems={"center"}
        justifyContent={"center"}
        width={wpx(40)}
      >
        <Icon name={icon} />
      </Box>
      <Text variant={"p_12"}>{text}</Text>
    </Box>
  );
}
