/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Book from './Book';
import axios from 'axios';

import {connect} from 'react-redux';
import {getBook} from '../../redux/actions/book';

const Books = () => {
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
  // useEffect(() => {
  //   setGenre(genreParams);
  //   setPage(pageParams);
  //   setStatus(statusParams);
  //   setSearch(searchParams);
  // }, [genreParams, pageParams, statusParams, searchParams]);

  useEffect(() => {
    getBooks();
  }, []); // jika terjadi perubahan pada search, status, page, genre

  return (
    <>
      <View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Quicksand-Bold',
              color: '#373D3F',
            }}>
            Books
          </Text>
        </View>
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              status={book.status}
              img={book.img}
            />
          );
        })}
      </View>
    </>
  );
};

export default Books;
