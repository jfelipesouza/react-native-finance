import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type ScreenProps = {
  children: React.ReactNode;
};
export const ScreenWrapper: React.FC<ScreenProps> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 20,
  },
});
