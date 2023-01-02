import {ScrollView} from 'react-native';
import React from 'react';
import {HomeMapComponent} from '../../components';
import {CovidMessageComponent} from '../../components';
import {HomeSearchComponent} from '../../components';

export const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeMapComponent />
      <CovidMessageComponent />
      <HomeSearchComponent />
    </ScrollView>
  );
};
