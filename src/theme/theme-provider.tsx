import { ThemeProvider as Provider } from "@shopify/restyle";

import { theme } from "./get-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <Provider theme={theme}>{children}</Provider>;
}
