import React from 'react';

import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme';

import {SignIn} from './screens/SignIn';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <SignIn />
      </SafeAreaView>
    </ThemeProvider>
  );
}
