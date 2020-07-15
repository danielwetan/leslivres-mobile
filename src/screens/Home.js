import React from 'react';
import {Text} from 'react-native';
import Search from '../components/search';
import Bottom from '../components/menu/Bottom';
import TopMenu from '../components/menu/Top';

import {ThemeProvider, Avatar} from 'react-native-elements';

const Home = () => {
  return (
    <>
      <TopMenu />
      <Search />
    </>
  );
};

export default Home;
