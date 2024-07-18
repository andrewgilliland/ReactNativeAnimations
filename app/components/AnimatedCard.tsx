import { View } from "react-native";
import React, { FC } from "react";
import BackgroundGradient from "./BackgroundGradient";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Extrapolate } from "@shopify/react-native-skia";

type AnimatedCardProps = {};
const AnimatedCard: FC<AnimatedCardProps> = () => {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const width = 250;
  const height = 175;
  const cardWidth = width - 5;
  const cardHeight = height - 5;

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      rotateX.value = withTiming(
        interpolate(event.y, [0, cardHeight], [10, -10], Extrapolate.CLAMP)
      );
      rotateY.value = withTiming(
        interpolate(event.x, [0, cardWidth], [-10, 10], Extrapolate.CLAMP)
      );
    })

    .onUpdate((event) => {
      rotateX.value = interpolate(
        event.y,
        [0, cardHeight],
        [10, -10],
        Extrapolate.CLAMP
      );
      rotateY.value = interpolate(
        event.x,
        [0, cardWidth],
        [-10, 10],
        Extrapolate.CLAMP
      );
    })
    .onFinalize(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    });

  const rStyle = useAnimatedStyle(() => {
    //* topLeft: [10deg, -10deg]
    //* topRight: [-10deg, 10deg]
    //* bottomRight: [-10deg, 10deg]
    //* bottomLeft: [-10deg, -10deg]

    const rotateXdegrees = `${rotateX.value}deg`;
    const rotateYdegrees = `${rotateY.value}deg`;

    return {
      transform: [
        { perspective: 300 },
        { rotateX: rotateXdegrees },
        { rotateY: rotateYdegrees },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <BackgroundGradient width={width} height={height} />
      <GestureDetector gesture={gesture}>
        <View
          style={[
            {
              position: "absolute",
              backgroundColor: "black",
              width: cardWidth,
              height: cardHeight,
              borderRadius: 20,
              zIndex: 300,
            },
            rStyle,
          ]}
        />
      </GestureDetector>
    </View>
  );
};

export default AnimatedCard;
