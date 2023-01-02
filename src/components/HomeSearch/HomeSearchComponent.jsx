import {View} from 'react-native';
import React from 'react';
import {styles} from './home-search-component.styles';

import {FavoriteDestination} from './components/';

export const HomeSearchComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <FavoriteDestination name={'Spin Nightclub'} />
      <FavoriteDestination type={'home'} name={'Home'} />
    </View>
  );
};
