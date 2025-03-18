import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '../../components/ui/screen-wrapper';
import {theme} from '../../themes';

export const LoginScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={{fontSize: 20}}> {'<'} </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: theme.spacing.sm,
  },
  backButton: {
    padding: 2,
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
