import React from 'react';
import Home from './src/screens/Home';
import {ThemeProvider} from 'react-native-elements';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
