import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Oval,
  Paint,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import React from "react";

export const Drawings = () => {
  const center = vec(150, 100);
  const rct = { x: 50, y: 50, width: 200, height: 100 };
  const r = 22;

  const colors = {
    blue: { 400: "#60a5fa", 700: "#1d4ed8" },
  };

  return (
    <Canvas
      style={{ flex: 1, height: 200, borderWidth: 2, borderColor: "red" }}
    >
      <Circle c={center} r={r} color={colors.blue[400]}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(50, 50)}
          colors={[colors.blue[400], colors.blue[700]]}
        />
      </Circle>
      <Group style="stroke" strokeWidth={8}>
        <SweepGradient
          c={center}
          colors={[colors.blue[700], colors.blue[400], colors.blue[700]]}
        />
        <Oval rect={rct} />
        <Group transform={[{ rotate: Math.PI / 3 }]} origin={center}>
          <Oval rect={rct} />
        </Group>
        <Group transform={[{ rotate: -Math.PI / 3 }]} origin={center}>
          <Oval rect={rct} />
        </Group>
      </Group>
    </Canvas>
  );
};
