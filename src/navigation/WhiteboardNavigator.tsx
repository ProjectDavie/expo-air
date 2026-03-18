import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainLayout from '../components/MainLayout';
import WhiteBoard from '../screens/main/whiteboard/WhiteBoard';

// Initialize the Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * Higher-Order Component (HOC) to wrap screens in our Custom Left-Tab Layout.
 */
const withLayout = (Component: React.ComponentType<any>, routeName: string, onSignOut: () => void) => (props: any) => (
  <MainLayout navigation={props.navigation} activeRoute={routeName} onSignOut={onSignOut}>
    <Component {...props} />
  </MainLayout>
);

export default function WhiteboardNavigator({ onSignOut }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WhiteBoard"
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="WhiteBoard">
          {withLayout(WhiteBoard, 'WhiteBoard', onSignOut)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}