import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './destination-search-screen.styles';
import {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export const DestinationSearchScreen = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Current location"
        onPress={(data, details = null) => {
          setOriginPlace({data, details});
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDxd-PkqPOzY0QoUE36IhIi2_ePskzXNz0',
          language: 'en',
        }}
        styles={{
          textInput: styles.textInput,
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Where to?"
        onPress={(data, details = null) => {
          setDestinationPlace({data, details});
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDxd-PkqPOzY0QoUE36IhIi2_ePskzXNz0',
          language: 'en',
        }}
        styles={{
          textInput: styles.textInput,
        }}
      />
    </SafeAreaView>
  );
};
