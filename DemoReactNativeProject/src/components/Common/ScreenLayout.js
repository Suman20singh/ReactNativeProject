//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Style from './style';
import Header from './Header';
import Footer from './Footer';

// create a component
const ScreenLayout = ({children, screenTitle}) => {
  const styles = Style();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screenLayoutContainer}>
        <View style={{height: 60, width: '100%'}}>
          <Header />
        </View>
        <View style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
          {children}
        </View>
        <View style={{height: 50, width: '100%'}}>
          <Footer />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

//make this component available to the app
export default ScreenLayout;
