//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dealTitle}>ProductScreen</Text>
      <Text style={styles.tagLine}>
        Price and other details may very based on product size and colour
      </Text>
      <View style={styles.productSection}>
        <View style={styles.productImgSection}>
          <Image source={require('..')} />
        </View>
        <View style={styles.productDelSection}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  dealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  tagLine: {
    fontSize: 11,
    // fontWeight: 'bold',
    color: 'grey',
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
  },
  productDelSection: {
    width: '60%',
  },
});

//make this component available to the app
export default ProductScreen;
