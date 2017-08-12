import React from 'react';
import { Text } from 'react-native';
import { deck } from './assets';
import DrawerOpenIcon from './DrawerOpenIcon';
import Grid from './Grid';

export default class CardSelectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'All Cards',
    title: 'All Cards',
    headerLeft: <DrawerOpenIcon navigation={navigation} />
  });
  deckWithoutFirstElement() {
    deck.shift();
    return deck;
  }
  navigateToCardScreen = (item) => {
    this.props.navigation.navigate('CardScreen', { image: item.image })
  }
  render() {
    return (
      <Grid
        items={this.deckWithoutFirstElement()}
        onSelectItem={this.navigateToCardScreen}
      />
    );
  }
}
