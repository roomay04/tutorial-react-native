import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import FlexDimension2 from '../dimension/FlexDimension2';
import FlexDimension1 from '../dimension/FlexDimension1';
import FlexDimension3 from '../dimension/FlexDimension3';

const MyPager = () => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1">
        <FlexDimension1 />
      </View>
      <View key="2">
        <FlexDimension2 />
      </View>
      <View key="3">
        <FlexDimension3 />
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default MyPager;