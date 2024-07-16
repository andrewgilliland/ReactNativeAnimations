import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "../components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="animated"
        options={{
          title: "Animated",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"logo-react"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reanimated"
        options={{
          title: "Reanimated",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "extension-puzzle" : "extension-puzzle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="skia"
        options={{
          title: "Skia",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "paper-plane" : "paper-plane-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
