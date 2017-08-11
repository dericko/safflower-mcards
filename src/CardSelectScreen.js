import React from 'react';
import { deck } from './assets';
import Grid from './Grid';
import { Text, Button } from 'react-native';

export default class CardSelectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'All Cards',
    title: 'All Cards',
    headerLeft: <Button title="|=|" onPress={() => navigation.navigate('DrawerOpen')} />,
  });
  navigateToCardScreen = (item) => {
    this.props.navigation.navigate('CardScreen', { image: item.image })
  }
  render() {
    return (
      <Grid
        items={deck}
        onSelectItem={this.navigateToCardScreen}
      />
    );
  }
}
