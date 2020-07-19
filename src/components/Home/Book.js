/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';

// import img from '../../assets/images/harry-potter.jpg';
// // import img1 from '../../assets/images/harry-potter-1.jpg';
// import img2 from '../../assets/images/catching-fire.jpg';

const Book = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.img;

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

        <TouchableHighlight
          underlayColor={'lightgray'}
          activeOpacity={1}
          onPress={() => props.nav.navigate('BookDetail', {id: props.id})}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 5,
              paddingBottom: 5,
              // borderTopColor: 'lightgray',
              // borderTopWidth: 1,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: img}}
                style={{
                  width: 70,
                  height: 110,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
              />
            </View>
            <View
              style={{
                marginRight: 120,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Quicksand-Bold',
                  color: '#373D3F',
                }}>
                {props.title}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  fontFamily: 'Quicksand-Bold',
                  color: 'gray',
                }}>
                {props.author}
              </Text>
              <Text
                style={{
                  paddingTop: 3,
                  fontSize: 14,
                  fontFamily: 'Quicksand-Bold',
                  color: '#004380',
                }}>
                {props.genre}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 12,
                  color: '#373D3F',
                  fontFamily: 'Quicksand-Medium',
                }}>
                {props.status}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Book;
