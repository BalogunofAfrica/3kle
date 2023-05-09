import React from "react";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

import { coins_amico } from "@/assets/images";
import { Box, ImageBox, Screen, ScrollBox, Text } from "@/components/base";
import { Button } from "@/components/button";
import { Dot } from "@/components/generic";
import { Icon } from "@/components/icon";
import { px, screenWidth, vw } from "@/constants";

const images = [coins_amico, coins_amico, coins_amico];

const AnimatedScrollBox = Animated.createAnimatedComponent(ScrollBox);
const AnimatedImageBox = Animated.createAnimatedComponent(ImageBox);

const AnimatedImage = ({
  index,
  image,
  translateX,
}: {
  index: number;
  image: number;
  translateX: Animated.SharedValue<number>;
}) => {
  const scaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [0, 1, 0]
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <AnimatedImageBox
      alignSelf={"center"}
      width={px(238)}
      height={px(238)}
      source={image}
      style={scaleStyle}
    />
  );
};

export default function Landing() {
  const router = useRouter();
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = withSpring(event.contentOffset.x);
  });

  return (
    <Screen bg={"main"} flex={1} pt="Ml" gap={"m"}>
      <Icon name="cancel_x" marginHorizontal={"l"} />
      <Box mt={"xxl"}>
        <AnimatedScrollBox
          horizontal
          onScroll={scrollHandler}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <Box key={index} width={vw(100)}>
              <AnimatedImage
                index={index}
                translateX={translateX}
                image={image}
              />
              <Box mx={"l"} gap={"xs"}>
                <Text variant={"h4"}>
                  3KLE invests your money intelligently in stocks
                </Text>
                <Text>
                  Build, perserve and manage your family wealth with stocks
                  investment
                </Text>
              </Box>
            </Box>
          ))}
        </AnimatedScrollBox>
      </Box>
      <Box height={px(5)} flexDirection={"row"} justifyContent={"center"}>
        {images.map((_, index) => (
          <Dot key={index} index={index} translateX={translateX} />
        ))}
      </Box>
      <Button
        marginHorizontal={"l"}
        onPress={() => router.push("/home")}
        label="Get started"
      />
    </Screen>
  );
}
