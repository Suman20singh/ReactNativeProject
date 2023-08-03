//import liraries
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const CustomButton = ({onPress, text, type}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,

        {backgroundColor: type == 'primary' ? '#3871f3' : 'lightgray'},
      ]}
      onPress={onPress}>
      <Text style={[styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  //   container_PRIMARY: {
  //     backgroundColor: '#3871f3',
  //   },
  //   container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  //   text_TERTIARY: {
  //     color: 'grey',
  //   },
});

//make this component available to the app
export default CustomButton;
