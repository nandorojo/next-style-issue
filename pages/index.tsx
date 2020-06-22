import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  let breakpoint = 0;
  const { width = 0 } = useDimensions().window;
  // const width = Math.round(Math.random() * 1000);

  if (width > 500) breakpoint = 1;
  if (width > 900) breakpoint = 2;

  /*
   * on server: { breakpoint: 0 }
   * on client: { breakpoint: 1, 2 or 3 } (unknown until it loads)
   */

  console.log("[pages/index.tsx]", { breakpoint });

  /* 🚨 Prop `style` did not match.
   * Server: "background-color:green;min-height:100px"
   * Client: "background-color:blue;min-height:200px
   */
  return (
    <div
      style={{
        backgroundColor: ["green", "blue", "orange"][breakpoint],
        minHeight: ["100px", "200px", "300px"][breakpoint],
      }}
    ></div>
  );
}
