import React from 'react';
import {SearchBar} from 'react-native-elements';

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
          backgroundColor: 'lightgray'
        }}
        inputStyle={{
          fontSize: 15
        }}
        searchIcon={{
          size: 25,
        }}
      />
    );
  }
}
