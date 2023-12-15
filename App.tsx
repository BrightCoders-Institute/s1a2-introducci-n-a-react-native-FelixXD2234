/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, StyleSheet } from 'react-native'

// import Register from './src/register';
import Profile from './src/profile';
import Register from './src/register';
import HomePage from './src/homePage';

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' >
        {() => <HomePage /> }
      </Tab.Screen>
      <Tab.Screen name='Profile'>
        {() => <Profile /> }
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
