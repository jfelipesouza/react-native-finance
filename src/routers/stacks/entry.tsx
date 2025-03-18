import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

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
      <Screen
        name={'register'}
        component={() => <View style={{backgroundColor: 'green', flex: 1}} />}
      />
      <Screen name={'pass-recover'} component={() => <View />} />
    </Navigator>
  );
};
