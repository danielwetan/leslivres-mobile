/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import {Image} from 'react-native-elements';

import img from '../../assets/images/harry-potter.jpg';
import img1 from '../../assets/images/harry-potter-1.jpg';
import img2 from '../../assets/images/catching-fire.jpg';

import FeaturedSingle from './FeaturedSingle';
import axios from 'axios';

import {API_URL} from '@env';

const Featured = (props) => {
  const [books, setBook] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState('');
  const [genre, setGenre] = useState('');

  const getBooks = () => {
    axios({
      metod: 'GET',
      url: 'http://192.168.43.186:3000/book',
      params: {
        search: search,
        status: status,
        page: page,
        genre: genre,
      },
    })
      .then((res) => {
        setBook(res.data.body);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getBooks();
  }, []); // jika terjadi perubahan pada search, status, page, genre

  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Quicksand-Bold',
            color: '#373D3F',
          }}>
          Featured
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {books.map((book) => {
              return (
                <FeaturedSingle
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  genre={book.genre}
                  status={book.status}
                  img={book.img}
                  nav={props.nav}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Featured;
