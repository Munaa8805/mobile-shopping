/**
 * UserProfileSection - User profile section component
 *
 * Displays user profile information and create page button.
 */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserProfileSection({ userName = "Munaa Tse", logout }) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.profileRow}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Ionicons name="person" size={40} color="#666" />
          </View>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{userName}</Text>
        </View>
        <TouchableOpacity
          style={styles.chevronButton}
          accessible={true}
          accessibilityLabel="More options"
          accessibilityRole="button"
          onPress={() => {
            logout();
          }}
        >
          <Ionicons name="exit-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={styles.createPageButton}
        accessible={true}
        accessibilityLabel="Create Facebook Page"
        accessibilityRole="button"
      >
        <Ionicons name="add-circle-outline" size={20} color="#1877F2" />
        <Text style={styles.createPageText}>Create Facebook Page</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5EA",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  profileImageContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E5E5EA",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  chevronButton: {
    padding: 4,
    minHeight: 44,
    minWidth: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  createPageButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    minHeight: 44,
  },
  createPageText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#1877F2",
  },
});
