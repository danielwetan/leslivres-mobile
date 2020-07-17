/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Button, Icon, Text} from 'react-native-elements';
import {View} from 'react-native';
import styles from './styles';
const TopMenu = (props) => {
  const openDrawer = () => {
    props.nav.openDrawer();
  };
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
              name="list"
              type="entypo"
              color="#373D3F"
              // onPress={() => props.nav.openDrawer()}
              onPress={openDrawer}
            />
          }
          // centerComponent={{
          //   text: 'LesLivres',
          //   style: {
          //     fontSize: 22,
          //     fontFamily: 'Quicksand-Bold',
          //     color: '#373D3F',
          //   },
          // }}
          centerComponent={
            <Text
              style={styles.logoText}
              onPress={() => props.nav.navigate('Home')}>
              LesLivres
            </Text>
          }
          rightComponent={
            <Icon
              name="account-circle"
              color="#373D3F"
              onPress={() => props.nav.navigate('Profile')}
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
