import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Favorite Elements</Text>
      {[...Array(30)].map((_, i) => (
        <View key={i} style={styles.item}>
          <Text>Favorite Element #{i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
});