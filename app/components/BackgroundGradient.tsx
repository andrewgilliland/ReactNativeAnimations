import { StyleSheet } from "react-native";
import React, { FC } from "react";
import {
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";

type BackgroundGradientProps = {
  width: number;
  height: number;
};

const BackgroundGradient: FC<BackgroundGradientProps> = ({ width, height }) => {
  return (
    <Canvas style={{ width, height }}>
      <RoundedRect
        x={0}
        y={0}
        r={20}
        width={width}
        height={height}
        color={"white"}
      >
        <SweepGradient
          c={vec(width / 2, height / 2)}
          colors={["cyan", "magenta", "yellow", "cyan"]}
        />
      </RoundedRect>
    </Canvas>
  );
};

export default BackgroundGradient;
