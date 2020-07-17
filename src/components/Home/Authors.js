/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

const AuthorList = () => {
  return (
    <>
      <View
        style={{
          marginTop: 15,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Quicksand-Bold',
            color: '#373D3F',
          }}>
          Authors
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <View
              style={{
                marginLeft: 10,
                alignItems: 'center',
              }}>
              <Image
                source={img}
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
                Barrack Obama
              </Text>
            </View>
            <View
              style={{
                marginLeft: 5,
                alignItems: 'center',
              }}>
              <Image
                source={img2}
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
                Suzanne Collins
              </Text>
            </View>
            <View
              style={{
                marginLeft: 5,
                alignItems: 'center',
              }}>
              <Image
                source={img}
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
                Nelson Mandela
              </Text>
            </View>

            <View
              style={{
                marginLeft: 10,
                alignItems: 'center',
              }}>
              <Image
                source={img}
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
                Nelson Mandela
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AuthorList;
