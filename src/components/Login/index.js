import React from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Username</Text>
        <Input placeholder="Username" />

        <Text style={styles.title}>Password</Text>
        <Input placeholder="Password" />

        <Button title="Login" />
      </View>
    </>
  );
};

export default Login;
