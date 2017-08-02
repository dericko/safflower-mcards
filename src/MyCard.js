import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

export default function MyCard({ text, color, image }) {
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: color,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      alignSelf: 'center',
      height: 400,
    },
    cardBody: {
      backgroundColor: 'transparent',
    },
    text: {
      color: 'white',
      fontSize: 44,
      fontWeight: 'bold',
    },
    image: {
      borderRadius: 16,
      width: 300,
      height: 400,
    },
  });
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardBody}>
          {image ?
            <Image source={image} style={styles.image}/> :
            <Text style={styles.text}>{text}</Text>
          }
      </CardItem>
    </Card>
  );
}
