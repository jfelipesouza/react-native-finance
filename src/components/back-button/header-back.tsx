import {View} from 'react-native';
import {BackButton} from '.';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export const HeaderBackButton = () => {
  const {styles} = useStyles(wrapperStyles);

  return (
    <View style={styles.header}>
      <BackButton />
    </View>
  );
};

const wrapperStyles = createStyleSheet(theme => ({
  header: {
    paddingHorizontal: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
}));
