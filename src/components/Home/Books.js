/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import Book from './Book';
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

        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </View>
    </>
  );
};

export default Books;
