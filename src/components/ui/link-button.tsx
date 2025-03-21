import React from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type LinkProps = {
  href: () => void;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Link: React.FC<LinkProps> = ({
  href,
  title,
  containerStyle,
  textStyle,
}) => {
  const {styles} = useStyles(componentStyle);
  return (
    <TouchableOpacity
      onPress={href}
      style={[styles.container, containerStyle, textStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const componentStyle = createStyleSheet(theme => ({
  container: {},
  text: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.link,
  },
}));
