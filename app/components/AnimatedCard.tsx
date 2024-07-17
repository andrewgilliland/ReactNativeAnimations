import { View } from "react-native";
import React, { FC } from "react";
import BackgroundGradient from "./BackgroundGradient";

type AnimatedCardProps = {};
const AnimatedCard: FC<AnimatedCardProps> = () => {
  const width = 250;
  const height = 175;
  const cardWidth = width - 5;
  const cardHeight = height - 5;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <BackgroundGradient width={width} height={height} />
      <View
        style={{
          position: "absolute",
          backgroundColor: "black",
          width: cardWidth,
          height: cardHeight,
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default AnimatedCard;
