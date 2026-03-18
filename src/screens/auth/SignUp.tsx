import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

interface Props {
  goToLogin: () => void;
  goToMain: () => void;
}

export default function SignUp({ goToLogin, goToMain }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { width } = useWindowDimensions();

  const isDesktop = width >= 768;

  const handleSignup = () => {
    if (username.trim() && password.trim()) {
      alert('Account created successfully!');
      goToMain();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={[styles.container, isDesktop && styles.row]}>

      {/* 🔥 LEFT PANEL */}
      {isDesktop && (
        <View style={styles.leftPanel}>
          <View>
            <Text style={styles.brandTitle}>
              Join Periodic App
            </Text>

            <Text style={styles.brandText}>
              Create your account to explore elements, save favorites,
              and enhance your chemistry learning journey.
            </Text>
          </View>

          <Text style={styles.footer}>
            © {new Date().getFullYear()} Periodic App
          </Text>
        </View>
      )}

      {/* 🔥 RIGHT PANEL */}
      <View style={styles.rightPanel}>
        <View style={styles.formBox}>

          <Text style={styles.welcome}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>

          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.switchText}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  row: {
    flexDirection: 'row',
  },

  /* LEFT PANEL */
  leftPanel: {
    flex: 1,
    backgroundColor: '#000',
    padding: 40,
    justifyContent: 'space-between',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },

  brandTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  brandText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },

  footer: {
    color: '#555',
    fontSize: 12,
  },

  /* RIGHT PANEL */
  rightPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  formBox: {
    width: '100%',
    maxWidth: 400,
  },

  welcome: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },

  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  switchText: {
    textAlign: 'center',
    color: '#007AFF',
  },
});