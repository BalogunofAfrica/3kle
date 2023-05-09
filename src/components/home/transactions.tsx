import { Box, Text } from "@/components/base";
import { Icon } from "@/components/icon";
import { wpx } from "@/constants";

type Props = {
  amt: string;
  body: string;
  heading: string;
};

export function Transactions({ amt, body, heading }: Props) {
  return (
    <Box
      alignItems={"center"}
      bg={"fadedWhite"}
      p={"sm"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Box gap={"sm"} flexDirection={"row"}>
        <Icon name="tick" />
        <Box gap={"xs"}>
          <Text fontFamily="Mulish_600SemiBold" textAlign={"left"}>
            {heading}
          </Text>
          <Text variant={"p_12"} textAlign={"left"}>
            {body}
          </Text>
        </Box>
      </Box>
      <Box width={wpx(70)}>
        <Text variant={"p_12"} textAlign={"left"}>
          {amt}
        </Text>
      </Box>
    </Box>
  );
}
