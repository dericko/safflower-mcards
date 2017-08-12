import React from 'react';
import Grid from './Grid';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default DrawerOpenIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 15 }}
      onPress={() => navigation.navigate('DrawerOpen')}>
      <Icon ios='ios-menu' android="md-menu"/>
    </TouchableOpacity>
  );
}
