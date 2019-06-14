import React from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

const AppNavigator = createStackNavigator(
  {
    Feed,
    New
  },
  {
    mode: 'modal',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: <Image source={logo} />,
      headerBackTitle: null,
      headerTintColor: '#000000'
    }
  }
);

export default createAppContainer(createSwitchNavigator({ AppNavigator }));
