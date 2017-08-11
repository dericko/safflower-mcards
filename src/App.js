import React from 'react';
import GroupScreen from './GroupScreen';
import CardScreen from './CardScreen';
import SingleCardScreen from './SingleCardScreen';
import GroupSelectScreen from './GroupSelectScreen';
import CardSelectScreen from './CardSelectScreen';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

/**
 * Nested Stack and Drawer navigation
 * See @corephillip's answer on https://github.com/react-community/react-navigation/issues/131
 **/

const StackRoutes = {
	GroupSelectScreen: {
		screen: GroupSelectScreen
	},
	CardSelectScreen: {
		screen: CardSelectScreen
	},
	SingleCardScreen: {
		screen: SingleCardScreen
	},
  CardScreen: {
    screen: CardScreen
  },
  GroupScreen: {
    screen: GroupScreen
  },
};

const DrawerRoutes = {
	SingleCardStack: {
		name: 'SingleCardStack',
		screen: StackNavigator(StackRoutes, { initialRouteName:'SingleCardScreen'})
	},
  GroupSelectStack: {
    name: 'GroupSelectStack',
    screen: StackNavigator(StackRoutes, { initialRouteName:'GroupSelectScreen' }),
  },
  CardSelectStack: {
    name: 'CardSelectStack',
    screen: StackNavigator(StackRoutes, { initialRouteName:'CardSelectScreen' }),
  },
}

export default StackNavigator({
  Drawer: {
    name: 'Drawer',
    screen: DrawerNavigator(DrawerRoutes, { drawerWidth: 250 })
  },
  ...StackRoutes
}, {
  headerMode: 'none', // Hide double header
});
