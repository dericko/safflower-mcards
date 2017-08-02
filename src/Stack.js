import React from 'react';
import { StyleSheet } from 'react-native';
import { View, DeckSwiper } from 'native-base';
import MyCard from './MyCard';

export default class Stack extends React.Component {
  styles = StyleSheet.create({
    stack: {
      width: '100%',
      flex: 1,
    },
  });
  cards = [
    {
      text: 'one',
      color: 'salmon',
      image: require('./assets/c0.jpg'),
    },
    {
      text: 'two',
      color: 'palegreen',
      image: require('./assets/c1.jpg'),
    },
    {
      text: 'three',
      color: 'mediumpurple',
      image: require('./assets/c2.jpg'),
    },
    {
      text: 'four',
      color: 'plum',
    },
  ]
  renderCard(card) {
    return <MyCard text={card.text} color={card.color} image={card.image}/>
  }
  render() {
    return (
      <View style={this.styles.stack}>
        <DeckSwiper
          dataSource={this.cards}
          renderItem={this.renderCard}
        />
      </View>
    );
  }
}
