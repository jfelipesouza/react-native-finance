import React from 'react';
import {Text} from 'react-native';
import type {TextProps} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type TypographyProps = TextProps & {
  variants?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
};

export const Typo: React.FC<TypographyProps> = ({
  children,
  variants = 'p',
  style,
}) => {
  const {styles} = useStyles(typographyStyles);
  return <Text style={[styles[variants], style]}>{children}</Text>;
};

const typographyStyles = createStyleSheet(theme => ({
  h1: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.h1,
    fontFamily: theme.fonts.primary.bold,
  },
  h2: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.h2,
    fontFamily: theme.fonts.primary.regular,
  },
  h3: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.h3,
    fontFamily: theme.fonts.primary.regular,
  },
  h4: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.h4,
    fontFamily: theme.fonts.primary.regular,
  },
  h5: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.h5,
    fontFamily: theme.fonts.primary.regular,
  },
  p: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.text,
    fontFamily: theme.fonts.primary.regular,
  },
  span: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.text * 0.9,
    fontFamily: theme.fonts.primary.regular,
  },
  link: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.link,
    fontFamily: theme.fonts.primary.bold,
  },
}));
