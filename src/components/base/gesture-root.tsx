import { ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const gestureFlex: ViewStyle = {
  flex: 1,
};

export type GestureRootProps = React.ComponentProps<
  typeof GestureHandlerRootView
>;

export function GestureRoot(props: GestureRootProps) {
  return <GestureHandlerRootView style={gestureFlex} {...props} />;
}
