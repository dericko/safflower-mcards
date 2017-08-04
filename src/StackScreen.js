import React from 'react';
import { deck } from './assets';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Swiper from './Swiper';
import MyCard from './MyCard';

export default class StackScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });
  state = {
    stack: this.props.navigation.state.params.stack.map(i => deck[i])
  }
  renderCard(card) {
    return <MyCard image={card.image}/>
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stack}>
         <Swiper
           cards={this.state.stack}
           renderCard={this.renderCard}
           backgroundColor="transparent"
           onSwipedAll={() => this.props.navigation.goBack()}
         />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(199, 199, 199, 0.53)',
  },
  stack: {
    width: '100%',
    flex: 1,
  },
});
