import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "../components/HelloWave";
import ParallaxScrollView from "../components/ParallaxScrollView";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native Animations</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          This app was created to explore the features and differences between
          three React Native animation libraries.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">React Native Animated</ThemedText>
        <ThemedText>
          The Animated library is designed to make animations fluid, powerful,
          and painless to build and maintain.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">React Native Reanimated</ThemedText>
        <ThemedText>
          With Reanimated, you can easily create smooth animations and
          interactions that run on the UI thread.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">React Native Skia</ThemedText>
        <ThemedText>
          React Native Skia brings the Skia Graphics Library to React Native.
          Skia serves as the graphics engine for Google Chrome and Chrome OS,
          Android, Flutter, Mozilla Firefox and Firefox OS, and many other
          products.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
