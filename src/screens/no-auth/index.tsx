import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';

import {ScreenWrapper} from '../../components/ui/screen-wrapper';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Link} from '../../components/ui/link-button';
import {percentScreen} from '../../themes/unistyles/functions/screen-percent';
import {translationText} from '../../services/i18n/locales';

export const NoAuthEntryScreen = () => {
  const navigation = useNavigation();

  const goScreen = (screen: string) => {
    navigation.navigate(screen as never);
  };

  const {styles} = useStyles(pageStyles);
  return (
    <ScreenWrapper>
      <View style={styles.horizontal}>
        <Link
          href={() => goScreen('login')}
          title={translationText.pt.entry.linkLogin}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/imgs/entry.png')} />
      </View>
      <View style={styles.registerContainer}>
        <Text>{translationText.pt.entry.onboardingTitle}</Text>
      </View>
    </ScreenWrapper>
  );
};

const pageStyles = createStyleSheet(theme => ({
  horizontal: {
    width: '100%',
    flexDirection: 'row-reverse',
    paddingHorizontal: theme.spacing.sm,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: percentScreen(3),
    borderColor: theme.colors.neutral800,
    padding: theme.spacing.sm,
  },
}));
