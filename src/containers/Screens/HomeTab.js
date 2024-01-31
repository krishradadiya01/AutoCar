import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function HomeTab() {
  const colors = useSelector(state => state.theme.theme);
  return (
    <SafeAreaView style={{backgroundColor: colors}}>
      <Text>HomeTab</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
