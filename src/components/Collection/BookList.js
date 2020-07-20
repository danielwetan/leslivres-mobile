/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Book from './Book';
import axios from 'axios';

import {connect} from 'react-redux';
import {getBook} from '../../redux/actions/book';

const BookList = (props) => {
  const [books, setBook] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState('');
  const [genre, setGenre] = useState('');

  // console.log(props.genreId)

  // let genreParams = props.genreId;

  const getBooks = () => {
    axios({
      method: 'GET',
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
  //   setGenre(genreParams)
  // }, [genreParams])

  useEffect(() => {
    getBooks()
  }, [search, status, page, genre]) // jika terjadi perubahan pada search, status, page, genre

  return (
    <>
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
            nav={props.nav}
          />
        );
      })}
    </>
  );
};

export default BookList;
