import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function GroupsScreen() {
  const groups = [
    'Alkali Metals', 'Alkaline Earth Metals', 'Transition Metals',
    'Post-Transition Metals', 'Metalloids', 'Nonmetals',
    'Halogens', 'Noble Gases', 'Lanthanides', 'Actinides'
  ];

  return (
    <ScrollView style={styles.container}>
      {groups.map((group, i) => (
        <View key={i} style={styles.group}>
          <Text style={styles.groupTitle}>{group}</Text>
          {[...Array(12)].map((_, j) => (
            <Text key={j}>Element #{j + 1} in {group}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  group: { marginBottom: 24 },
  groupTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});