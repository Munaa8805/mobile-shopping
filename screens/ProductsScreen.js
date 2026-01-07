/**
 * ProductsScreen - All products listing screen
 *
 * This screen displays all products in a grid/list layout.
 * Screen components handle data fetching and navigation.
 */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProductsScreen() {
  const navigation = useNavigation();
  const [products] = useState([
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
    {
      id: 5,
      name: "Product 5",
      price: "$29.99",
      rating: 4.2,
      liked: false,
      description: "Product description here",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$45.99",
      rating: 4.8,
      liked: true,
      description: "Product description here",
    },
    {
      id: 7,
      name: "Product 7",
      price: "$35.99",
      rating: 3.8,
      liked: false,
      description: "Product description here",
    },
    {
      id: 8,
      name: "Product 8",
      price: "$55.99",
      rating: 4.9,
      liked: true,
      description: "Product description here",
    },
  ]);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
      accessible={true}
      accessibilityLabel={`${item.name}, ${item.price}`}
      accessibilityRole="button"
    >
      <View style={styles.productImage}>
        <Ionicons name="person" size={50} color="#E5E5EA" />
      </View>
      <TouchableOpacity
        style={styles.likeButton}
        accessible={true}
        accessibilityLabel={item.liked ? "Unlike" : "Like"}
        accessibilityRole="button"
      >
        <Ionicons
          name={item.liked ? "heart" : "heart-outline"}
          size={20}
          color={item.liked ? "#FF3B30" : "#000"}
        />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityRole="button"
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Products</Text>
        <View style={styles.headerButton} />
      </View>

      {/* Products Grid */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  productsList: {
    padding: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    padding: 12,
    marginBottom: 16,
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
    marginBottom: 8,
    minHeight: 36,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
});
