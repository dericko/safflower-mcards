import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Card, CardItem, View, Text } from 'native-base';
import FlipCard from 'react-native-flip-card'; // TODO use or rm

const CARD_HEIGHT = Dimensions.get('window').height * .8;
const CARD_WIDTH = Dimensions.get('window').width * .9;

export default function MyCard({ image }) {
  const styles = StyleSheet.create({
    cardFront: {
      alignSelf: 'center',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
    },
    image: {
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
    },
    cardBack: {
      alignSelf: 'center',
      backgroundColor: 'white',
    },
    text: {
      fontSize: 44,
      fontWeight: 'bold',
    },
  });
  return (
    <Card style={styles.cardFront}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={image}
      />
    </Card>
  )
  // return (
  //   <FlipCard
  //     style={styles.cardFront}
  //     friction={10}
  //     perspective={500}
  //     flipHorizontal={true}
  //     flipVertical={false}
  //     onFlipped={(isFlipped)=>{console.log('isFlipped', isFlipped)}}
  //     >
  //     <CardItem cardBody style={styles.cardBody}>
  //         <Image resizeMode="contain" source={image} style={styles.image}/>
  //     </CardItem>
  //     <CardItem cardBody style={[styles.cardFront, styles.cardBack]}>
  //         <Text>Back of card</Text>
  //     </CardItem>
  //   </FlipCard>
  // );
}
