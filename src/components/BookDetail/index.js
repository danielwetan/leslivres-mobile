/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import img from '../../assets/images/harry-potter.jpg';
import {Image, Button} from 'react-native-elements';

const BookDetail = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={img}
            style={{
              // width: 120,
              // height: 190,
              width: 130,
              height: 200,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
          <View style={styles.detail}>
            <Text style={styles.bookTitle}>Harry Potter</Text>
            <Text style={styles.bookGenre}>Fiction</Text>
            <Text style={styles.bookAuthor}>J.K. Rowling</Text>
            <View style={styles.borrowButton}>
              <Button title="borrow" />
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
    </>
  );
};

export default BookDetail;
