// D:\ProjectDavie\CODE\expo-air\src\App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainLayout from '../components/MainLayout';
import PeriodicTableScreen from '../screens/main/PeriodicTableScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import SearchScreen from '../screens/main/SearchScreen';
import FavoritesScreen from '../screens/main/FavoritesScreen';
import GroupsScreen from '../screens/main/GroupsScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

// Initialize the Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * Higher-Order Component (HOC) to wrap screens in our Custom Left-Tab Layout.
 */
const withLayout = (Component: React.ComponentType<any>, routeName: string) => (props: any) => (
  <MainLayout navigation={props.navigation} activeRoute={routeName}>
    <Component {...props} />
  </MainLayout>
);

export default function MainNavigator() {
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
          {withLayout(SearchScreen, 'Search')}
        </Stack.Screen>

        <Stack.Screen name="Favorites">
          {withLayout(FavoritesScreen, 'Favorites')}
        </Stack.Screen>

        <Stack.Screen name="Groups">
          {withLayout(GroupsScreen, 'Groups')}
        </Stack.Screen>

        <Stack.Screen name="Profile">
          {withLayout(ProfileScreen, 'Profile')}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {withLayout(SettingsScreen, 'Settings')}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}