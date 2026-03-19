import React, { useState } from 'react';
import { View, TextInput, StyleSheet, PanResponder, Animated } from 'react-native';

interface Props {
  mode: 'draw' | 'pan' | 'text';
}

// Each text box will have x/y coordinates and a string value
interface TextBox {
  id: number;
  x: number;
  y: number;
  text: string;
}

export default function TextLayer({ mode }: Props) {
  const [textBoxes, setTextBoxes] = useState<TextBox[]>([]);
  const [counter, setCounter] = useState(0);

  // Temporary coordinates when placing new text box
  const tempX = useState(new Animated.Value(0))[0];
  const tempY = useState(new Animated.Value(0))[0];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => mode === 'text',
    onMoveShouldSetPanResponder: () => false, // No dragging of layer itself

    onPanResponderGrant: (e) => {
      if (mode !== 'text') return;

      const { locationX, locationY } = e.nativeEvent;

      // Place a new text box at the tapped location
      const newBox: TextBox = {
        id: counter,
        x: locationX,
        y: locationY,
        text: '',
      };
      setCounter(counter + 1);
      setTextBoxes([...textBoxes, newBox]);
    },
  });

  const handleChangeText = (id: number, value: string) => {
    setTextBoxes((prev) =>
      prev.map((box) => (box.id === id ? { ...box, text: value } : box))
    );
  };

  return (
    <View style={StyleSheet.absoluteFill} {...(mode === 'text' ? panResponder.panHandlers : {})}>
      {textBoxes.map((box) => (
        <TextInput
          key={box.id}
          value={box.text}
          onChangeText={(text) => handleChangeText(box.id, text)}
          style={[
            styles.textBox,
            { top: box.y - 10, left: box.x - 10 }, // Offset slightly for finger
          ]}
          placeholder="Text"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    position: 'absolute',
    minWidth: 50,
    minHeight: 30,
    borderColor: '#000',
    borderWidth: 1,
    padding: 4,
    backgroundColor: 'rgba(255,255,255,0.8)',
    fontSize: 16,
  },
});