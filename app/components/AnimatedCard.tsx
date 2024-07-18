import { View } from "react-native";
import React, { FC } from "react";
import BackgroundGradient from "./BackgroundGradient";
import GestureCard from "./GestureCard";

type AnimatedCardProps = {};
const AnimatedCard: FC<AnimatedCardProps> = () => {
  const width = 250;
  const height = 175;

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
      <GestureCard width={width} height={height} />
    </View>
  );
};

export default AnimatedCard;
