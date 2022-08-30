import {NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/core';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type NavigationFC = React.FC<{
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}>;

export type NativeNavigationFC = React.FC<{
  route: RouteProp<any>;
  navigation: NativeStackNavigationProp<any>;
}>;

export type BottomTabNavigationFC = React.FC<{
  route: RouteProp<any>;
  navigation: BottomTabNavigationProp<any>;
}>;
