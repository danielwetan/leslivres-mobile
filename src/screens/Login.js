import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../components/Login';
import {SafeAreaView} from 'react-native';

const Login = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default Login;
