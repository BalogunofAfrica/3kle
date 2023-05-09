import React from "react";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

import { px, screenWidth } from "@/constants";
import { useTheme } from "@/theme";

import { Box, BoxProps } from "../base";

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface DotProps {
  containerProps?: BoxProps;
  containerWidth?: number;
  index: number;
  scaleFactor?: number;
  translateX: Animated.SharedValue<number>;
}

export function Dot({
  containerProps,
  containerWidth = screenWidth,
  index,
  scaleFactor = 1,
  translateX,
}: DotProps) {
  const { colors } = useTheme();
  const inputRange = [
    (index - 1) * containerWidth,
    index * containerWidth,
    (index + 1) * containerWidth,
  ];
  const active = colors.primary;
  const inactive = colors.inactive;
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(translateX.value, inputRange, [
      inactive,
      active,
      inactive,
    ]) as string;

    const scale = interpolate(translateX.value, inputRange, [
      scaleFactor,
      1 * scaleFactor,
      scaleFactor,
    ]) as number;

    return {
      backgroundColor,
      transform: [{ scale }],
    };
  });
  return (
    <AnimatedBox
      borderRadius="xs"
      height={px(5)}
      marginBottom="xl"
      marginHorizontal="xs"
      style={[animatedStyle]}
      width={px(5)}
      {...containerProps}
    />
  );
}
