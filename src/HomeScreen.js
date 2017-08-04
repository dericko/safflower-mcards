import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { config } from './assets';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const MARGIN = WINDOW_WIDTH * .04;
const HEIGHT = (WINDOW_HEIGHT / 4) - MARGIN;
const WIDTH = (WINDOW_HEIGHT / 6) - MARGIN / 2;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { stacks } = config;
    return (
      <Container style={styles.container}>
        {stacks.map(({name, stack}) =>
          <Button
            center
            key={name}
            style={[{ backgroundColor: 'rgb(134, 176, 255)'}, styles.stack]}
            onPress={() => this.props.navigation.navigate('StackScreen', { name: name, stack: stack })}>
            <Text style={styles.text}>{name}</Text>
          </Button>
        )}
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  text: {
    textAlign: 'center',
    fontSize: HEIGHT / 10,
  },
  stack: {
    height: HEIGHT,
    width: WIDTH,
    marginTop: MARGIN,
    marginLeft: MARGIN,
  }
});
