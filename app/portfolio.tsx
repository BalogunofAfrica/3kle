import Animated, { BounceIn, Easing, FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";

import { pie_chart } from "@/assets/images";
import { Box, ImageBox, Screen, ScrollBox, Text } from "@/components/base";
import { Button, Pressable } from "@/components/button";
import { Icon } from "@/components/icon";
import { Summary } from "@/components/portfolio";
import { wpx } from "@/constants";
import { data, dots } from "@/data/portfolio";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedImageBox = Animated.createAnimatedComponent(ImageBox);

export default function Portfolio() {
  const router = useRouter();

  return (
    <Screen bg={"main"}>
      <ScrollBox px={"l"}>
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Pressable onPress={() => router.back()}>
            <Icon name="chevron_left" />
          </Pressable>
          <Icon name="question" />
        </Box>
        <Text variant={"h4"} fontFamily="Mulish_700Bold" my={"sl"}>
          Aggressive Portfolio
        </Text>
        <Box
          alignItems={"center"}
          flexDirection={"row"}
          gap={"m"}
          justifyContent={"center"}
          mb={"xxl"}
        >
          {dots.map((item, index) => (
            <AnimatedBox
              bg={item ? "blue" : undefined}
              entering={BounceIn.delay(index * 100)}
              key={index}
              borderRadius={"round"}
              aspectRatio={1}
              width={wpx(item ? 24 : 16)}
              borderColor={"blue"}
              borderWidth={wpx(1)}
            />
          ))}
        </Box>
        <AnimatedImageBox
          entering={FadeIn.duration(700).easing(Easing.exp)}
          alignSelf={"center"}
          source={pie_chart}
        />
        <Box mt={"xxl"} gap={"s"}>
          <Box
            borderRadius={"xs"}
            bg={"harsh"}
            px={"m"}
            py={"sm"}
            width={wpx(180)}
            gap={"xs"}
          >
            <Text fontFamily="Mulish_700Bold" textAlign={"left"}>
              Prospective Outcome
            </Text>
            <Text
              fontFamily="Mulish_600SemiBold"
              variant={"p_12"}
              textAlign={"left"}
            >
              Risk:6
            </Text>
            <Text
              fontFamily="Mulish_500Medium"
              variant={"p_12"}
              textAlign={"left"}
            >
              Returns 10-15%
            </Text>
          </Box>
          {data.map(({ image, text }) => (
            <Summary key={text} image={image} text={text} />
          ))}
        </Box>
        <Button
          my={"xxl"}
          labelProps={{
            color: "blackTint",
          }}
          bg={"secondaryTint"}
          label="This portfolio is selected"
        />
      </ScrollBox>
    </Screen>
  );
}
