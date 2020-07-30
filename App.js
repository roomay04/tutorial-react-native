/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import MyPager from './tutorials/components/scrollView/ScrollView1';
import LayoutPlayground from './tutorials/components/layout/LayoutPlayground';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Welcome' }}/>
          <Stack.Screen name="FlexTutorial" component={MyPager} options={{ title: 'Tutorial Flex' }}/>
          <Stack.Screen name="LayoutPlayground" component={LayoutPlayground} options={{ title: 'Layout Playground' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
