import React from 'react';
import MyCard from './MyCard';
import { deck, config } from './assets';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Swiper from './Swiper';

export default class Stack extends React.Component {
  styles = StyleSheet.create({
    stack: {
      width: '100%',
      flex: 1,
    },
  });
  state = {
    stack: config.stacks[0].stack.map(i => deck[i - 1])
  }
  renderCard(card) {
    return <MyCard image={card.image}/>
  }
  render() {
    const { stack } = this.state;
    return (
      <View style={this.styles.stack}>
       <Swiper
         cards={stack}
         infinite
         renderCard={this.renderCard}
         backgroundColor="transparent"
       />
      </View>
    );
  }
}
