/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

const AuthorList = () => {
  return (
    <>
      <View
        style={{
          marginTop: 15,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Authors
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={img1}
              style={{
                marginTop: 10,
                width: 80,
                height: 80,
                borderRadius: 50,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              J.K. Rowling
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
              alignItems: 'center',
            }}>
            <Image
              source={img}
              style={{
                marginTop: 10,
                width: 80,
                height: 80,
                borderRadius: 50,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Barrack Obama
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
              alignItems: 'center',
            }}>
            <Image
              source={img2}
              style={{
                marginTop: 10,
                width: 80,
                height: 80,
                borderRadius: 50,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Suzanne Collins
            </Text>
          </View>
          <View
            style={{
              marginLeft: 25,
              alignItems: 'center',
            }}>
            <Image
              source={img}
              style={{
                marginTop: 10,
                width: 80,
                height: 80,
                borderRadius: 50,
                overflow: 'hidden',
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Nelson Mandela
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AuthorList;
