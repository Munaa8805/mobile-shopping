/**
 * MenuGrid - Menu options grid component
 *
 * Displays a grid of menu options with icons and labels.
 */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MenuGrid({ menuItems = [], onSeeMore }) {
  return (
    <View style={styles.menuSection}>
      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            accessible={true}
            accessibilityLabel={item.label}
            accessibilityRole="button"
          >
            <View style={styles.menuIconContainer}>
              <Ionicons name={item.icon} size={24} color="#000" />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.seeMoreButton}
        onPress={onSeeMore}
        accessible={true}
        accessibilityLabel="See more"
        accessibilityRole="button"
      >
        <Text style={styles.seeMoreText}>See more</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuItem: {
    width: "48%",
    alignItems: "start",
    marginBottom: 12,
    minHeight: 100,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  menuIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#F0F2F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  menuLabel: {
    fontSize: 18,
    color: "#000",
    textAlign: "start",
    fontWeight: "500",
  },
  seeMoreButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
    minHeight: 44,
    justifyContent: "center",
  },
  seeMoreText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
