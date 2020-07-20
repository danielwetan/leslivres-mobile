import React, {useState} from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';

const Register = props => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('2');

  const userRegistration = () => {
    const data = {
      username: username,
      full_name: fullName,
      email: email,
      password: password,
      role: '2'
    }
    props.dispatch(register(data))
      .then(() => {

        console.log('Register success!')
        props.nav.navigate('Login')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Username</Text>
        <Input onChangeText={text => setUsername(text)} placeholder="Username" />

        <Text style={styles.body}>Full Name</Text>
        <Input onChangeText={text => setFullName(text)} placeholder="John Doe" />

        <Text style={styles.title}>Email</Text>
        <Input onChangeText={text => setEmail(text)} placeholder="email@example.com" />

        <Text style={styles.title}>Password</Text>
        <Input onChangeText={text => setPassword(text)} placeholder="Password" />
        <Button onPress={userRegistration} title="Register" />
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Register)