import React from 'react';
import { View } from 'react-native';

const AlignItemsBasics = () => {
    return (
      // Ga muncul apa-apa karena ini row, jadi ngomongin 
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
};

export default AlignItemsBasics;
