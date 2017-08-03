import React from 'react';
import { StyleSheet } from 'react-native';
import { View, DeckSwiper } from 'native-base';
import MyCard from './MyCard';
import { cards, config } from './assets';

export default class Stack extends React.Component {
  styles = StyleSheet.create({
    stack: {
      width: '100%',
      flex: 1,
    },
  });
  renderCard(card) {
    return <MyCard text={card.text} color={card.color} image={card.image}/>
  }
  render() {
    console.log ('Loaded config: ', config);
    return (
      <View style={this.styles.stack}>
        <DeckSwiper
          dataSource={cards}
          renderItem={this.renderCard}
        />
      </View>
    );
  }
}
