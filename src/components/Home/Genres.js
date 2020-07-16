/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const Genres = () => {
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
          Genres
        </Text>
      </View>
    </>
  );
};

export default Genres;
