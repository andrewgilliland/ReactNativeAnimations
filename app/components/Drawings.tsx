import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Oval,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import React from "react";

export const Drawings = () => {
  const centerX = 150;
  const centerY = 100;
  const center = vec(centerX, centerY);
  const rct = { x: 50, y: 50, width: 200, height: 100 };
  const r = 22;

  const colors = {
    blue: { 400: "#60a5fa", 700: "#1d4ed8" },
  };

  return (
    <Canvas
      style={{ flex: 1, height: 200, borderWidth: 2, borderColor: "limegreen" }}
    >
      <Group>
        <BlurMask blur={5} style="inner" />
        <LinearGradient
          start={center}
          end={vec(centerX + r, centerY + r)}
          colors={[colors.blue[400], colors.blue[700]]}
        />
        <Circle c={center} r={r} />
      </Group>
      <Group style="stroke" strokeWidth={8}>
        <SweepGradient
          c={center}
          colors={[colors.blue[700], colors.blue[400], colors.blue[700]]}
        />
        <BlurMask blur={5} style="inner" />
        <Oval rect={rct} />
        <Group
          transform={[{ rotate: Math.PI / 3 }, { scale: -1 }]}
          origin={center}
        >
          <Oval rect={rct} />
        </Group>
        <Group
          transform={[{ rotate: -Math.PI / 3 }, { scale: -1 }]}
          origin={center}
        >
          <Oval rect={rct} />
        </Group>
      </Group>
    </Canvas>
  );
};
