import React, {useState} from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    props
      .dispatch(login(data))
      // .then(() => (console.log(props.auth.isError)))
      .then(() => {
        console.log('Login success!');
        props.nav.navigate('Home');
      })
      .catch((err) => {
        console.log('Username or password is wrong. Message:', err);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Username</Text>
        <Input
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />

        <Text style={styles.title}>Password</Text>
        <Input
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
        <Button onPress={userLogin} title="Login" />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
