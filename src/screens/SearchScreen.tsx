import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <TextInput 
        placeholder="Search element..." 
        style={styles.input} 
      />

      {[...Array(50)].map((_, i) => (
        <View key={i} style={styles.item}>
          <Text style={styles.itemText}>Element #{i + 1} - Placeholder</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { 
    padding: 12, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    marginBottom: 16 
  },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemText: { fontSize: 16 },
});