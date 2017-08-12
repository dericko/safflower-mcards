import React from 'react';
import { config } from './assets';
import Grid from './Grid';
import { Text, Button } from 'react-native';
import DrawerOpenIcon from './DrawerOpenIcon';

export default class GroupSelectScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Groups',
    title: 'Groups',
    headerLeft: <DrawerOpenIcon navigation={navigation} />
  });
  navigateToGroupScreen = (item) => {
    this.props.navigation.navigate('GroupScreen', { name: item.name, stack: item.stack })
  }
  render() {
    return (
      <Grid
        items={config.stacks}
        onSelectItem={this.navigateToGroupScreen}
      />
    );
  }
}
