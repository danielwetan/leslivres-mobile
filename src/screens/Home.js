import React from 'react';
import {Text} from 'react-native';
import Search from '../components/Public/search';
import Bottom from '../components/Public/Menu/Bottom';
import TopMenu from '../components/Public/Menu/Top';
import Popular from '../components/Home/Popular';
import Authors from '../components/Home/Authors';


import {ThemeProvider, Avatar} from 'react-native-elements';

const Home = () => {
  return (
    <>
      <TopMenu />
      <Search />
      <Popular />
      <Authors />
    </>
  );
};

export default Home;
