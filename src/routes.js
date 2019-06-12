import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import MainScreen from '~/pages/Main';

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
});

const Routes = createAppContainer(createSwitchNavigator({ AppNavigator }));

export default Routes;
