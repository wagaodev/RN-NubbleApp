import React from 'react';
import {ButtonProps} from './types';
import {ActivityIndicator} from 'react-native';

import {Text} from '../Text';

import * as S from './styles';

export const Button = ({title, loading, ...rest}: ButtonProps) => (
  <S.Touchable
    title=""
    backgroundColor="buttonPrimary"
    padding="s12"
    height={50}
    alignContent="center"
    justifyContent="center"
    borderRadius="s8"
    {...rest}>
    {loading ? (
      <ActivityIndicator />
    ) : (
      <Text preset="paragraphCaption" style={{color: '#ffff'}}>
        {title}
      </Text>
    )}
  </S.Touchable>
);
