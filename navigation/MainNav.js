import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const MainNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#463973',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search Movies',
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Movie Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
