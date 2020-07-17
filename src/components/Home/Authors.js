/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';
import axios from 'axios';

import Author from './Author';

const AuthorList = () => {
  const [author, setAuthor] = useState('');

  const getAuthor = () => {
    axios({
      metod: 'GET',
      url: 'http://192.168.43.186:3000/author/1',
    })
      .then((res) => {
        setAuthor(res.data.body);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getAuthor();
  }, []); // jika terjadi perubahan pada search, status, page, genre

  return (
    <>
      <View
        style={{
          marginTop: 15,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Quicksand-Bold',
            color: '#373D3F',
          }}>
          Authors
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Author />
            <Author />
            <Author />
            <Author />
            <Author />
            <Author />
            <Author />

          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AuthorList;
