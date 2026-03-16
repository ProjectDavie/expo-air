import React from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  StatusBar 
} from 'react-native';

// Color mapping for element categories
const CATEGORY_COLORS = {
  'noble-gas': '#FFBC42',
  'alkali-metal': '#EC674E',
  'alkaline-earth': '#FBAB7E',
  'metalloid': '#4FB06D',
  'nonmetal': '#218380',
  'transition-metal': '#73D2DE',
  'post-transition-metal': '#D81159',
};

const ELEMENTS = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, category: 'nonmetal', fact: 'Most abundant element in the universe.' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, category: 'noble-gas', fact: 'Second lightest and second most abundant element.' },
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, category: 'alkali-metal', fact: 'Lightest metal and lightest solid element.' },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, category: 'alkaline-earth', fact: 'Used in gemstones like emeralds and aquamarines.' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, category: 'metalloid', fact: 'Crucial for the cell walls of all plants.' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, category: 'nonmetal', fact: 'The basis for all known life on Earth.' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, category: 'nonmetal', fact: 'Makes up about 78% of Earth’s atmosphere.' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, category: 'nonmetal', fact: 'The third most abundant element in the universe.' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Periodic Table Fun Facts</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {ELEMENTS.map((item) => (
            <View 
              key={item.atomicNumber} 
              style={[
                styles.card, 
                { backgroundColor: CATEGORY_COLORS[item.category] || '#ccc' }
              ]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.atomicNumber}>{item.atomicNumber}</Text>
                <Text style={styles.symbol}>{item.symbol}</Text>
              </View>
              
              <Text style={styles.elementName}>{item.name}</Text>
              
              <View style={styles.factBox}>
                <Text style={styles.factText}>{item.fact}</Text>
              </View>
              
              <Text style={styles.categoryTag}>{item.category.replace('-', ' ')}</Text>
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
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginVertical: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Fits two columns
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  atomicNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.5)',
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  elementName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 4,
  },
  factBox: {
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 6,
  },
  factText: {
    fontSize: 12,
    color: '#fff',
    fontStyle: 'italic',
  },
  categoryTag: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 8,
    textTransform: 'uppercase',
  }
});