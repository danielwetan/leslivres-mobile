/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Book from './Book';


import { connect } from 'react-redux';
import { getBook } from '../../redux/actions/book';

const BookList = () => {
  const [books, setBook] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('')
  const [page, setPage] = useState('');
  const [genre, setGenre] = useState('');

  const getBook = () => {
    
  }

  return (
    <>
      <Book />
    </>
  );
};

export default BookList;
