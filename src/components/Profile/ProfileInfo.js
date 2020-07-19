/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './syles';
import {Image} from 'react-native-elements';
import img from '../../assets/images/harry-potter.jpg';

const Profile = (props) => {
  return (
    <>
      <View style={styles.profile}>
        <Image
          source={img}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: 'hidden',
          }}
        />
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.name}>{props.fullName}</Text>
        <Text style={(styles.email, {marginBottom: 10})}>{props.email}</Text>
      </View>
    </>
  );
};

export default Profile;
