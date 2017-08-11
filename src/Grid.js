import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Text, Button } from 'native-base';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const MARGIN = WINDOW_WIDTH * .04;
const HEIGHT = (WINDOW_HEIGHT / 4) - MARGIN;
const WIDTH = (WINDOW_HEIGHT / 6) - MARGIN / 2;

export default class Grid extends React.Component {
  render() {
    const { items, childScreen } = this.props;
    return (
      <Container style={styles.container}>
        {items.map((item, i) =>
          <Button
            center
            key={i}
            style={[{ backgroundColor: 'rgb(134, 176, 255)'}, styles.item]}
            onPress={() => this.props.onSelectItem(item)}>
            <Text style={styles.text}>{item.name || '{title}'}</Text>
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
  item: {
    height: HEIGHT,
    width: WIDTH,
    marginTop: MARGIN,
    marginLeft: MARGIN,
  }
});
