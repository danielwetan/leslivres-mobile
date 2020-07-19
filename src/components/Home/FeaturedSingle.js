/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import {Image} from 'react-native-elements';

const FeaturedSingle = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.img;

  return (
    <>
      <TouchableHighlight
        underlayColor={'lightgray'}
        activeOpacity={1}
        onPress={() => props.nav.navigate('BookDetail')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginRight: 10,
              width: 140,
            }}>
            <Image
              source={{uri: img}}
              style={{
                marginTop: 10,
                width: 130,
                height: 200,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <View style={{marginRight: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  fontFamily: 'Quicksand-Bold',
                  color: '#373D3F',
                }}>
                {props.title}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F',
              }}>
              {props.author}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default FeaturedSingle;
