import React, { FC } from "react";
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";

type BackgroundGradientProps = {
  width: number;
  height: number;
};

const BackgroundGradient: FC<BackgroundGradientProps> = React.memo(
  ({ width, height }) => {
    const canvasPadding = 30;

    return (
      <Canvas
        style={{ width: width + canvasPadding, height: height + canvasPadding }}
      >
        <RoundedRect
          x={canvasPadding / 2}
          y={canvasPadding / 2}
          r={20}
          width={width}
          height={height}
          color={"white"}
        >
          <SweepGradient
            c={vec((width + canvasPadding) / 2, (height + canvasPadding) / 2)}
            colors={["cyan", "magenta", "yellow", "cyan"]}
          />
          <BlurMask blur={5} style={"solid"} />
        </RoundedRect>
      </Canvas>
    );
  }
);

export default BackgroundGradient;
