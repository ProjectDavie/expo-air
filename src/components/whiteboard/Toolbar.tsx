import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Mode = 'draw' | 'pan' | 'text';

interface Props {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export default function Toolbar({ mode, setMode }: Props) {
  return (
    <View style={styles.container}>
      <Button label="✏️" active={mode === 'draw'} onPress={() => setMode('draw')} />
      <Button label="✋" active={mode === 'pan'} onPress={() => setMode('pan')} />
      <Button label="🔤" active={mode === 'text'} onPress={() => setMode('text')} />
    </View>
  );
}

function Button({ label, active, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, active && styles.active]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 5,
    zIndex: 1000,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
  },
  active: {
    backgroundColor: '#555',
    borderRadius: 6,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});