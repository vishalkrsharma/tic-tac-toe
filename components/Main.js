import React from 'react';
import { Pressable } from 'react-native';
import { View } from 'react-native';
import styles from '../styles/MainStyles';
import Icons from './Icons';

export default function Main({ markers, activePlayer, setMarkers, setActivePlayer }) {
  const markPosition = (pos) => {
    if (markers[pos] !== null) return;
    let newMarkers = [...markers];
    newMarkers[pos] = activePlayer;
    setMarkers(newMarkers);
    setActivePlayer((prev) => (prev === 'X' ? 'O' : 'X'));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cellContainer}>
        {/* Top Left */}
        <Pressable
          style={[styles.cell, styles.borderRight, styles.borderBottom]}
          onPress={() => markPosition(0)}
        >
          <Icons markers={markers[0]} />
        </Pressable>
        {/* Top Middle */}
        <Pressable
          style={[styles.cell, styles.borderBottom]}
          onPress={() => markPosition(1)}
        >
          <Icons markers={markers[1]} />
        </Pressable>
        {/* Top Right */}
        <Pressable
          style={[styles.cell, styles.borderLeft, styles.borderBottom]}
          onPress={() => markPosition(2)}
        >
          <Icons markers={markers[2]} />
        </Pressable>
        {/* Middle Right */}
        <Pressable
          style={[styles.cell, styles.borderRight]}
          onPress={() => markPosition(3)}
        >
          <Icons markers={markers[3]} />
        </Pressable>
        {/* Middle Middle */}
        <Pressable
          style={styles.cell}
          onPress={() => markPosition(4)}
        >
          <Icons markers={markers[4]} />
        </Pressable>
        {/* Middle Right */}
        <Pressable
          style={[styles.cell, styles.borderLeft]}
          onPress={() => markPosition(5)}
        >
          <Icons markers={markers[5]} />
        </Pressable>
        {/* Bottom Left */}
        <Pressable
          style={[styles.cell, styles.borderTop, styles.borderRight]}
          onPress={() => markPosition(6)}
        >
          <Icons markers={markers[6]} />
        </Pressable>
        {/* Bottom Middle */}
        <Pressable
          style={[styles.cell, styles.borderTop]}
          onPress={() => markPosition(7)}
        >
          <Icons markers={markers[7]} />
        </Pressable>
        {/* Bottom Right */}
        <Pressable
          style={[styles.cell, styles.borderLeft, styles.borderTop]}
          onPress={() => markPosition(8)}
        >
          <Icons markers={markers[8]} />
        </Pressable>
      </View>
    </View>
  );
}
