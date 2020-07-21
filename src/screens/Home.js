import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Search from '../components/Public/Search';
// import Bottom from '../components/Public/Menu/Bottom';
import TopMenu from '../components/Public/Menu/Top';
import Featured from '../components/Home/Featured';
// import Authors from '../components/Home/Authors';
import Books from '../components/Home/Books';
import Genres from '../components/Home/Genres'
import TopImage from '../components/Home/TopImage'

import {ThemeProvider, Avatar, Button} from 'react-native-elements';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            backgroundColor: '#303960',
          }}>
          <TopMenu nav={navigation} />
          </View>
          <Search nav={navigation} />
          <TopImage />
          <Featured nav={navigation} />
          {/* <Authors nav={navigation} /> */}
          <Genres nav={navigation} />
          <Books nav={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
