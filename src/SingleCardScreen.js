import React from 'react';
import { Button } from 'react-native';
import { deck } from './assets';
import MyCard from './MyCard';
import DrawerOpenIcon from './DrawerOpenIcon';

export default class CardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Pick a Card',
    title: 'Pick a Card',
    headerLeft: <DrawerOpenIcon navigation={navigation} />
  });
  randomCard = () => {
    const range = deck.length;
    const randomIndex = Math.floor(Math.random() * range) + 1; // skip title
    return deck[randomIndex].image;
  }
  render() {
    return <MyCard image={this.randomCard()}/>
  }
}
