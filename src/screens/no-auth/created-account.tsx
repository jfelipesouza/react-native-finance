import React from 'react';

import {ScreenWrapper} from '../../components/ui/screen-wrapper';
import {Typo} from '../../components/ui/typography';
import {HeaderBackButton} from '../../components/back-button/header-back';

export const CreatedAccountScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <HeaderBackButton />
      <Typo>OK</Typo>
    </ScreenWrapper>
  );
};
