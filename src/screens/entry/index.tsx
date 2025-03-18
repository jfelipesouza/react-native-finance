import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '../../components/ui/screen-wrapper';
import {Text, TouchableOpacity} from 'react-native';

export const NoAuthEntryScreen = () => {
  const navigation = useNavigation();

  const goScreen = (screen: string) => {
    navigation.navigate(screen as never);
  };
  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => goScreen('login')}>
        <Text> GO TO LOGIN</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};
