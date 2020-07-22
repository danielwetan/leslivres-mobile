/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import img from '../../assets/images/harry-potter.jpg';
import {Image, Button} from 'react-native-elements';

const BookDetail = (props) => {

  const Borrow = () => {
    return 'hello'
  }

  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'http://192.168.43.186:3000/img/' + props.img}}
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
            <Text style={styles.bookTitle}>{props.title}</Text>
            <Text style={styles.bookGenre}>{props.genre}</Text>
            <Text style={styles.bookAuthor}>{props.author}</Text>
            <Text style={styles.bookStatus}>{props.status}</Text>
            <View style={styles.borrowButtonContainer}>
              <Button buttonStyle={{backgroundColor: '#004380'}} titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16,}} title="Borrow" />
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionBody}>{props.description}</Text>
        </View>
      </View>
    </>
  );
};

export default BookDetail;
