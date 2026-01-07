/**
 * HomeScreen - Explore/Home screen
 *
 * This screen displays the main explore feed with stories, promotional banners,
 * categories, and popular products.
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const stories = [
    { id: 1, image: "women", text: "40% sales", color: "#FF6B6B" },
    { id: 2, image: "man", text: "New arrival", color: "#4ECDC4" },
    { id: 3, image: "bag", text: "33% sales", color: "#FFE66D" },
  ];

  const categories = [
    { id: 1, label: "Best selling", active: true },
    { id: 2, label: "For women", active: false },
    { id: 3, label: "New", active: false },
    { id: 4, label: "Men", active: false },
    { id: 5, label: "Kids", active: false },
  ];

  const products = [
    {
      id: 1,
      name: "Blue Jeans shirt for girls",
      price: "$15.50",
      rating: 4.0,
      liked: false,
      description:
        "Cute lightweight distressed denim chabray jean if cute was chabray or shirts for summer casual style",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      rating: 4.5,
      liked: true,
      description: "Product description here",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$49.99",
      rating: 3.5,
      liked: false,
      description: "Product description here",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$59.99",
      rating: 5.0,
      liked: true,
      description: "Product description here",
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
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Explore</Text>
          <TouchableOpacity
            style={styles.headerButton}
            accessible={true}
            accessibilityLabel="Notifications"
            accessibilityRole="button"
          >
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Stories Section */}
        <View style={styles.storiesSection}>
          <Text style={styles.sectionTitle}>Stories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesContainer}
          >
            {stories.map((story) => (
              <TouchableOpacity
                key={story.id}
                style={[styles.storyCard, { backgroundColor: story.color }]}
                accessible={true}
                accessibilityLabel={story.text}
                accessibilityRole="button"
              >
                <View style={styles.storyContent}>
                  <Ionicons name="person" size={40} color="#fff" />
                  <Text style={styles.storyText}>{story.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Promotional Banner */}
        <View style={styles.bannerSection}>
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>
                New arrival and special discount!
              </Text>
              <TouchableOpacity
                style={styles.bannerButton}
                accessible={true}
                accessibilityLabel="View all offers"
                accessibilityRole="button"
              >
                <Text style={styles.bannerButtonText}>all offers</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bannerImage}>
              <Ionicons name="people" size={60} color="#fff" />
            </View>
          </View>
        </View>

        {/* Category Filter */}
        <View style={styles.categoriesSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  category.active && styles.categoryButtonActive,
                ]}
                accessible={true}
                accessibilityLabel={category.label}
                accessibilityRole="button"
                accessibilityState={{ selected: category.active }}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category.active && styles.categoryTextActive,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Products Section */}
        <View style={styles.productsSection}>
          <View style={styles.productsHeader}>
            <Text style={styles.sectionTitle}>Popular products</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Products")}
              accessible={true}
              accessibilityLabel="See all products"
              accessibilityRole="button"
            >
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          >
            {products.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate("ProductDetail", { product })
                }
                accessible={true}
                accessibilityLabel={`${product.name}, ${product.price}`}
                accessibilityRole="button"
              >
                <View style={styles.productImage}>
                  <Ionicons name="person" size={50} color="#E5E5EA" />
                </View>
                <TouchableOpacity
                  style={styles.likeButton}
                  accessible={true}
                  accessibilityLabel={product.liked ? "Unlike" : "Like"}
                  accessibilityRole="button"
                >
                  <Ionicons
                    name={product.liked ? "heart" : "heart-outline"}
                    size={20}
                    color={product.liked ? "#FF3B30" : "#000"}
                  />
                </TouchableOpacity>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  storiesSection: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  storiesContainer: {
    paddingRight: 16,
  },
  storyCard: {
    width: 120,
    height: 160,
    borderRadius: 12,
    marginRight: 12,
    padding: 12,
    justifyContent: "flex-end",
  },
  storyContent: {
    alignItems: "center",
  },
  storyText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
  },
  bannerSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  banner: {
    backgroundColor: "#1E3A8A",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 160,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "center",
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  bannerButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
    minHeight: 44,
    justifyContent: "center",
  },
  bannerButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "lowercase",
  },
  bannerImage: {
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesSection: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  categoriesContainer: {
    paddingRight: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#F0F2F5",
    marginRight: 8,
    minHeight: 44,
    justifyContent: "center",
  },
  categoryButtonActive: {
    backgroundColor: "#FF3B30",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  categoryTextActive: {
    color: "#fff",
  },
  productsSection: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  productsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1877F2",
  },
  productsContainer: {
    paddingRight: 16,
  },
  productCard: {
    width: 160,
    marginRight: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    padding: 12,
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 140,
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  likeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productInfo: {
    marginTop: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
