import {View, Text} from 'react-native';
import React from 'react';
import styles from './covid-message-component.styles';

export const CovidMessageComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        he team at The Points Guy loves to travel, but now is not the time for
        unnecessary trips. Health officials say the fastest way to return to
        normalcy is to stop coming in contact with others.
      </Text>
      <Text style={styles.learnMore}>Learn more {'->'}</Text>
    </View>
  );
};
