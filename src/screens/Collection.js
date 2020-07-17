import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import TopMenu from '../components/Public/Menu/Top';
import Search from '../components/Public/Search';
import Main from '../components/Collection';

const Collection = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopMenu nav={navigation} />
          <Search />
          <Main />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Collection;
