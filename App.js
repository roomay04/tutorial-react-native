/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import MyPager from './src/components/tutorial/scrollView/ScrollView1';
import LayoutPlayground from './src/components/tutorial/layout/LayoutPlayground';
import CalculatorPage from './src/pages/CalculatorPages'

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="FlexTutorial" component={MyPager} options={{ title: 'Tutorial Flex' }}/>
            <Stack.Screen name="LayoutPlayground" component={LayoutPlayground} options={{ title: 'Layout Playground' }}/>
            <Stack.Screen name="Calculator" component={CalculatorPage} options={{ title: 'Calculator' }}/>
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
