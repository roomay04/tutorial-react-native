import React from 'react';
import { View } from 'react-native';

const FlexDimension1 = () => {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // Karena viewnya ga punya isi apa2, tapi kalau ada isi text atau gambar,
      // dimension itu tetep ada meskipun parent nya ga punya flex
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
};

export default FlexDimension1;
