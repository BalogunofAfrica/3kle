import { Box, Text } from "@/components/base";
import { Icon } from "@/components/icon";

type Props = {
  iconText: string;
  text: string;
};
export function Actions({ iconText, text }: Props) {
  return (
    <Box p={"sl"} flexDirection={"row"} justifyContent={"space-between"}>
      <Text>{text}</Text>
      <Box gap={"xs"} flexDirection={"row"} alignItems={"center"}>
        <Text color={"primary"}>{iconText}</Text>
        <Icon name="chevron_right" size="m" />
      </Box>
    </Box>
  );
}
