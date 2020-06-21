import { View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  let breakpoint = 0;
  const { width = 0 } = useDimensions().window;

  if (width > 500) breakpoint = 1;
  else if (width > 900) breakpoint = 2;

  console.log("[pages/index.tsx]", { breakpoint });

  return (
    <View
      style={{
        backgroundColor: ["green", "blue", "orange"][breakpoint],
        minHeight: ["100px", "200px", "300px"][breakpoint],
      }}
    >
      {/* <Text sx={{ color: ['white', 'black'] }}>
        Welcome to Expo + Next.js 👋
      </Text> */}
    </View>
  );
}
