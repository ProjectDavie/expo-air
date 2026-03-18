import React, { useState } from 'react';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

interface Props {
  onAuthenticated: () => void;
}

export default function AuthNavigator({ onAuthenticated }: Props) {
  const [screen, setScreen] = useState<'login' | 'signup'>('login');

  if (screen === 'signup') return <SignUp goToLogin={() => setScreen('login')} goToMain={onAuthenticated} />;

  return <SignIn goToSignup={() => setScreen('signup')} goToMain={onAuthenticated} />;
}