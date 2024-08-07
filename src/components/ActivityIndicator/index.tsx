import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import {useAppTheme} from '../../hook/useAppTheme';
import {Props} from './types';

export const ActivityIndicator = ({color}: Props) => {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} />;
};
