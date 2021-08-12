import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainNav from './navigation/MainNav';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
