import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';
import {theme} from '../../themes';

type ScreenProp = {
  children: React.ReactNode;
};
export const ScreenWrapper: React.FC<ScreenProp> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightTheme.colors.bg_container,
    paddingTop: theme.lightTheme.spacing.status_bar + 5,
  },
});
