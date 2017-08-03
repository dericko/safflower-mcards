import React from 'react';
import { StyleSheet } from 'react-native';
import { View, DeckSwiper } from 'native-base';
import MyCard from './MyCard';
import { deck, config } from './assets';

export default class Stack extends React.Component {
  styles = StyleSheet.create({
    stack: {
      width: '100%',
      flex: 1,
    },
  });
  renderCard(card) {
    return <MyCard description={card.description} color={card.color} image={card.image}/>
  }
  render() {
    const firstStack = config.stacks[0].stack;
    console.log('Ordering:', firstStack.toString());
    const stack = firstStack.map(i => deck[i - 1]);
    return (
      <View style={this.styles.stack}>
        <DeckSwiper
          dataSource={stack}
          renderItem={this.renderCard}
        />
      </View>
    );
  }
}
