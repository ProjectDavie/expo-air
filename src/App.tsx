import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from './components/MainLayout';
import PeriodicTableScreen from './screens/PeriodicTableScreen';

// Initialize the Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * Higher-Order Component (HOC) to wrap screens in our Custom Left-Tab Layout.
 * This ensures the sidebar stays on the left while the screen content 
 * is injected into the 'children' area on the right.
 */
const withLayout = (Component: React.ComponentType<any>, routeName: string) => (props: any) => (
  <MainLayout navigation={props.navigation} activeRoute={routeName}>
    <Component {...props} />
  </MainLayout>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PeriodicTable"
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="PeriodicTable">
          {withLayout(PeriodicTableScreen, 'PeriodicTable')}
        </Stack.Screen>

        <Stack.Screen name="Search">
          {withLayout(() => null, 'Search')}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {withLayout(() => null, 'Settings')}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}