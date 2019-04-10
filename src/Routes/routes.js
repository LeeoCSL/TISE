import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Main from '~/pages/Main';
import Lista from '~/pages/Lista';
import Excluidas from '~/pages/Excluidas';
import Transcricoes from '~/pages/Transcricoes';
import SplashScreen from '~/pages/SplashScreen';

const Routes = createAppContainer(
  createStackNavigator(
    {
      // SplashScreen,
      App: createBottomTabNavigator(
        {
          Main,
          Lista,
          Transcricoes,
        },
        {
          defaultNavigationOptions: {
            header: null,
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: '#fff',
              inactiveTintColor: '#00000000',
              style: {
                backgroundColor: '#ccc',
              },
            },
          },
        },
      ),
      Excluidas,
    },
    {
      defaultNavigationOptions: {
        header: null,
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: '#fff',
          inactiveTintColor: '#00000000',
          style: {
            backgroundColor: '#ccc',
          },
        },
      },
    },
  ),
);

export default Routes;
