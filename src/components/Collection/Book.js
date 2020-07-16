/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

const Book = () => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}>
        {/* <Text
          style={{
            fontSize: 22,
            fontFamily: 'Quicksand-Bold',
            color: '#373D3F',
          }}>
          Collection
        </Text> */}

        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={img}
              style={{
                width: 80,
                height: 120,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
          </View>
          <View
            style={{
              marginRight: 100,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              Harry Potter and the Socrecrer Stone
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 14,
                fontFamily: 'Quicksand-Bold',
                color: 'gray',
              }}>
              J.K. Rowling
            </Text>
            <Text
              style={{
                paddingTop: 3,
                fontSize: 14,
                fontFamily: 'Quicksand-Bold',
                color: '#004380',
              }}>
              Fiction
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                color: '#373D3F',
                fontFamily: 'Quicksand-Medium',
              }}>
              Available
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Book;
