import React, { ReactNode } from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '../../theme';
import { Box } from '../../components';

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <InnerProviders>{children}</InnerProviders>
    </SafeAreaProvider>
  );
};

const InnerProviders = ({ children }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <ThemeProvider theme={theme}>
      <Box paddingHorizontal="s24" flex={1} style={{ paddingTop: top }}>
        {children}
      </Box>
    </ThemeProvider>
  );
};
