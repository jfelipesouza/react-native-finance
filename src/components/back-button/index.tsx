import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {CaretLeft, IconProps} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

type BackButtonProps = {
  icon?: (props: IconProps) => React.ReactElement;
};

export const BackButton: React.FC<BackButtonProps> = ({icon: ICON}) => {
  const {styles} = useStyles(buttonStyles);
  const navigation = useNavigation();
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
    return;
  };
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      {ICON ? <ICON /> : <CaretLeft weight="bold" />}
    </TouchableOpacity>
  );
};

const buttonStyles = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.neutral100,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 10,
    borderRadius: theme.spacing.sm * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
    width: theme.spacing.lg * 1.8,
    height: theme.spacing.lg * 1.8,
  },
}));
