import React from 'react';
import {Text} from './components/Text';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" style={{fontFamily: 'Satoshi-Regular'}}>
          Manga
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
