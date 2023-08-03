import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Images from '../../constants/ImageConstant';
import {
  screenDimension,
  screenHeight,
  screenWidth,
} from '../../constants/WindowConstant';
import {useNavigation} from '@react-navigation/native';
const Signin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions(Dimensions.get('window'));
    };

    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, we'll just print the username and password for now
    if (username === '' || password === '' || email === '') {
      Alert.alert('Please fill the form');
      return;
    } else {
      Alert.alert('Login Success');
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{height: '100%', width: '100%'}}>
        <ImageBackground
          source={Images.backgroundImage}
          imageStyle={{
            width: screenDimensions.width,
            height: screenDimensions.height,
            backgroundColor: 'green',
          }}>
          <View
            style={[
              styles.container,
              {width: screenDimensions.width, height: screenDimensions.height},
            ]}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={text => setUsername(text)}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry
              value={password}
            />
            <View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              {/* <Button title="Login" onPress={handleLogin} color="#288789"/> */}
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

    // marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  //   logBtn: {
  //     padding: 10,

  //     backgroundColor: '#288789',
  //     borderRadius: 20,
  //     justifyContent: 'center',
  //     color: 'white',
  //     fontSize: 16,
  //     marginTop: 10,
  //   },

  button: {
    width: 250,
    height: 50,
    backgroundColor: '#288789',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Signin;
