import React from 'react';
import {SafeAreaView, ViewProps} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type ScreenProps = ViewProps & {
  children: React.ReactNode;
};
export const ScreenWrapper: React.FC<ScreenProps> = ({children, ...props}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg_container,
    paddingTop: theme.spacing.status_bar,
  },
}));
