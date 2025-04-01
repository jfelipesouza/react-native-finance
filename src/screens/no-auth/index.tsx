import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import Animated from 'react-native-reanimated';

import {percentScreen} from '../../themes/unistyles/functions/screen-percent';
import {ScreenWrapper} from '../../components/ui/screen-wrapper';
import {Link} from '../../components/ui/link-button';
import {Typo} from '../../components/ui/typography';
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
      <Animated.View style={styles.registerContainer}>
        <Typo style={styles.onboardingTextCenter} variants={'h1'}>
          {translationText.pt.entry.onboardingTitle}
        </Typo>
        <Typo
          style={[styles.onboardingTextCenter, styles.onbardingDescription]}
          variants="p">
          {translationText.pt.entry.onboardingDescription}
        </Typo>
        <TouchableOpacity
          onPress={() => goScreen('register')}
          style={styles.button}>
          <Typo style={styles.buttonText}>
            {translationText.pt.entry.onboardingActionButton}
          </Typo>
        </TouchableOpacity>
      </Animated.View>
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
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerContainer: {
    flex: 1,
    borderTopLeftRadius: percentScreen(3),
    borderTopRightRadius: percentScreen(3),
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.neutral700,
    justifyContent: 'center',
  },
  onboardingTextCenter: {
    textAlign: 'center',
  },
  onbardingDescription: {
    color: theme.colors.neutral350,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginTop: theme.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.lg * 1.5,
  },
  buttonText: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.fonts.size.h4,
  },
}));
