//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Style from './style';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
// create a component
const Header = () => {
  // const styles = Style();
  return (
    // <View>
    <LinearGradient
      colors={['#88dae0', '#98e1d6', '#9ee4d4']}
      style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'black',
          margin: 10,
          borderRadius: 12,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: 30,
          }}>
          <EvilIcon name="search" size={20} color="#1f1f1f" />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Search Amazon.in"
            style={{height: 40, width: '100%'}}
          />
        </View>
        <View style={{width: 30, justifyContent: 'center'}}>
          <AntDesign name="scan1" size={20} color="#909594" />
        </View>
      </View>
      <View style={{width: 40, justifyContent: 'center'}}>
        <Feather name="mic" size={20} color="#ffffff" />
      </View>

      {/* <Feather name="mic" size={20} color="#ffffff" /> */}
    </LinearGradient>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: '100%',
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#a1bcc0',
    borderRadius: 12,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Header;
