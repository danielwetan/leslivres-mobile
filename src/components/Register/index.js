import React from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

const Register = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Username</Text>
        <Input placeholder="Username" />

        <Text style={styles.body}>Full Name</Text>
        <Input placeholder="John Doe" />

        <Text style={styles.title}>Email</Text>
        <Input placeholder="email@example.com" />

        <Text style={styles.title}>Password</Text>
        <Input placeholder="Password" />

        <Button title="Register" />
      </View>
    </>
  );
};

export default Register;
