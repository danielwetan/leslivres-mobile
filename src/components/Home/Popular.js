/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Image} from 'react-native-elements';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

import {API_URL} from '@env';

const Popular = () => {
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
            Popular
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                  width: 130,
                  height: 200,
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
                marginLeft: 15,
              }}>
              <Image
                source={img1}
                style={{
                  marginTop: 10,
                  width: 130,
                  height: 200,
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
                marginLeft: 15,
              }}>
              <Image
                source={img2}
                style={{
                  marginTop: 10,
                  width: 130,
                  height: 200,
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
                Catching Fire
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Quicksand-Bold',
                  color: '#373D3F',
                }}>
                Suzanne Colins
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Image
                source={img1}
                style={{
                  marginTop: 10,
                  width: 130,
                  height: 200,
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
                marginLeft: 15,
              }}>
              <Image
                source={img2}
                style={{
                  marginTop: 10,
                  width: 130,
                  height: 200,
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
                Catching Fire
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Quicksand-Bold',
                  color: '#373D3F',
                }}>
                Suzanne Colins
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Popular;
