import { Entypo } from '@expo/vector-icons';
import React from 'react';

export default function Icons({ markers }) {
  return (
    <>
      {markers === 'X' && (
        <Entypo
          name='cross'
          size={75}
          color='#bf616a'
        />
      )}
      {markers == 'O' && (
        <Entypo
          name='circle'
          size={50}
          color='#bf616a'
        />
      )}
    </>
  );
}
