//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Categories} from './data/Categories';
import {useNavigation} from '@react-navigation/native';
// import {ScrollView} from 'react-native-gesture-handler';

// create a component
const Category = () => {
  const navigation = useNavigation();
  return (
    // <ScrollView horizontal style={styles.container}>
    //   {Categories.map((item, i) => (
    //     <View key={i}>
    //       <Image
    //         source={require('../assets/images/fresh.jpeg')}
    //         style={styles.imgcat}
    //       />
    //       <Text style={styles.title}>Amazon Fresh</Text>
    //     </View>
    //   ))}
    // </ScrollView>
    <View style={{height: 70}}>
      <FlatList
        horizontal
        data={Categories}
        renderItem={({item, i}) => (
          <TouchableOpacity
            key={i}
            style={styles.categ}
            onPress={() => navigation.navigate('ProductScreen')}>
            <Image source={item.image} style={styles.imgcat} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,

    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },

  imgcat: {
    height: 50,
    width: 50,
  },

  title: {
    fontSize: 10,
    color: '#2c4341',
  },
  categ: {
    paddingHorizontal: 8,
    alignItems: 'center',
    height: 70,
  },
});

//make this component available to the app
export default Category;
