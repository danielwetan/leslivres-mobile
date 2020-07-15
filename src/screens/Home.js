import React from 'react';
import {Text} from 'react-native';
import Search from '../components/Public/search';
import Bottom from '../components/Public/Menu/Bottom';
import TopMenu from '../components/Public/Menu/Top';
import Popular from '../components/Home/PopularBook';

import {ThemeProvider, Avatar} from 'react-native-elements';

const Home = () => {
  return (
    <>
      <TopMenu />
      <Search />
      <Popular />
    </>
  );
};

export default Home;
