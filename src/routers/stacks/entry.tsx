import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NoAuthEntryScreen} from '../../screens/entry';
import {LoginScreen} from '../../screens/entry/login';

const {Navigator, Screen} = createStackNavigator();

export const EntryRouter = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={'entry'} component={NoAuthEntryScreen} />
      <Screen name={'login'} component={LoginScreen} />
      <Screen name={'register'} component={LoginScreen} />
    </Navigator>
  );
};
