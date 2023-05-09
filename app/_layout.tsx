import { Stack } from "expo-router/stack";

import { GestureRoot, StatusBar } from "@/components/base";
import { ErrorBoundary } from "@/components/error-boundary";
import { useAppStart } from "@/hooks";
import { ThemeProvider } from "@/theme";

export default function AppLayout() {
  const hasAppLoaded = useAppStart();

  if (!hasAppLoaded) return null;

  return (
    <GestureRoot>
      <ThemeProvider>
        <ErrorBoundary>
          <StatusBar />
          <Stack screenOptions={{ headerShown: false }} />
        </ErrorBoundary>
      </ThemeProvider>
    </GestureRoot>
  );
}
