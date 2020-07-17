/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Button, Icon} from 'react-native-elements';
import {View} from 'react-native';
const TopMenu = (props) => {
  return (
    <>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Header
          leftComponent={
            <Icon
              name="apps"
              color="#373D3F"
              onPress={() => props.nav.openDrawer()}
            />
          }
          centerComponent={{
            text: 'LesLivres',
            style: {
              fontSize: 22,
              fontFamily: 'Quicksand-Bold',
              color: '#373D3F',
            },
          }}
          rightComponent={
            <Icon
              name="apps"
              color="#373D3F"
              onPress={() => props.nav.openDrawer()}
            />
          }
          containerStyle={{
            backgroundColor: '#fff',
          }}
        />
      </View>
    </>
  );
};

export default TopMenu;
