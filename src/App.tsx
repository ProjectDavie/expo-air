import React, { useState } from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) return <MainNavigator onSignOut={() => setIsAuthenticated(false)} />;

  return <AuthNavigator onAuthenticated={() => setIsAuthenticated(true)} />;
}