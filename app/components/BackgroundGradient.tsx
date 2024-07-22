import React, { FC, useEffect } from "react";
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type BackgroundGradientProps = {
  width: number;
  height: number;
};

const BackgroundGradient: FC<BackgroundGradientProps> = React.memo(
  ({ width, height }) => {
    const canvasPadding = 30;
    const rValue = useSharedValue(0);
    const skValue = useDerivedValue(() => rValue.value);

    useEffect(() => {
      rValue.value = withRepeat(withTiming(10, { duration: 2000 }), -1, true);
    }, [rValue]);

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
          <BlurMask blur={skValue} style={"solid"} />
        </RoundedRect>
      </Canvas>
    );
  }
);

export default BackgroundGradient;
