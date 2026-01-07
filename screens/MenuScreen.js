/**
 * MenuScreen - Menu/Settings screen
 *
 * This screen displays the app menu and settings.
 * Screen components handle data fetching and navigation.
 */

import React, { useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../context/AuthContext";
import MenuHeader from "../components/MenuHeader";
import UserProfileSection from "../components/UserProfileSection";
import ShortcutsSection from "../components/ShortcutsSection";
import MenuGrid from "../components/MenuGrid";

export default function MenuScreen() {
  const userCtx = useContext(AuthContext);
  const userName = userCtx.user?.name || "Munaa Tse";
  const logout = userCtx.logout;
  const shortcuts = [
    { icon: "person", label: "The Mo...", bgColor: "#8B4513" },
    { icon: "shield", label: "City of C...", bgColor: "#808080" },
    { icon: "car", label: "LIME Mo...", bgColor: "#32CD32" },
    { icon: "people", label: "Калгари...", bgColor: "#4169E1" },
    { icon: "trophy", label: "Premier L...", bgColor: "#9370DB" },
  ];

  const menuItems = [
    { icon: "storefront-outline", label: "Marketplace" },
    { icon: "people-outline", label: "Groups" },
    { icon: "time-outline", label: "Memories" },
    { icon: "bookmark-outline", label: "Saved" },
    { icon: "play-circle-outline", label: "Reels" },
    { icon: "people-outline", label: "Friends" },
    { icon: "wifi-outline", label: "Feeds" },
    { icon: "heart-outline", label: "Dating" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar style="auto" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <MenuHeader />
        <UserProfileSection userName={userName} logout={logout} />
        <ShortcutsSection shortcuts={shortcuts} />
        <MenuGrid menuItems={menuItems} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
});
