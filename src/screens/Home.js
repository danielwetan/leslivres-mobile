import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import Search from '../components/Public/Search';
// import Bottom from '../components/Public/Menu/Bottom';
import TopMenu from '../components/Public/Menu/Top';
import Popular from '../components/Home/Popular';
import Authors from '../components/Home/Authors';
import Books from '../components/Home/Books';

import {ThemeProvider, Avatar, Button} from 'react-native-elements';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <ScrollView>
          <TopMenu nav={navigation} />
          <Search />
          <Popular />
          <Authors />
          <Books />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
