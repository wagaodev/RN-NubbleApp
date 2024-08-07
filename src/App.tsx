import React from 'react';

import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme';
import {Button, Text, Box} from './components';
import {Icons} from './components/Icons';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <Box backgroundColor="grayWhite" paddingTop="s20">
          <Text preset="headingMedium">Hello PORRA</Text>
          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Desabilitou" marginBottom="s12" />
          <Button loading preset="outline" title="Outline" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />
          <Button
            disabled
            preset="outline"
            title="Outline Desabilitado"
            marginBottom="s12"
          />
          <Icons name="eyeOff" color="buttonPrimary" size={40} />
          <Icons name="eyeOn" color="error" size={40} />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
