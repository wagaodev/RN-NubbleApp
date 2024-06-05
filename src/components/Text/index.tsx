import React from 'react';
import {Text as RNText} from 'react-native';
import {$fontSizes, TextProps} from '../../theme';

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
