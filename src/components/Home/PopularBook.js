/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

const PopularBook = () => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Popular
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={img}
            style={{
              marginTop: 10,
              width: 130,
              height: 200,
            }}
          />
          <Image
            source={img1}
            style={{
              marginTop: 10,
              marginLeft: 15,
              width: 130,
              height: 200,
            }}
          />
          <Image
            source={img2}
            style={{
              marginTop: 10,
              marginLeft: 15,
              width: 130,
              height: 200,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default PopularBook;
