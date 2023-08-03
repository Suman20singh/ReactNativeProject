//import liraries
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Alert,
} from 'react-native';
// import ScreenLayout from '../../components/Common/ScreenLayout';
import Images from '../../constants/ImageConstant';
import CustomInput from '../../screens/Authentication/CustomInput';
import CustomButton from '../../screens/Authentication/CustomButton';
import {useNavigation} from '@react-navigation/native';

// create a component
const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {height} = useWindowDimensions();
  const handleSignUp = () => {
    // Implement your login logic here
    // For simplicity, we'll just print the username and password for now
    if (
      username === '' ||
      password === '' ||
      email === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('Please fill the form');
      return;
    } else {
      Alert.alert('Login Success');
      navigation.navigate('Initial');
    }
  };

  const onForgetPassword = () => {
    Alert.alert('Login Success');
  };

  return (
    // <ScreenLayout screenTitle="Sign Up"></ScreenLayout>
    <View style={styles.root}>
      <Image
        source={Images.logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomInput
        Placeholder="Enter Your Number !"
        value={username}
        setValue={setUsername}
      />
      <CustomInput Placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        Placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        Placeholder="Confirm password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomButton text="SignUp" onPress={handleSignUp} type="primary" />
      <CustomButton
        text="Forgot password"
        onPress={onForgetPassword}
        type="Secondary"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9fbfc',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 100,
  },
});

//make this component available to the app
export default SignUp;
