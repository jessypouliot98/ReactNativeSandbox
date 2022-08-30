import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/root';
import {Navigation} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer ref={Navigation.ref}>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
