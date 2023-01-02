import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './favorite-destination-component.styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const FavoriteDestination = ({type, name}) => {
  const returnIcon = () => {
    if (type === 'home') {
      return (
        <View style={[styles.icon, styles.iconBlue]}>
          <Entypo name={'home'} size={16} color={'white'} />
        </View>
      );
    }
    return (
      <View style={[styles.icon, styles.iconGrey]}>
        <AntDesign name={'clockcircle'} size={16} color={'white'} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {returnIcon()}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};
