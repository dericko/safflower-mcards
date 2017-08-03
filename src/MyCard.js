import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

import FlipCard from 'react-native-flip-card'

const CARD_HEIGHT = Dimensions.get('window').height * .8;
const CARD_WIDTH = Dimensions.get('window').width * .9;

export default function MyCard({ description, color, image }) {
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: color,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'transparent',
      alignSelf: 'center',
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
    },
    cardBody: {
      backgroundColor: 'transparent',
    },
    backSide: {
      alignSelf: 'center',
      backgroundColor: 'white',
    },
    text: {
      fontSize: 44,
      fontWeight: 'bold',
    },
    image: {
      borderRadius: 16,
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
    },
  });
  return (
    <FlipCard
      style={styles.card}
      friction={10}
      perspective={500}
      flipHorizontal={true}
      flipVertical={false}
      onFlipped={(isFlipped)=>{console.log('isFlipped', isFlipped)}}
      >
      <CardItem cardBody style={styles.cardBody}>
          <Image resizeMode="contain" source={image} style={styles.image}/>
      </CardItem>
      <CardItem cardBody style={[styles.card, styles.backSide]}>
          <Text>Back of card</Text>
      </CardItem>
    </FlipCard>
  );
}
