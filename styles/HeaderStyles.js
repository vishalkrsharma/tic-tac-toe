import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  playerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  playerText: {
    color: '#d8dee9',
    fontSize: 25,
    marginVertical: 100,
  },
  flipped: {
    transform: [{ rotate: '180deg' }],
  },
});

export default styles;
