import React from 'react';
import { View, Text } from 'react-native';

const AlignItemsBasics = () => {
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{flex:2, flexDirection:'row'}}> 
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}><Text>1</Text></View>
        <View style={{flex:1, backgroundColor: 'skyblue'}} ><Text>1</Text></View>
        <View style={{flex:1, backgroundColor: 'steelblue'}} ><Text>1</Text></View>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}><Text>1</Text></View>
        <View style={{flex:1, backgroundColor: 'skyblue'}} ><Text>1</Text></View>
        <View style={{flex:1, backgroundColor: 'steelblue'}} ><Text>1</Text></View>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}} ><Text>1</Text></View>
        <View style={{flex:1, backgroundColor: 'skyblue'}} ><Text>1</Text></View>
        <View style={{flex:1, backgroundColor: 'steelblue'}} ><Text>1</Text></View>
      </View>
      </View>
      <View style={{flex:1, flexDirection:'row'}}> <Text>2</Text>
      </View>
      </View>
    );
};

export default AlignItemsBasics;
