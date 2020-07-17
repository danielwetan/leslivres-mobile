/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import styles from './syles';
import img from '../../assets/images/harry-potter.jpg';

const Profile = () => {
  return (
    <>
      <View style={[styles.container, styles.profile]}>
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
          <Text style={styles.username}>danielwetan</Text>
          <Text style={styles.name}>Daniel Saputra</Text>
          <Text style={styles.email}>danielwetan.io@gmail.com</Text>
        </View>
        <Text style={styles.history}>Borrow History</Text>
      </View>
    </>
  );
};

export default Profile;
