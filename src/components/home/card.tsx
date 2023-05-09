import Animated, { ZoomIn } from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { card_bg } from "@/assets/images";
import { Box, ImageBox, Text } from "@/components/base";
import { Button } from "@/components/button";
import { vh, wpx } from "@/constants";

const labelProps = {
  color: "blackTint",
  variant: "p_12",
} as const;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export function Card() {
  const router = useRouter();
  return (
    <AnimatedBox
      entering={ZoomIn.springify().damping(12)}
      height={vh(24)}
      width={"100%"}
      borderRadius={"xs"}
      overflow={"hidden"}
    >
      <ImageBox
        height={"100%"}
        width={"100%"}
        source={card_bg}
        style={StyleSheet.absoluteFillObject}
      />
      <Box height={"100%"} p={"l"} justifyContent={"space-between"}>
        <Box>
          <Text letterSpacing={3} color={"white"} variant={"h1"}>
            $4,500.00
          </Text>
          <Text color={"white"} variant={"h6"}>
            Total Balance
          </Text>
        </Box>
        <Box justifyContent={"space-evenly"} flexDirection={"row"}>
          <Button
            onPress={() => router.push("/portfolio")}
            py={"sm"}
            labelProps={labelProps}
            bg={"white"}
            width={wpx(92)}
            label="Add Money"
          />
          <Button
            onPress={() => router.push("/portfolio")}
            py={"sm"}
            labelProps={labelProps}
            bg={"white"}
            width={wpx(92)}
            label="Withdraw"
          />
        </Box>
      </Box>
    </AnimatedBox>
  );
}
