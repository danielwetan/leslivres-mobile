import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';


const App = () => {
  return (
    <>
      <ThemeProvider>
        <Register />
      </ThemeProvider>
    </>
  );
};

export default App;
