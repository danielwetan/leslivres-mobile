/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

const Books = () => {
  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Quicksand-Bold',
            color: '#373D3F',
          }}>
          Books
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={img}
              style={{
                marginTop: 10,
                width: 160,
                height: 240,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              Harry Potter
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              J.K. Rowling
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <Image
              source={img1}
              style={{
                marginTop: 10,
                width: 160,
                height: 240,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              Harry Potter
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              J.K. Rowling
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={img}
              style={{
                marginTop: 10,
                width: 160,
                height: 240,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              Harry Potter
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              J.K. Rowling
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <Image
              source={img1}
              style={{
                marginTop: 10,
                width: 160,
                height: 240,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              Harry Potter
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              J.K. Rowling
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Books;
