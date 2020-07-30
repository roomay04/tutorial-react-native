import React from 'react';
import { View, Text } from 'react-native';

const FlexDimension2 = () => {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // meskipun ada isinya, tapi saling numpuk, karena parentnya ga punya layouting yg 
      // ngatur gimana childrennya jalan
      <View>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}><Text>Flex 1</Text></View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}><Text>Flex 2</Text></View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}><Text>Flex 3</Text></View>
      </View>
    );
};

export default FlexDimension2;
