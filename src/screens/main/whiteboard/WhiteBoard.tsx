import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WhiteboardCanvas from '../../../components/whiteboard/WhiteboardCanvas';
import Toolbar from '../../../components/whiteboard/Toolbar';

export type Mode = 'draw' | 'pan' | 'text';

export default function WhiteBoard() {
  const [mode, setMode] = useState<Mode>('draw');

  return (
    <View style={styles.container}>
      <WhiteboardCanvas mode={mode} />
      <Toolbar mode={mode} setMode={setMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});