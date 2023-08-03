//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Style = () => {
  return StyleSheet.create({
    // headerContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: 'red',
    // },
    footerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
    },
    screenLayoutContainer: {
      flex: 1,
      flexDirection: 'column',
    },
  });
};
//make this component available to the app
export default Style;
