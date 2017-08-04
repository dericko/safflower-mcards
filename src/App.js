import React from 'react';
import HomeScreen from './HomeScreen';
import StackScreen from './StackScreen';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  Home: { screen: HomeScreen },
  StackScreen: { path: 'stack/:name', screen: StackScreen }
});
