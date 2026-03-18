import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { ELEMENTS, ElementData } from '../../data/elements';
import { ElementCell } from '../../components/ElementCell';

const MAX_ROW = 9;
const MAX_COL = 18;
const CELL_SIZE = 38;

export default function PeriodicTableScreen() {
  // Pre-process grid
  const grid: (ElementData | null)[][] = Array.from({ length: MAX_ROW }, () =>
    Array(MAX_COL).fill(null)
  );
  
  ELEMENTS.forEach((el) => {
    grid[el.row - 1][el.col - 1] = el;
  });

  const handlePress = (el: ElementData) => {
    Alert.alert(`${el.name} (#${el.number})`, el.funFact);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Periodic Table</Text>

      {/* Horizontal Scroll for the Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ width: MAX_COL * CELL_SIZE }}>
          {grid.map((row, rIdx) => (
            <View key={`row-${rIdx}`} style={styles.row}>
              {row.map((cell, cIdx) => (
                cell ? (
                  <ElementCell 
                    key={cell.number} 
                    element={cell} 
                    size={CELL_SIZE} 
                    onPress={handlePress} 
                  />
                ) : (
                  <View key={`empty-${rIdx}-${cIdx}`} style={[styles.empty, { width: CELL_SIZE, height: CELL_SIZE }]} />
                )
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Vertical List of Fun Facts */}
      <Text style={styles.subtitle}>Fun Facts List</Text>
      {ELEMENTS.map((el) => (
        <View key={el.number} style={styles.factCard}>
          <Text style={styles.factTitle}>{el.symbol} - {el.name}</Text>
          <Text style={styles.factBody}>{el.funFact}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1e2b3a' },
  subtitle: { fontSize: 20, fontWeight: '600', marginTop: 30, marginBottom: 10 },
  row: { flexDirection: 'row' },
  empty: { backgroundColor: 'transparent' },
  factCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  factTitle: { fontWeight: 'bold', fontSize: 16, color: '#2c3e50' },
  factBody: { fontSize: 14, color: '#555', marginTop: 4 },
});