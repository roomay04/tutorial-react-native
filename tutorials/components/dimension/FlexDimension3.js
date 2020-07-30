import React from 'react';
import { View, Text } from 'react-native';

const FlexDimension3 = () => {
    return (
      // karena parentnya punya height 300, jadi childnya bakal menyesuaikan 
      // rasio berdasarkan ukuran layernya
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}><Text>Flex 1</Text></View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}><Text>Flex 1</Text></View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}><Text>Flex 1</Text></View>
      </View>
    );
};

export default FlexDimension3;
