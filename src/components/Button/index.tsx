import React from 'react';

import {ActivityIndicator, Text} from '../../components';

import {buttonPresets} from './button-presets';

import {ButtonProps} from './types';
import * as S from './styles';

export const Button = ({
  title,
  loading,
  preset = 'primary',
  ...rest
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset];
  return (
    <S.Touchable
      title=""
      paddingHorizontal="s20"
      height={50}
      justifyContent="center"
      alignItems="center"
      borderRadius={'s16'}
      {...buttonPreset.container}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </S.Touchable>
  );
};
