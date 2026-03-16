import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const elements = [
  { symbol: "H", name: "Hydrogen", category: "nonmetal", fact: "Lightest element in the universe." },
  { symbol: "He", name: "Helium", category: "noble", fact: "Used in balloons because it is lighter than air." },
  { symbol: "Li", name: "Lithium", category: "alkali", fact: "Used in rechargeable batteries." },
  { symbol: "Be", name: "Beryllium", category: "alkaline", fact: "Used in aerospace materials." },
  { symbol: "B", name: "Boron", category: "metalloid", fact: "Important in plant cell walls." },
  { symbol: "C", name: "Carbon", category: "nonmetal", fact: "Forms the basis of life." },
  { symbol: "N", name: "Nitrogen", category: "nonmetal", fact: "Makes up 78% of Earth's atmosphere." },
  { symbol: "O", name: "Oxygen", category: "nonmetal", fact: "Essential for respiration." },
  { symbol: "F", name: "Halogen", category: "halogen", fact: "Fluorine is the most reactive element." },
  { symbol: "Ne", name: "Neon", category: "noble", fact: "Used in neon lights." },
];

const categoryColors: any = {
  alkali: "#ff6b6b",
  alkaline: "#ffa94d",
  metalloid: "#ffd43b",
  nonmetal: "#69db7c",
  halogen: "#4dabf7",
  noble: "#b197fc",
};

export default function App() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Periodic Table</Text>

      <ScrollView>
        <View style={styles.grid}>
          {elements.map((el) => (
            <TouchableOpacity
              key={el.symbol}
              style={[
                styles.cell,
                { backgroundColor: categoryColors[el.category] },
              ]}
              onPress={() => setSelected(el)}
            >
              <Text style={styles.symbol}>{el.symbol}</Text>
              <Text style={styles.name}>{el.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selected && (
          <View style={styles.factBox}>
            <Text style={styles.factTitle}>
              {selected.name} ({selected.symbol})
            </Text>
            <Text style={styles.fact}>{selected.fact}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  cell: {
    width: 70,
    height: 70,
    margin: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  symbol: {
    fontSize: 20,
    fontWeight: "bold",
  },

  name: {
    fontSize: 10,
  },

  factBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 4,
  },

  factTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  fact: {
    fontSize: 16,
  },
});