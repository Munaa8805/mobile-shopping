import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import CreateScreen from "./screens/CreateScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductsScreen from "./screens/ProductsScreen";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const userCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      key={userCtx.user ? "authenticated" : "unauthenticated"}
      screenOptions={{ headerShown: false }}
      initialRouteName={userCtx.user ? "TabNavigator" : "Register"}
    >
      {userCtx.user ? (
        <>
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={CreateScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

const Root = () => {
  return <Navigation />;
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
