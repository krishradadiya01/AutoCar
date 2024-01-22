import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import typography from '../themes/typography';

export default function OnBoarding() {
  return (
    <View style={localStyles.main}>
      <Text style={localStyles.typeStyle}>Hello</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeStyle: {
    ...typography.fontSizes.f24,
    ...typography.fontWeights.Bold,
  },
});
