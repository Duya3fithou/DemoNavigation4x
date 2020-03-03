// import React from 'react';
// import {View, Text} from 'react-native';
import Tab1 from './src/screen/Tab1.js';
import Tab3 from './src/screen/Tab3.js';
import Stack1 from './src/screen/stack/stack1.js';
import Stack2 from './src/screen/stack/stack2.js';
import Stack3 from './src/screen/stack/stack3.js';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Tab2Stack = createStackNavigator(
  {
    Stack1: Stack1,
    Stack2: Stack2,
    Stack3: Stack3,
  },
  {
    initialRouteName: 'Stack1',
  },
);
const BottomTab = createBottomTabNavigator({
  Tab1: Tab1,
  Tab2: Tab2Stack,
  Tab3: Tab3,
});

export default createAppContainer(BottomTab);
