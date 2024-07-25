import { tailwindColors } from "@/constants/Colors";
import { Canvas, Path } from "@shopify/react-native-skia";
import React from "react";

export const Star = () => {
  const { yellow } = tailwindColors;

  return (
    <Canvas
      style={{
        flex: 1,
        height: 200,
        marginTop: 36,
        borderWidth: 2,
        borderColor: "blue",
      }}
    >
      <Path
        transform={[{ scale: 8 }]}
        path="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        color={yellow[300]}
        style="stroke"
        strokeWidth={2}
      />
    </Canvas>
  );
};
