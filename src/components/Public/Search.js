/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SearchBar} from 'react-native-elements';
import {View} from 'react-native';

import style from '../../styles/Public/Search';

const Search = (props) => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search)
  };

    return (
      <View style={style.container}>
        <SearchBar
          placeholder="What are you looking for?"
          onChangeText={updateSearch}
          value={search}
          containerStyle={style.searchBarContainer}
          inputContainerStyle={style.searchBarInputContainer}
          inputStyle={style.searchBarInput}
          searchIcon={style.searchIcon}
          onSubmitEditing={() =>props.nav.navigate('Collection', {search: search})}
        />
      </View>
    );
  }

export default Search;