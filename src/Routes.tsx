//props-types
import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
// Packages
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
  
} from '@react-navigation/bottom-tabs';
// Screens
import Home from './components/screens/home/Home';

import React from 'react';


import SplashScreen from './components/screens/splashscreen/SplashScreen';

import {MytabBarone} from './components/helpers/navigationtabs/navigationtabs';
import DetectScreen from './components/screens/detect/DetectScreen';


const Stack = createNativeStackNavigator<RouteParamList>();
const krishiBottom = createBottomTabNavigator<RouteParamList>();

const Routes: React.FC = () => {
  const {Navigator, Screen} = Stack;
  // stacknavigator
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SplashScreen'}>
      <Screen name={'SplashScreen'} component={SplashScreen} />
      <Screen name={'Home'} component={krishiBottomNavigator} />
      <Screen name={"DetectScreen"} component={DetectScreen}/>
      
    </Navigator>
  );
};

export default Routes;

// Advertising bottom-navigator

const krishiBottomNavigator = ({
  navigation,
  route,
}: RouteStackParamList<'Home'>) => {
  return (
    <krishiBottom.Navigator
      tabBar={props => <MytabBarone {...props} />}
      initialRouteName={'home'}>
      <krishiBottom.Screen
        initialParams={route.params}
        name={'home'}
        component={Home}
      />

    
    </krishiBottom.Navigator>
  );
};

export type RouteParamList = {
  SplashScreen: undefined;
  Home: {
    name: string;
  };
  
};



export type RouteStackParamList<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T> &
    DrawerNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
};
