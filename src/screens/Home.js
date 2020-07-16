import React from 'react';
import {Text} from 'react-native';
import Search from '../components/Public/Search';
// import Bottom from '../components/Public/Menu/Bottom';
import TopMenu from '../components/Public/Menu/Top';
import Popular from '../components/Home/Popular';
import Authors from '../components/Home/Authors';
import Books from '../components/Home/Books';

import {ThemeProvider, Avatar} from 'react-native-elements';

const Home = () => {
  return (
    <>
      <TopMenu />
      <Search />
      <Popular />
      <Authors />
      <Books />
    </>
  );
};

export default Home;
