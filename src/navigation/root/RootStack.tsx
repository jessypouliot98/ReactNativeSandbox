import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from '../main';

const Stack = createNativeStackNavigator();

export enum RootRoute {
  Main = 'Main',
}

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RootRoute.Main}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RootRoute.Main} component={MainStack} />
    </Stack.Navigator>
  );
};
