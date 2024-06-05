import React from 'react';
import {Text} from './components/Text';
import {SafeAreaView} from 'react-native';

export function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">Manga</Text>
    </SafeAreaView>
  );
}
