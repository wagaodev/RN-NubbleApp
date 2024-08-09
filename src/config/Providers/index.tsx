import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {theme} from '../../theme';
interface Props {
  children: React.ReactElement;
}
export const Providers = ({children}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </ThemeProvider>
  );
};
