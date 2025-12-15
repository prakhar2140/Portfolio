import React from "react";
import { View, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; // <--- Zaroori hai
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectScreen";
import JourneyScreen from "./screens/JourneyScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: {
              backgroundColor: "#0f172a",
              borderTopWidth: 0,
              height: Platform.OS === "ios" ? 85 : 65,
              paddingBottom: Platform.OS === "ios" ? 20 : 10,
              paddingTop: 0,
            },
            tabBarActiveTintColor: "#22d3ee",
            tabBarInactiveTintColor: "#64748b",
            tabBarIcon: ({ focused, color }) => {
              if (route.name === "Home")
                return (
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={30}
                    color={color}
                  />
                );
              if (route.name === "Projects")
                return <Feather name="folder" size={30} color={color} />;
              if (route.name === "Journey")
                return <Feather name="trending-up" size={30} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
          <Tab.Screen name="Journey" component={JourneyScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
