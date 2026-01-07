/**
 * Constants - Application-wide constants
 * 
 * This file contains all hardcoded constants used throughout the application.
 * Constants should be framework-agnostic and reusable.
 */

// API endpoints
export const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://api.yourdomain.com/api';

// App configuration
export const APP_CONFIG = {
  name: 'Property App',
  version: '1.0.0',
};

// Colors (framework-agnostic)
export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  error: '#FF3B30',
  warning: '#FF9500',
  background: '#FFFFFF',
  text: '#000000',
  textSecondary: '#666666',
  border: '#E5E5E5',
};

// Sizes
export const SIZES = {
  padding: 16,
  margin: 16,
  borderRadius: 8,
  minTouchTarget: 44, // Minimum touch target for accessibility
};

// Timeouts
export const TIMEOUTS = {
  api: 30000,
  debounce: 300,
};

