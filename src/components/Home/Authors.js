/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

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
      </View>
    </>
  );
};

export default AuthorList;
