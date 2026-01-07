/**
 * FriendsScreen - All categories screen
 *
 * This screen displays all fashion categories with promotional banners.
 * Screen components handle data fetching and navigation.
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FriendsScreen() {
  const navigation = useNavigation();
  const categories = [
    {
      id: 1,
      title: "Men's fashion",
      icon: "person",
    },
    {
      id: 2,
      title: "Women's fashion",
      icon: "person",
    },
    {
      id: 3,
      title: "Child's fashion",
      icon: "person",
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar style="auto" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerButton}
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityRole="button"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All categories</Text>
          <View style={styles.headerButton} />
        </View>

        {/* Summer Sale Banner */}
        <View style={styles.bannerSection}>
          <TouchableOpacity
            style={styles.summerBanner}
            accessible={true}
            accessibilityLabel="Summer sale"
            accessibilityRole="button"
          >
            <View style={styles.bannerContent}>
              <Text style={styles.bannerText}>Summer sale</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </View>
            <View style={styles.bannerImage}>
              <Ionicons name="bag" size={60} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Category Cards */}
        <View style={styles.categoriesSection}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              accessible={true}
              accessibilityLabel={category.title}
              accessibilityRole="button"
            >
              <View style={styles.categoryContent}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </View>
              <View style={styles.categoryImage}>
                <Ionicons name={category.icon} size={80} color="#E5E5EA" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5EA",
  },
  headerButton: {
    padding: 4,
    minHeight: 44,
    minWidth: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  bannerSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  summerBanner: {
    backgroundColor: "#FF3B30",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 140,
  },
  bannerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  categoryCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    minHeight: 120,
  },
  categoryContent: {
    flex: 1,
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  categoryImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
  },
});
