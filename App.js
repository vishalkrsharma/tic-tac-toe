import { useEffect, useState } from 'react';
import { SafeAreaView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from './components/Header';
import Main from './components/Main';
import styles from './styles/AppStyles';

export default function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [markers, setMarkers] = useState([null, null, null, null, null, null, null, null, null]);

  useEffect(() => {
    const winner = calculateWinner(markers);

    if (winner === 'X') {
      alert('Player X Won');
      resetMarkers();
    } else if (winner === 'O') {
      alert('Player O Won');
      resetMarkers();
    } else if (checkDraw() === 9) {
      alert('Draw');
      resetMarkers();
    }
  }, [markers]);

  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
    setActivePlayer('X');
  };

  const checkDraw = () => {
    let countNotNull = 0;
    for (let i = 0; i < markers.length; i++) {
      if (markers[i] !== null) countNotNull++;
    }
    return countNotNull;
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header activePlayer={activePlayer} />
      <Main
        markers={markers}
        setMarkers={setMarkers}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      />
      <Header
        activePlayer={activePlayer}
        flipped={true}
      />
      <Pressable
        style={styles.cancel}
        onPress={resetMarkers}
      >
        <AntDesign
          name='reload1'
          size={30}
          color='black'
        />
      </Pressable>
    </SafeAreaView>
  );
}
