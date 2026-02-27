import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

// convex
import { convexprovider, convexReactclient} from "convex/react";

const convex =new convexReactclient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedchangesWarning: false
})


export default function RootLayout() {
  return (
    <convexprovider client={convex}>
    <ThemeProvider>
      <Stack screenOptions={ {headerShown: false}}/>
    </ThemeProvider>
    </convexprovider>
    )
}
