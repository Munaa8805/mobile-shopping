/**
 * ProductDetailScreen - Product detail screen
 *
 * This screen displays detailed information about a product including
 * images, price, ratings, color/size options, and add to cart functionality.
 */

import React, { useState } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params?.product || {
    id: 1,
    name: "Blue Jeans shirt for girls",
    price: "$15.50",
    rating: 4.0,
    description:
      "Cute lightweight distressed denim chabray jean if cute was chabray or shirts for summer casual style",
    liked: false,
  };

  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(product.liked || false);

  const colors = [
    { id: 1, name: "yellow", value: "#FFD700" },
    { id: 2, name: "purple", value: "#9370DB" },
    { id: 3, name: "green", value: "#32CD32" },
    { id: 4, name: "gray", value: "#808080" },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];

  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log("Added to cart:", {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar style="auto" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Product Image Section */}
        <View style={styles.imageSection}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityRole="button"
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.productImageContainer}>
            <View style={styles.productImage}>
              <Ionicons name="person" size={120} color="#E5E5EA" />
            </View>
          </View>
        </View>

        {/* Product Information */}
        <View style={styles.productInfo}>
          {/* Title and Favorite */}
          <View style={styles.titleRow}>
            <Text style={styles.productTitle}>{product.name}</Text>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => setIsLiked(!isLiked)}
              accessible={true}
              accessibilityLabel={isLiked ? "Remove from favorites" : "Add to favorites"}
              accessibilityRole="button"
            >
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                size={24}
                color={isLiked ? "#FF3B30" : "#000"}
              />
            </TouchableOpacity>
          </View>

          {/* Price and Rating */}
          <View style={styles.priceRow}>
            <Text style={styles.productPrice}>{product.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{product.rating}</Text>
              <Ionicons name="star" size={16} color="#FFD700" />
            </View>
          </View>

          {/* Color Selection */}
          <View style={styles.selectionSection}>
            <Text style={styles.selectionLabel}>Color</Text>
            <View style={styles.colorContainer}>
              {colors.map((color) => (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    styles.colorSwatch,
                    { backgroundColor: color.value },
                    selectedColor === color.name && styles.colorSwatchSelected,
                  ]}
                  onPress={() => setSelectedColor(color.name)}
                  accessible={true}
                  accessibilityLabel={`Select ${color.name} color`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedColor === color.name }}
                />
              ))}
            </View>
          </View>

          {/* Size Selection */}
          <View style={styles.selectionSection}>
            <Text style={styles.selectionLabel}>Size</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.sizeContainer}
            >
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeButtonSelected,
                  ]}
                  onPress={() => setSelectedSize(size)}
                  accessible={true}
                  accessibilityLabel={`Select size ${size}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selectedSize === size }}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.sizeTextSelected,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.selectionLabel}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>

          {/* Add to Cart and Quantity */}
          <View style={styles.cartSection}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={handleAddToCart}
              accessible={true}
              accessibilityLabel="Add to cart"
              accessibilityRole="button"
            >
              <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={decreaseQuantity}
                disabled={quantity <= 1}
                accessible={true}
                accessibilityLabel="Decrease quantity"
                accessibilityRole="button"
              >
                <Ionicons
                  name="remove"
                  size={20}
                  color={quantity <= 1 ? "#999" : "#000"}
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>
                {quantity.toString().padStart(2, "0")}
              </Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={increaseQuantity}
                accessible={true}
                accessibilityLabel="Increase quantity"
                accessibilityRole="button"
              >
                <Ionicons name="add" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
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
  imageSection: {
    position: "relative",
    backgroundColor: "#FF69B4",
    minHeight: 400,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productInfo: {
    padding: 16,
    backgroundColor: "#fff",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    marginRight: 12,
  },
  favoriteButton: {
    padding: 4,
    minHeight: 44,
    minWidth: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 12,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  selectionSection: {
    marginBottom: 24,
  },
  selectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  colorContainer: {
    flexDirection: "row",
    gap: 12,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "transparent",
  },
  colorSwatchSelected: {
    borderColor: "#000",
  },
  sizeContainer: {
    paddingRight: 16,
  },
  sizeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  sizeButtonSelected: {
    backgroundColor: "#FF3B30",
    borderColor: "#FF3B30",
  },
  sizeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  sizeTextSelected: {
    color: "#fff",
  },
  descriptionSection: {
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    paddingHorizontal: 8,
    minHeight: 44,
  },
  quantityButton: {
    padding: 8,
    minHeight: 44,
    minWidth: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    minWidth: 30,
    textAlign: "center",
  },
});

