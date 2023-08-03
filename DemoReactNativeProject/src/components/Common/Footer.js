//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Style from './style';
// import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const Footer = () => {
  const styles = Style();
  return (
    <View style={styles.footerContainer}>
      <Text>Footer</Text>
    </View>
  );
};

//make this component available to the app
export default Footer;
