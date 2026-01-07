import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  user: null,
  isLoading: false,
  isAuthenticated: false,
  register: (name, email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
    } finally {
    }
  };

  const register = async (name, email, password) => {
    try {
      const userData = {
        id: Date.now().toString(),
        name,
        email,
        password,
      };
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);

      return { success: false, error: "Registration failed" };
    }
  };

  const login = async (email, password) => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        if (user.email === email && user.password === password) {
          setUser(user);

          return { success: true };
        }
      }
      return { success: false, error: "Invalid email or password" };
    } catch (error) {
      console.error("Login error:", error);

      return { success: false, error: "Login failed" };
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
