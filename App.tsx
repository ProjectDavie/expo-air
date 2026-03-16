import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Element category colors (vibrant and distinguishable)
const categoryColors = {
  'alkali metal': '#ff6b6b',        // red
  'alkaline earth': '#feca57',       // orange-yellow
  'transition metal': '#48dbfb',     // light blue
  'post-transition metal': '#1dd1a1', // mint
  'metalloid': '#f368e0',             // pink
  'nonmetal': '#5f27cd',              // purple
  'halogen': '#ff9ff3',                // light pink
  'noble gas': '#00d2d3',              // cyan
  'lanthanide': '#f6e58d',             // light yellow
  'actinide': '#ffaf40',                // orange
};

// Element data: symbol, name, number, category, funFact, row, column
const elements = [
  // Row 1
  { symbol: 'H', name: 'Hydrogen', number: 1, category: 'nonmetal', funFact: 'Hydrogen is the most abundant element in the universe.', row: 1, col: 1 },
  { symbol: 'He', name: 'Helium', number: 2, category: 'noble gas', funFact: 'Helium is the second lightest element and makes balloons float.', row: 1, col: 18 },
  // Row 2
  { symbol: 'Li', name: 'Lithium', number: 3, category: 'alkali metal', funFact: 'Lithium is used in batteries and mood-stabilizing drugs.', row: 2, col: 1 },
  { symbol: 'Be', name: 'Beryllium', number: 4, category: 'alkaline earth', funFact: 'Beryllium is used in aerospace materials.', row: 2, col: 2 },
  { symbol: 'B', name: 'Boron', number: 5, category: 'metalloid', funFact: 'Boron is essential for plant growth.', row: 2, col: 13 },
  { symbol: 'C', name: 'Carbon', number: 6, category: 'nonmetal', funFact: 'Carbon is the basis of all known life.', row: 2, col: 14 },
  { symbol: 'N', name: 'Nitrogen', number: 7, category: 'nonmetal', funFact: 'Nitrogen makes up 78% of Earth’s atmosphere.', row: 2, col: 15 },
  { symbol: 'O', name: 'Oxygen', number: 8, category: 'nonmetal', funFact: 'Oxygen is essential for respiration.', row: 2, col: 16 },
  { symbol: 'F', name: 'Fluorine', number: 9, category: 'halogen', funFact: 'Fluorine is the most reactive element.', row: 2, col: 17 },
  { symbol: 'Ne', name: 'Neon', number: 10, category: 'noble gas', funFact: 'Neon is used in bright signs.', row: 2, col: 18 },
  // Row 3
  { symbol: 'Na', name: 'Sodium', number: 11, category: 'alkali metal', funFact: 'Sodium reacts violently with water.', row: 3, col: 1 },
  { symbol: 'Mg', name: 'Magnesium', number: 12, category: 'alkaline earth', funFact: 'Magnesium is used in alloys and fireworks.', row: 3, col: 2 },
  { symbol: 'Al', name: 'Aluminium', number: 13, category: 'post-transition metal', funFact: 'Aluminium is the most abundant metal in Earth’s crust.', row: 3, col: 13 },
  { symbol: 'Si', name: 'Silicon', number: 14, category: 'metalloid', funFact: 'Silicon is used in computer chips.', row: 3, col: 14 },
  { symbol: 'P', name: 'Phosphorus', number: 15, category: 'nonmetal', funFact: 'Phosphorus glows in the dark.', row: 3, col: 15 },
  { symbol: 'S', name: 'Sulfur', number: 16, category: 'nonmetal', funFact: 'Sulfur smells like rotten eggs.', row: 3, col: 16 },
  { symbol: 'Cl', name: 'Chlorine', number: 17, category: 'halogen', funFact: 'Chlorine is used to disinfect water.', row: 3, col: 17 },
  { symbol: 'Ar', name: 'Argon', number: 18, category: 'noble gas', funFact: 'Argon is used in light bulbs to protect filaments.', row: 3, col: 18 },
  // Row 4 (full)
  { symbol: 'K', name: 'Potassium', number: 19, category: 'alkali metal', funFact: 'Potassium is essential for nerve function.', row: 4, col: 1 },
  { symbol: 'Ca', name: 'Calcium', number: 20, category: 'alkaline earth', funFact: 'Calcium is important for bones and teeth.', row: 4, col: 2 },
  { symbol: 'Sc', name: 'Scandium', number: 21, category: 'transition metal', funFact: 'Scandium is used in aerospace components.', row: 4, col: 3 },
  { symbol: 'Ti', name: 'Titanium', number: 22, category: 'transition metal', funFact: 'Titanium is as strong as steel but much lighter.', row: 4, col: 4 },
  { symbol: 'V', name: 'Vanadium', number: 23, category: 'transition metal', funFact: 'Vanadium strengthens steel.', row: 4, col: 5 },
  { symbol: 'Cr', name: 'Chromium', number: 24, category: 'transition metal', funFact: 'Chromium is used for chrome plating.', row: 4, col: 6 },
  { symbol: 'Mn', name: 'Manganese', number: 25, category: 'transition metal', funFact: 'Manganese is essential for iron production.', row: 4, col: 7 },
  { symbol: 'Fe', name: 'Iron', number: 26, category: 'transition metal', funFact: 'Iron is the most common element on Earth by mass.', row: 4, col: 8 },
  { symbol: 'Co', name: 'Cobalt', number: 27, category: 'transition metal', funFact: 'Cobalt is used in magnets and batteries.', row: 4, col: 9 },
  { symbol: 'Ni', name: 'Nickel', number: 28, category: 'transition metal', funFact: 'Nickel is used in coins and stainless steel.', row: 4, col: 10 },
  { symbol: 'Cu', name: 'Copper', number: 29, category: 'transition metal', funFact: 'Copper is an excellent conductor of electricity.', row: 4, col: 11 },
  { symbol: 'Zn', name: 'Zinc', number: 30, category: 'transition metal', funFact: 'Zinc is used to galvanize steel.', row: 4, col: 12 },
  { symbol: 'Ga', name: 'Gallium', number: 31, category: 'post-transition metal', funFact: 'Gallium melts in your hand.', row: 4, col: 13 },
  { symbol: 'Ge', name: 'Germanium', number: 32, category: 'metalloid', funFact: 'Germanium is used in semiconductors.', row: 4, col: 14 },
  { symbol: 'As', name: 'Arsenic', number: 33, category: 'metalloid', funFact: 'Arsenic is poisonous but used in some alloys.', row: 4, col: 15 },
  { symbol: 'Se', name: 'Selenium', number: 34, category: 'nonmetal', funFact: 'Selenium is used in photocells.', row: 4, col: 16 },
  { symbol: 'Br', name: 'Bromine', number: 35, category: 'halogen', funFact: 'Bromine is one of two elements that are liquid at room temperature.', row: 4, col: 17 },
  { symbol: 'Kr', name: 'Krypton', number: 36, category: 'noble gas', funFact: 'Krypton is used in some photographic flashes.', row: 4, col: 18 },
  // Row 5 (partial)
  { symbol: 'Rb', name: 'Rubidium', number: 37, category: 'alkali metal', funFact: 'Rubidium is used in atomic clocks.', row: 5, col: 1 },
  { symbol: 'Sr', name: 'Strontium', number: 38, category: 'alkaline earth', funFact: 'Strontium compounds give fireworks a red color.', row: 5, col: 2 },
];

