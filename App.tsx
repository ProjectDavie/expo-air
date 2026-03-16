import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

// simple app showing "Hello World" in three languages
export default function App() {
  const translations = [
    { country: 'USA', text: 'Hello World' },
    { country: 'France', text: 'Bonjour le monde' },
    { country: 'Spain', text: 'Hola Mundo' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Translations</Text>
      {translations.map((t) => (
        <View key={t.country} style={styles.item}>
          <Text style={styles.country}>{t.country}</Text>
          <Text style={styles.text}>{t.text}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    marginBottom: 12,
    alignItems: 'center',
  },
  country: {
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
  },
});
