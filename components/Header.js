import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/HeaderStyles';

const Header = ({ activePlayer, flipped }) => {
  return (
    <View style={[styles.playerInfo, flipped && styles.flipped]}>
      <Text style={styles.playerText}>Player {activePlayer}'s Turn</Text>
    </View>
  );
};

export default Header;
