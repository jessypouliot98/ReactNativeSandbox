import React from 'react';
import {DashboardTab} from './screens/DashboardTab/DashboardTab';
import {SettingTab} from './screens/SettingTab/SettingTab';
import {NativeNavigationFC} from '../types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator();

export enum MainRoute {
  Dashboard = 'Dashboard',
  Setting = 'Setting',
}

export const MainStack: NativeNavigationFC = () => {
  return (
    <Stack.Navigator
      initialRouteName={MainRoute.Dashboard}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MainRoute.Dashboard} component={DashboardTab} />
      <Stack.Screen name={MainRoute.Setting} component={SettingTab} />
    </Stack.Navigator>
  );
};
