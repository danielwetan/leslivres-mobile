/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Text, Button} from 'react-native-elements';

const TopMenu = () => {
  return (
    <>
      <Header
        leftComponent={{
          icon: 'apps',
          color: '#111',
          size: 30,
        }}
        centerComponent={{
          text: 'LesLivres',
          style: {color: '#111', fontSize: 22, fontWeight: 'bold'},
        }}
        rightComponent={{
          icon: 'account-circle',
          color: '#111',
          size: 30,
        }}
        containerStyle={{
          backgroundColor: '#fff',
        }}
      />
    </>
  );
};

export default TopMenu;
