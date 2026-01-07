# Property App

A React Native application built with Expo, following clean architecture principles and best practices.

## 🚀 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform and tooling
- **React Context API** - State management
- **JavaScript (JSX)** - No TypeScript

## 📁 Project Structure

```
property-app/
├── components/        # Reusable UI components (no API calls, no navigation)
├── screens/          # Screen-level components (handles data fetching & navigation)
├── hooks/            # Custom React hooks (logic only, no JSX)
├── context/          # React Context providers (global state)
├── utility/          # Constants, helpers (framework-agnostic)
├── assets/           # Images, fonts, and other static assets
├── App.js            # Root component
└── index.js          # Entry point
```

## 🏗️ Architecture Rules

### Folder Responsibilities

- **components/** - Reusable UI components, no API calls, no navigation logic
- **screens/** - Page/screen-level components, handles data fetching & navigation
- **hooks/** - Custom React hooks only, logic only (no JSX)
- **context/** - React Context providers, shared/global state only, fully documented
- **utility/** - Constants, helpers, framework-agnostic logic

### State Management

- **Local state**: `useState`, `useReducer`
- **Global state**: React Context API
- Avoid prop drilling beyond 2 levels
- Context must be documented and isolated

### Accessibility

All interactive elements must include:
- `accessible={true}`
- `accessibilityLabel`
- Minimum touch target height: 44px
- Keyboard & screen-reader friendly

### Performance

- Use `FlatList` for large lists
- Use `React.memo` for expensive components
- Use `useMemo` and `useCallback` when appropriate
- Implement lazy loading for screens when needed

## 🚫 Restrictions

- ❌ No TypeScript (use JavaScript/JSX only)
- ❌ No frontend logic in backend
- ❌ No backend logic in frontend
- ❌ No hardcoded UI constants (use utility/constants.js)
- ❌ No logic in routes
- ❌ No skipping validation or error handling

## 📝 Comments & Documentation

- Every component includes a purpose comment
- Hooks and Context include JSDoc
- Complex UI logic explained inline
- Undocumented code is considered incomplete

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Expo CLI (installed globally or via npx)
- Expo Go app on your mobile device (for testing)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on specific platform:
```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

### Development

- Use Expo Go app to scan QR code for quick testing
- Hot reloading is enabled by default
- Check console for errors and warnings

## 📱 Mobile-First Approach

- Design mobile-first
- Use Flexbox for layouts
- Use `Dimensions` or `useWindowDimensions` for responsive design
- No hardcoded widths or heights

## 🔧 Configuration

- **app.json** - Expo configuration
- **package.json** - Dependencies and scripts

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Context API](https://react.dev/reference/react/useContext)

## 📄 License

Private project
