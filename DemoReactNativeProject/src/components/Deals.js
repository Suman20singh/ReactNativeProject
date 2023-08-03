//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dealTitle}>Recommended deals for you</Text>
      <Image
        source={require('../assets/images/recommend.jpg')}
        style={styles.dealImg}
      />
      <View style={styles.buttomSection}>
        <View style={styles.buttomSectionRow}>
          <TouchableOpacity style={styles.dealBtn}>
            <Text style={styles.buttomSectionText}>18% off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.buttomSectionRow}>
          <Text style={styles.discountPrice}>₹ 1549.00</Text>
          <Text style={styles.mrp}>MRP</Text>
          <Text style={styles.actualPrice}>₹ 1895.00</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Skin Cleanser for all skin
        </Text>
        <Text style={styles.productDeal}>
          See all deals in Beauty & Personal Care
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  dealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },

  dealImg: {
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  buttomSection: {
    paddingHorizontal: 10,
  },
  dealBtn: {
    backgroundColor: '#f0c14b',
    width: 60,
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
  },
  buttomSectionText: {
    color: 'white',
    fontSize: 12,
  },
  deal: {
    color: '#be0201',
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 12,
  },
  buttomSectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    color: 'black',
    fontSize: 16,
    marginVertical: 5,
  },
  mrp: {
    color: 'black',
    fontSize: 10,
    marginHorizontal: 5,
    // marginVertical:5,
  },
  actualPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: 'black',
    fontSize: 14,
  },
  productDeal: {
    color: '#017185',
    fontSize: 14,
    marginVertical: 10,
  },
});

//make this component available to the app
export default Deals;
