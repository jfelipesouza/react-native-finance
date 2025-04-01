import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NoAuthEntryScreen} from '../../screens/no-auth';
import {LoginScreen} from '../../screens/no-auth/login';
import {CreatedAccountScreen} from '../../screens/no-auth/created-account';

const {Navigator, Screen} = createStackNavigator();

export const EntryRouter = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={'entry'} component={NoAuthEntryScreen} />
      <Screen name={'login'} component={LoginScreen} />
      <Screen name={'register'} component={CreatedAccountScreen} />
    </Navigator>
  );
};
