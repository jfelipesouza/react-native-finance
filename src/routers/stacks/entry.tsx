import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const {Navigator, Screen} = createStackNavigator();

export const EntryRouter = () => {
  return (
    <Navigator>
      <Screen name={'login'} component={() => <View />} />
      <Screen name={'register'} component={() => <View />} />
      <Screen name={'pass-recover'} component={() => <View />} />
    </Navigator>
  );
};
