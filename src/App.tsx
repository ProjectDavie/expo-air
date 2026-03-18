import React, { useState } from 'react';
import SignIn from './screens/(auth)/SignIn';
import SignUp from './screens/(auth)/SignUp';
import MainApp from './MainApp';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'signup' | 'main'>('login');

  if (screen === 'main') return <MainApp />;
  if (screen === 'signup') return <SignUp goToLogin={() => setScreen('login')} goToMain={() => setScreen('main')} />;

  return <SignIn goToSignup={() => setScreen('signup')} goToMain={() => setScreen('main')} />;
}