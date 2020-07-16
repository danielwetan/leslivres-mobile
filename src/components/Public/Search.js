/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SearchBar} from 'react-native-elements';
import {View} from 'react-native';

import style from '../../styles/Public/Search';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={style.container}>
        <SearchBar
          placeholder="What are you looking for?"
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={style.searchBarContainer}
          inputContainerStyle={style.searchBarInputContainer}
          inputStyle={style.searchBarInput}
          searchIcon={style.searchIcon}
        />
      </View>
    );
  }
}