// Build a 2D grid (rows 1-7, columns 1-18) for easy rendering
const maxRow = 7;
const maxCol = 18;
// Initialize grid with nulls
const grid: (typeof elements[0] | null)[][] = Array.from({ length: maxRow }, () =>
  Array(maxCol).fill(null)
);
elements.forEach((el) => {
  if (el.row <= maxRow && el.col <= maxCol) {
    grid[el.row - 1][el.col - 1] = el; // zero-based indices
  }
});

// Cell size (adjustable)
const CELL_SIZE = 40;

export default function App() {
  // Handle element tap
  const showFunFact = (element: typeof elements[0]) => {
    Alert.alert(
      `${element.name} (${element.symbol})`,
      element.funFact
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Periodic Table</Text>

        {/* Horizontally scrollable grid */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ width: maxCol * CELL_SIZE }}>
            {grid.map((row, rowIdx) => (
              <View key={`row-${rowIdx}`} style={styles.row}>
                {row.map((cell, colIdx) => {
                  const key = `cell-${rowIdx}-${colIdx}`;
                  if (!cell) {
                    // Empty cell: keep as placeholder for alignment
                    return (
                      <View
                        key={key}
                        style={[styles.cell, styles.emptyCell]}
                      />
                    );
                  }
                  return (
                    <TouchableOpacity
                      key={key}
                      style={[
                        styles.cell,
                        { backgroundColor: categoryColors[cell.category] },
                      ]}
                      onPress={() => showFunFact(cell)}
                    >
                      <Text style={styles.symbol}>{cell.symbol}</Text>
                      <Text style={styles.number}>{cell.number}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Fun Facts List */}
        <Text style={styles.subtitle}>Fun Facts</Text>
        <View style={styles.factsContainer}>
          {elements.map((el) => (
            <View key={el.number} style={styles.factItem}>
              <Text style={styles.factSymbol}>
                {el.symbol} - {el.name}
              </Text>
              <Text style={styles.factText}>{el.funFact}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
    color: '#2c3e50',
  },
  row: {
    flexDirection: 'row',
    height: CELL_SIZE,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 0.5,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1', // fallback
  },
  emptyCell: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  symbol: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  number: {
    fontSize: 8,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  factsContainer: {
    marginTop: 8,
  },
  factItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  factSymbol: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  factText: {
    fontSize: 14,
    color: '#34495e',
    lineHeight: 20,
  },
});