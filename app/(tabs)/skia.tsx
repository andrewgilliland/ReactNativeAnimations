import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Platform } from "react-native";

import { Collapsible } from "../components/Collapsible";
import { ExternalLink } from "../components/ExternalLink";
import ParallaxScrollView from "../components/ParallaxScrollView";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import SkiaHelloWorld from "../components/SkiaHelloWorld";
import { SkiaAnimations } from "../components/SkiaAnimations";
import { AnimatedGradient } from "../components/AnimatedGradient";
import { AnimationWithTouchHandler } from "../components/AnimationWithTouchHandler";
import { ElementTracking } from "../components/ElementTracking";

import AnimatedCard from "../components/AnimatedCard";
import { Drawings } from "../components/Drawings";

export default function SkiaScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="paper-plane" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native Skia</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <Collapsible title="Hello World">
        <SkiaHelloWorld />
        <ThemedText>
          The layout file in{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <SkiaAnimations />
        <AnimatedGradient />
      </Collapsible>
      <Collapsible title="Gestures">
        <AnimationWithTouchHandler />
        <ElementTracking />
      </Collapsible>
      <Collapsible title="Animated 3D Card">
        <AnimatedCard />
      </Collapsible>
      <Collapsible title="Drawings">
        <Drawings />
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{" "}
          <ThemedText type="defaultSemiBold">
            components/HelloWave.tsx
          </ThemedText>{" "}
          component uses the powerful{" "}
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>{" "}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{" "}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{" "}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
