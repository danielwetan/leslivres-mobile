import React from 'react';
import {ThemeProvider} from 'react-native-elements';
// import About from './src/screens/About';
// import BookDetail from './src/screens/BookDetail';
import Collection from './src/screens/Collection';
import Home from './src/screens/Home';
// import Login from './src/screens/Login';
// import Profile from './src/screens/Profile';
// import Register from './src/screens/Register';
import {SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Home />
        <Collection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
