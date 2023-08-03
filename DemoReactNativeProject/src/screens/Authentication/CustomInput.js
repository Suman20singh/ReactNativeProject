//import liraries
// import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const MyComponent = ({value, setValue, Placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={Placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.Input}
        onChangeText={setValue}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  Input: {},
});

//make this component available to the app
export default MyComponent;
