import React, { useState } from 'react';
import { View, PanResponder } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function DrawingLayer({ mode, offsetX, offsetY }) {
  const [paths, setPaths] = useState<string[]>([]);
  const [current, setCurrent] = useState('');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderGrant: (e) => {
      if (mode === 'draw') {
        const { locationX, locationY } = e.nativeEvent;
        setCurrent(`M${locationX} ${locationY}`);
      }
    },

    onPanResponderMove: (e, gesture) => {
      if (mode === 'draw') {
        const { locationX, locationY } = e.nativeEvent;
        setCurrent((prev) => prev + ` L${locationX} ${locationY}`);
      }

      if (mode === 'pan') {
        offsetX.current += gesture.dx;
        offsetY.current += gesture.dy;
      }
    },

    onPanResponderRelease: () => {
      if (mode === 'draw' && current !== '') {
        setPaths((prev) => [...prev, current]);
        setCurrent('');
      }
    },
  });

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      <Svg style={{ flex: 1 }}>
        {paths.map((p, i) => (
          <Path key={i} d={p} stroke="black" strokeWidth={2} fill="none" />
        ))}
        {current !== '' && (
          <Path d={current} stroke="black" strokeWidth={2} fill="none" />
        )}
      </Svg>
    </View>
  );
}