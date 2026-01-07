/**
 * ShortcutsSection - Horizontal shortcuts section component
 *
 * Displays a horizontal scrollable list of user shortcuts.
 */

import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ShortcutsSection({ shortcuts = [] }) {
  return (
    <View style={styles.shortcutsSection}>
      <Text style={styles.shortcutsTitle}>Your shortcuts</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.shortcutsContainer}
      >
        {shortcuts.map((shortcut, index) => (
          <TouchableOpacity
            key={index}
            style={styles.shortcutItem}
            accessible={true}
            accessibilityLabel={shortcut.label}
            accessibilityRole="button"
          >
            <View
              style={[
                styles.shortcutIconContainer,
                { backgroundColor: shortcut.bgColor },
              ]}
            >
              <Ionicons name={shortcut.icon} size={32} color="#fff" />
            </View>
            <Text style={styles.shortcutLabel} numberOfLines={1}>
              {shortcut.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shortcutsSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5EA",
  },
  shortcutsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  shortcutsContainer: {
    paddingRight: 16,
  },
  shortcutItem: {
    alignItems: "center",
    marginRight: 16,
    width: 80,
  },
  shortcutIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  shortcutLabel: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    fontWeight: "500",
    width: 80,
  },
});

