import React from 'react';
import {View, TextInput} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import type {ColorValue, TextStyle, ViewStyle} from 'react-native';

type InputProps = {
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: React.RefObject<TextInput>;
  placeholder?: string;
  placeholderColor?: ColorValue;
  textContentType?: 'emailAddress' | 'password';
};

export const Input: React.FC<InputProps> = ({
  icon,
  containerStyle,
  inputStyle,
  inputRef,
  placeholder = '',
  placeholderColor,
  textContentType,
}) => {
  const {styles} = useStyles(InputStyles);

  if (textContentType === 'password') {
    return (
      <View style={[containerStyle, styles.container]}>
        <TextInput
          style={[styles.input, inputStyle]}
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor ? placeholderColor : '#fafafaaa'
          }
          textContentType={textContentType}
          secureTextEntry={true}
        />
        {icon && icon}
      </View>
    );
  }

  return (
    <View style={[containerStyle, styles.container]}>
      <TextInput
        style={[styles.input, inputStyle]}
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ? placeholderColor : '#fafafaaa'}
        textContentType={textContentType ? textContentType : 'none'}
      />
      {icon && icon}
    </View>
  );
};

const InputStyles = createStyleSheet(theme => ({
  input: {
    borderWidth: 2,
    borderColor: theme.colors.neutral100,
    paddingLeft: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    fontFamily: theme.fonts.primary.regular,
    fontSize: theme.fonts.size.h5,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    color: theme.colors.neutral200,
    backgroundColor: theme.colors.neutral500,
  },
  container: {
    position: 'relative',
  },
}));
