import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GroupsScreen({ navigation }) {
  const groups = [
    'Alkali Metals', 'Alkaline Earth Metals', 'Transition Metals',
    'Post-Transition Metals', 'Metalloids', 'Nonmetals',
    'Halogens', 'Noble Gases', 'Lanthanides', 'Actinides'
  ];

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('WhiteBoard')} style={styles.button}>
        <Text style={styles.buttonText}>Go to Groups Index</Text>
      </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: { flex: 1, padding: 16 },
  group: { marginBottom: 24 },
  groupTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  button: { backgroundColor: 'blue', padding: 10, margin: 16, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center' },
});