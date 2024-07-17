import { StyleSheet } from "react-native";
import React, { FC } from "react";
import { Canvas, RoundedRect } from "@shopify/react-native-skia";

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
        r={5}
        width={width}
        height={height}
        color={"white"}
      />
    </Canvas>
  );
};

export default BackgroundGradient;
