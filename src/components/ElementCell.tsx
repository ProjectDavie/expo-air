import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ElementData, CATEGORY_COLORS } from '../data/elements';

interface Props {
  element: ElementData;
  onPress: (el: ElementData) => void;
  size: number;
}

export const ElementCell = ({ element, onPress, size }: Props) => (
  <TouchableOpacity
    style={[
      styles.cell,
      { width: size, height: size, backgroundColor: CATEGORY_COLORS[element.category] },
    ]}
    onPress={() => onPress(element)}
  >
    <Text style={styles.symbol}>{element.symbol}</Text>
    <Text style={styles.number}>{element.number}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cell: {
    borderWidth: 0.5,
    borderColor: '#8899aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: { fontSize: 12, fontWeight: 'bold', color: '#fff' },
  number: { fontSize: 8, color: '#fff' },
});