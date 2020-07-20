/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Image} from 'react-native-elements';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

import BookList from './BookList';

const Collection = (props) => {
  return (
    <>
      {/* <Text
        style={{
          fontFamily: 'Quicksand-SemiBold',
          marginLeft: 20,
          marginRight: 20,
          paddingTop: 5,
          paddingBottom: 5,
          color: '#373D3F',
        }}>
        Sorted by Date added
      </Text> */}
      <BookList nav={props.nav} />
    </>
  );
};

export default Collection;
