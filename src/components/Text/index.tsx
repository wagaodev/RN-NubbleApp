import React from 'react';
import {$fontSizes, TextProps, Theme} from './types';
import {createText} from '@shopify/restyle';

const SFText = createText<Theme>();

export const Text = ({
  children,
  preset = 'headingMedium',
  style,
  ...rest
}: TextProps) => (
  <SFText style={[$fontSizes[preset], style]} {...rest}>
    {children}
  </SFText>
);
