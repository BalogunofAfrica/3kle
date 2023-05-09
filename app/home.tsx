import Animated, { BounceIn } from "react-native-reanimated";
import { useRouter } from "expo-router";

import { bar_chart } from "@/assets/images";
import { Box, ImageBox, Screen, ScrollBox, Text } from "@/components/base";
import { Button, Pressable } from "@/components/button";
import {
  Actions,
  Card,
  Categories,
  Knowledge,
  Transactions,
} from "@/components/home";
import { Icon } from "@/components/icon";
import { px, wpx } from "@/constants";
import {
  actions,
  categories,
  dots,
  knowledge,
  transactions,
} from "@/data/home";

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function Home() {
  const router = useRouter();

  return (
    <Screen bg={"main"}>
      <ScrollBox px={"l"}>
        <Pressable onPress={() => router.back()}>
          <Icon name="chevron_left" />
        </Pressable>
        <Text my={"sl"}>Family Plus Investments</Text>
        <Card />
        <Box
          flexDirection={"row"}
          gap={"s"}
          justifyContent={"center"}
          mt={"m"}
          mb={"xl"}
        >
          {dots.map((item, index) => (
            <AnimatedBox
              bg={item ? "primary" : undefined}
              entering={BounceIn.delay(index * 100)}
              key={index}
              borderRadius={"round"}
              aspectRatio={1}
              width={wpx(8)}
              borderColor={"primary"}
              borderWidth={wpx(1)}
            />
          ))}
        </Box>
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          {categories.map(({ icon, text }) => (
            <Categories key={text} icon={icon} text={text} />
          ))}
        </Box>
        <Box bg={"harsh"} mt={"xxl"} borderRadius={"xs"} overflow={"hidden"}>
          {actions.map(({ iconText, text }) => (
            <Actions key={text} iconText={iconText} text={text} />
          ))}
        </Box>
        <Box my={"xxl"}>
          <Box bg={"harshTint"} p={"sm"}>
            <Text fontFamily="Mulish_700Bold" variant={"h6"} textAlign={"left"}>
              Recent Transactions
            </Text>
          </Box>
          {transactions.map(({ amt, body, heading }) => (
            <Transactions
              key={heading}
              amt={amt}
              body={body}
              heading={heading}
            />
          ))}
          <Button onPress={() => router.push("/portfolio")} label="View all" />
        </Box>
        <Box
          bg={"secondary"}
          py={"xl"}
          height={px(471)}
          mb={"xxl"}
          justifyContent={"space-between"}
        >
          <Box gap={"xxl"} px={"sl"}>
            <Text variant={"p"}>
              Hypothetical projection {"\n"} of{" "}
              <Text variant={"h6"}>$12000</Text> at{" "}
              <Text variant={"h6"}>age 16</Text>
            </Text>
            <Box flexDirection={"row"} justifyContent={"space-between"}>
              <Text variant={"p_12"} fontFamily="Mulish_500Medium">
                Investment: $550
              </Text>
              <Text variant={"p_12"} fontFamily="Mulish_500Medium">
                Returns: $12,000
              </Text>
            </Box>
          </Box>
          <ImageBox alignSelf={"center"} width={"95%"} source={bar_chart} />
        </Box>
        <Box bg={"harshTint"} mb={"Ml"}>
          <Box p={"sm"}>
            <Text fontFamily="Mulish_700Bold" variant={"h6"} textAlign={"left"}>
              Grow your Knowledge
            </Text>
          </Box>
          {knowledge.map(({ icon, text }) => (
            <Knowledge key={text} icon={icon} text={text} />
          ))}
        </Box>
      </ScrollBox>
    </Screen>
  );
}
