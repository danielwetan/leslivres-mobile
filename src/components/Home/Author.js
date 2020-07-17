/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import {Image} from 'react-native-elements';
import img1 from '../../assets/images/harry-potter-1.jpg';

const Author = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.img;

  return (
    <>
      <TouchableHighlight
        underlayColor={'lightgray'}
        activeOpacity={1}
        onPress={() => props.nav.navigate('BookDetail')}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={img1}
            style={{
              marginTop: 10,
              width: 70,
              height: 70,
              borderRadius: 50,
              overflow: 'hidden',
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              fontFamily: 'Quicksand-Bold',
              color: '#373D3F',
            }}>
            J.K. Rowling
          </Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default Author;
