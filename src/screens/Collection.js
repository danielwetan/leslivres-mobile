import React from 'react';
import {View, Text} from 'react-native';
import TopMenu from '../components/Public/Menu/Top';
import Search from '../components/Public/Search';
import Main from '../components/Collection';

const Collection = ({navigation}) => {
  return (
    <>
      <TopMenu nav={navigation}/>
      <Search />
      <Main />
    </>
  );
};

export default Collection;
