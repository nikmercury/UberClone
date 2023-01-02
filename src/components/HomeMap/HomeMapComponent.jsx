import {View, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

export const HomeMapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {cars.map(car => (
        <Marker key={car.id} coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={styles.image}
            source={require('../../assets/images/top-UberXL.png')}
          />
        </Marker>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  image: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
});
