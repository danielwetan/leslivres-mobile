/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SearchBar} from 'react-native-elements';

import {View} from 'react-native';

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
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
        }}>
        <SearchBar
          placeholder="What are you looking for?"
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{
            backgroundColor: '#fff',
            borderTopColor: '#fff',
            borderBottomColor: '#fff',
          }}
          inputContainerStyle={{
            backgroundColor: 'lightgray',
          }}
          inputStyle={{
            fontSize: 15,
            fontFamily: 'Quicksand-Bold',
          }}
          searchIcon={{
            size: 25,
          }}
        />
      </View>
    );
  }
}
