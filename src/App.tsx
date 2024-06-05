import React from 'react';
import {Text} from './components/Text';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme';
import {Button} from './components/Button';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text preset="headingMedium">Hello PORRA</Text>

          <Button title="Press me" marginBottom="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
