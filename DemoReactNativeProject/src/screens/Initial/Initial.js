//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Style from './style';
// create a component
const Initial = () => {
  const styles = Style();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={{marginBottom: 20}}>
          Log In
        </Text>
        <Text onPress={() => navigation.navigate('SignUp')}>Register</Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Initial;
