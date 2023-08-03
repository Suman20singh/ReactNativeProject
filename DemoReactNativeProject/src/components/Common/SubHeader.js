//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const SubHaider = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bbeBef', '#bdeee9', '#c3f1e3']}
      style={styles.container}>
      <Feather name="map-pin" size={18} color="#2c4341" />

      <Text style={styles.deliver}>Deliver to Suman - Banka 813110</Text>
      <Ionicons name="chevron-down" size={18} color="#2c4341" />
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 13,
    width: '100%',
    alignItems: 'center',

    height: 45,
  },

  deliver: {
    fontSize: 14,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});

//make this component available to the app
export default SubHaider;
