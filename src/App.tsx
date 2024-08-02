import React from 'react';

import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme';
import {Button, Text, Box} from './components';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <Box backgroundColor="grayWhite" paddingTop="s20">
          <Text preset="headingMedium">Hello PORRA</Text>
          <Button title="Press me" marginBottom="s12" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
