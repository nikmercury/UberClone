import {View} from 'react-native';
import React from 'react';
import {UberTypesComponent} from '../../components';
import {HomeMapComponent} from '../../components';

export const CarSelectionScreen = () => {
  return (
    <View>
      <HomeMapComponent />
      <UberTypesComponent tariff={'UberX'} />
      <UberTypesComponent tariff={'Comfort'} />
      <UberTypesComponent tariff={'UberXL'} />
    </View>
  );
};
