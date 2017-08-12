import React from 'react';
import { StyleSheet, Dimensions, Image, TouchableHighlight, ListView } from 'react-native';
import { Text, Button } from 'native-base';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const MARGIN = WINDOW_WIDTH * .04;
const HEIGHT = (WINDOW_HEIGHT / 4) - MARGIN;
const WIDTH = (WINDOW_HEIGHT / 6) - MARGIN / 2;

/*
 * A ListView with flexbox for grid
 */
export default class Grid extends React.Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.items),
    }
  }
  renderPlaceholder(item) {
    return (
      <Button disabled light style={styles.placeholder}>
        <Text style={styles.text}>{item.name}</Text>
      </Button>
    );
  }
  renderImage(image) {
    return (
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={image}
      />
    );
  }
  render() {
    return (
      <ListView contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(item) =>
          <TouchableHighlight
            style={styles.item}
            onPress={() => this.props.onSelectItem(item)}>
            {item.image ? this.renderImage(item.image) : this.renderPlaceholder(item) }
          </TouchableHighlight>
        }
      />
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
  item: {
    borderRadius: 8,
    marginTop: MARGIN,
    marginLeft: MARGIN,
  },
  image: {
    borderRadius: 8,
    height: HEIGHT,
    width: WIDTH,
  },
  text: {
    textAlign: 'center',
  },
  placeholder: {
    height: HEIGHT,
    width: WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
