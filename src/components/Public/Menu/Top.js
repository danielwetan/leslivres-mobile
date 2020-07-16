/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header} from 'react-native-elements';
import {View} from 'react-native';
const TopMenu = () => {
  return (
    <>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Header
          leftComponent={{
            icon: 'apps',
            color: '#111',
            size: 30,
          }}
          centerComponent={{
            text: 'LesLivres',
            style: {
              fontSize: 22,
              fontFamily: 'Quicksand-Bold',
              color: '#373D3F',
            },
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
      </View>
    </>
  );
};

export default TopMenu;
