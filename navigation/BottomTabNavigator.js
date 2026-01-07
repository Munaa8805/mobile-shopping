import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import FriendsScreen from "../screens/FriendsScreen";
import GroupsScreen from "../screens/GroupsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MenuScreen from "../screens/MenuScreen";

const Tab = createBottomTabNavigator();

/**
 * BottomTabNavigator - Main bottom tab navigator component
 */
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1877F2", // Facebook blue
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#E5E5EA",
          paddingHorizontal: 20,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={typeof size === "number" ? size : 24}
              color={color}
            />
          ),
          tabBarLabel: "Home",
          tabBarAccessibilityLabel: "Home tab",
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={typeof size === "number" ? size : 24}
              color={color}
            />
          ),
          tabBarLabel: "Friends",
          tabBarAccessibilityLabel: "Friends tab",
        }}
      />

      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people-circle" : "people-circle-outline"}
              size={typeof size === "number" ? size : 24}
              color={color}
            />
          ),
          tabBarLabel: "Groups",
          tabBarAccessibilityLabel: "Groups tab",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={typeof size === "number" ? size : 24}
              color={color}
            />
          ),
          tabBarLabel: "Notifications",
          tabBarAccessibilityLabel: "Notifications tab",
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              size={typeof size === "number" ? size : 24}
              color={color}
            />
          ),
          tabBarLabel: "Menu",
          tabBarAccessibilityLabel: "Menu tab",
        }}
      />
    </Tab.Navigator>
  );
}
