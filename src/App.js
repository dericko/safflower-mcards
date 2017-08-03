import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Stack from './Stack';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Stack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: 'rgba(199, 199, 199, 0.53)',
  },
});
