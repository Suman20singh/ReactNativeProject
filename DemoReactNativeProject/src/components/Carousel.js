//import liraries
import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
// import CarouselSlider from 'react-native-snap-carousel';
import CarouselSlider, {Pagination} from 'react-native-snap-carousel';
import {CarouselData} from './data/CarouselData';

// create a component

const sliderWidth = Dimensions.get('screen').width;
const Carousel = () => {
  const carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.crouselimg} />
      </View>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <CarouselSlider
        ref={carouselRef}
        data={CarouselData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={500}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{position: 'absolute', bottom: 0, left: '13%'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="white"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },

  crouselimg: {
    height: 250,
    width: '100%',
  },
});

//make this component available to the app
export default Carousel;
