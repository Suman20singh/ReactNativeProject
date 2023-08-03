//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ScreenLayout from '../components/Common/ScreenLayout';
import SubHaider from '../components/Common/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brand from '../components/Brand';

// create a component
const HomeScreen = () => {
  return (
    // <View>
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHaider />
        <Category />
        <Carousel />
        <Services />
        <Deals />
        <Brand />
      </ScrollView>
    </ScreenLayout>

    // </View>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

//make this component available to the app
export default HomeScreen;
