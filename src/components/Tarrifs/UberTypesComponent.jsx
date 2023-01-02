import {View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './uber-types-component.styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const UberTypesComponent = ({tariff}) => {
  const returnIcon = () => {
    if (tariff === 'UberX') {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/UberX.jpeg')}
        />
      );
    }
    if (tariff === 'Comfort') {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/Comfort.jpeg')}
        />
      );
    }
    if (tariff === 'UberXL') {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/UberXL.jpeg')}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      {returnIcon()}
      <View style={styles.bodyContainer}>
        <Text style={styles.tarrifName}>
          {tariff} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:30 dropoff</Text>
      </View>
      <View style={styles.priceContainer}>
        <Ionicons name={'pricetag'} size={18} color={'green'} />
        <Text style={styles.price}>est. $27</Text>
      </View>
    </View>
  );
};
