//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const Brand = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.dealTitle}>Top Brands for you</Text>
        <View style={styles.innerContainerRow}>
          <View style={styles.innerContainerBrand}>
            <Image
              source={require('../assets/images/brand1.jpeg')}
              style={styles.styleImgBrand}
            />
            <Text style={styles.brabdTitle}>Min. 20% off Neklace</Text>
          </View>
          <View style={styles.innerContainerBrand}>
            <Image
              source={require('../assets/images/brand2.jpeg')}
              style={styles.styleImgBrand}
            />
            <Text style={styles.brabdTitle}>
              Min. 40% off Titan Smart Watch
            </Text>
          </View>
        </View>
        <View style={styles.innerContainerRow}>
          <View style={styles.innerContainerBrand}>
            <Image
              source={require('../assets/images/brand3.jpeg')}
              style={styles.styleImgBrand}
            />
            <Text style={styles.brabdTitle}>
              Heels up to 50% off on Sandals,Heels
            </Text>
          </View>
          <View style={styles.innerContainerBrand}>
            <Image
              source={require('../assets/images/brand4.jpeg')}
              style={styles.styleImgBrand}
            />
            <Text style={styles.brabdTitle}>
              Sony 60W Blutooth SoundBar Speaker Audio Engine 35% off
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',

    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  styleImgBrand: {
    height: 150,
    width: '100%',
    borderRadius: 5,
  },
  dealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

    padding: 10,
  },
  //   innerContainer: {
  //     padding: 10,
  //   },
  innerContainerRow: {
    flexDirection: 'row',
  },
  innerContainerBrand: {
    width: '50%',
    padding: 10,
  },
  brabdTitle: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
});

//make this component available to the app
export default Brand;
