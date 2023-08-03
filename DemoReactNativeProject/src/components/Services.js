//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {RecentSearchData} from './data/RecentSearchData';

// create a component
const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
      style={styles.container}>
      <View style={styles.servicesContainer}>
        <View style={styles.servicesRow}>
          <View style={styles.innercontainer}>
            <Image
              source={require('../assets/images/amazon-pay.png')}
              style={styles.imgservices}
            />
            <Text style={styles.serviceTitle}>Amazon Pay</Text>
          </View>
          <View style={styles.innercontainer}>
            <Image
              source={require('../assets/images/send-money.jpg')}
              style={styles.imgservices}
            />
            <Text style={styles.serviceTitle}>Send Money</Text>
          </View>
        </View>
        <View style={styles.servicesRow}>
          <View style={styles.innercontainer}>
            <Image
              source={require('../assets/images/pay-bills.jpeg')}
              style={styles.imgservices}
            />
            <Text style={styles.serviceTitle}>Pay Bills</Text>
          </View>
          <View style={styles.innercontainer}>
            <Image
              source={require('../assets/images/scan-qr.jpeg')}
              style={styles.imgservices}
            />
            <Text style={styles.serviceTitle}>Scan QR</Text>
          </View>
        </View>
        {/* <View style={styles.servicesRow}>
          <View style={styles.innercontainer}>
            <Image
              source={require('../assets/images/pay-bills.jpeg')}
              style={styles.imgservices}
            />
            <Text style={styles.serviceTitle}>Pay Bills</Text>
          </View>
          <View style={styles.innercontainer}>
            <Image
              source={require('../assets/images/scan-qr.jpeg')}
              style={styles.imgservices}
            />
            <Text style={styles.serviceTitle}>Scan QR</Text>
          </View>
        </View> */}
      </View>
      {RecentSearchData.map(item => (
        <View key={item.id} style={styles.outerContainer}>
          <Text style={styles.outerContainerText}>{item.title}</Text>
          <Image source={item.image} style={styles.servicesImg} />
        </View>
      ))}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingHorizontal: 10,
  },
  servicesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  servicesContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
  imgservices: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innercontainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  serviceTitle: {
    fontSize: 10,
    color: 'black',
    marginTop: 2,
  },
  servicesImg: {
    height: 130,
    width: '100%',
  },
  outerContainer: {
    backgroundColor: 'white',
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 150,
  },
  outerContainerText: {
    fontSize: 13,
    color: 'black',
    marginBottom: 8,
  },
});

//make this component available to the app
export default Services;
