import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigators from './android/app/src/StlAndroid/src/navigator/stackNavigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigators />
      </NavigationContainer>
    </>
  );
};

export default App;
