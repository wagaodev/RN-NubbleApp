import React from 'react';
import {$fontSizes, getFontFamily, TextProps, Theme} from './types';
import {createText} from '@shopify/restyle';

export const SRText = createText<Theme>();

export const Text = ({
  children,
  preset = 'paragraphMedium',
  bold,
  semiBold,
  italic,
  style,
  ...rest
}: TextProps) => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rest}>
      {children}
    </SRText>
  );
};
