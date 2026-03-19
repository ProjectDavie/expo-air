import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import DrawingLayer from './DrawingLayer';

export default function WhiteboardCanvas({ mode }) {
  const offsetX = useRef(0);
  const offsetY = useRef(0);

  return (
    <View style={styles.container}>
      <DrawingLayer mode={mode} offsetX={offsetX} offsetY={offsetY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});