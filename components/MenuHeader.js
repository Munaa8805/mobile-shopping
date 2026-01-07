/**
 * MenuHeader - Header component for Menu screen
 *
 * Displays the Menu title and action icons (settings and search).
 */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MenuHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Menu</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity
          style={styles.iconButton}
          accessible={true}
          accessibilityLabel="Settings"
          accessibilityRole="button"
        >
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          accessible={true}
          accessibilityLabel="Search"
          accessibilityRole="button"
        >
          <Ionicons name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5EA",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 4,
    minHeight: 44,
    minWidth: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});

