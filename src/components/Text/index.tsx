import React from 'react';
import {Text as RNText} from 'react-native';
import {$fontSizes, TextProps} from './types';

export const Text = ({
  children,
  preset = 'headingMedium',
  style,
  ...rest
}: TextProps) => (
  <RNText style={[$fontSizes[preset], style]} {...rest}>
    {children}
  </RNText>
);
