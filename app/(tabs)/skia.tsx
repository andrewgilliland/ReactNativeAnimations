import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "../components/Collapsible";
import { ExternalLink } from "../components/ExternalLink";
import ParallaxScrollView from "../components/ParallaxScrollView";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";
import SkiaHelloWorld from "../components/SkiaHelloWorld";
import { SkiaAnimations } from "../components/SkiaAnimations";
import Animated from "react-native-reanimated";
import { AnimatedGradient } from "../components/AnimatedGradient";
import { AnimationWithTouchHandler } from "../components/AnimationWithTouchHandler";
import { ElementTracking } from "../components/ElementTracking";
import BackgroundGradient from "../components/BackgroundGradient";

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
        <BackgroundGradient width={300} height={200} />
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
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
