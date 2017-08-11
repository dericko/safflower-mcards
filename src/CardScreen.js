import React from 'react';
import MyCard from './MyCard';

export default class CardScreen extends React.Component {
  render() {
    return <MyCard image={this.props.navigation.state.params.image}/>
  }
}
