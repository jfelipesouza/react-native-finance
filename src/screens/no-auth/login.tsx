import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

import {ScreenWrapper} from '../../components/ui/screen-wrapper';
import {BackButton} from '../../components/back-button';
import {Typo} from '../../components/ui/typography';
import {Input} from '../../components/ui/input';
import {translationText} from '../../services/i18n/locales';
import {Link} from '../../components/ui/link-button';

export const LoginScreen = () => {
  const {styles} = useStyles(loginStyles);

  const texts = translationText.pt.login;

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <BackButton />
      </View>
      <View style={styles.content}>
        <View style={styles.headerTextContainer}>
          <Typo variants={'h1'}>{texts.hi}</Typo>
          <Typo variants={'h1'}> {texts.saudation}</Typo>
        </View>
        <View style={styles.form}>
          <Typo style={styles.gray} variants={'h3'}>
            {texts.subtitle}
          </Typo>
          <View style={styles.formWrapper}>
            <Input
              textContentType={'emailAddress'}
              placeholder={texts.forms.placeholderEmail}
            />
            <Input
              textContentType={'password'}
              placeholder={texts.forms.placeholderPass}
            />

            <View style={styles.remeberContainer}>
              <Link href={() => {}} title={texts.forms.rememberPass} />
            </View>

            <TouchableOpacity style={styles.link}>
              <Typo variants="p" style={styles.linkText}>
                {texts.forms.submitButton}
              </Typo>
            </TouchableOpacity>
          </View>

          <View style={styles.divisionLine} />
          <TouchableOpacity style={styles.link}>
            <Typo variants="p" style={styles.linkText}>
              {texts.gmail}
            </Typo>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const loginStyles = createStyleSheet(theme => ({
  header: {
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
  content: {
    padding: theme.spacing.sm,
    gap: 0,
  },
  gray: {
    color: theme.colors.neutral400,
  },
  headerTextContainer: {
    marginTop: theme.spacing.lg,
  },
  form: {
    marginTop: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  formWrapper: {
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  divisionLine: {
    height: 2,
    backgroundColor: theme.colors.neutral500,
    width: '100%',
    marginVertical: theme.spacing.md,
  },
  link: {
    backgroundColor: '#008080',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  linkText: {
    color: theme.colors.white,
  },
  remeberContainer: {
    flexDirection: 'row-reverse',
    marginVertical: theme.spacing.sm,
  },
}));
