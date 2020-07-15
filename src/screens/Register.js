/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

const Register = () => {
  return (
    <>
      <View style={{marginTop: 135, marginRight: 30, marginLeft: 30}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'gray',
          }}>
          Username
        </Text>
        <Input placeholder="Username" />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'gray',
          }}>
          Full Name
        </Text>
        <Input placeholder="John Doe" />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'gray',
          }}>
          Email
        </Text>
        <Input placeholder="email@example.com" />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'gray',
          }}>
          Password
        </Text>
        <Input placeholder="Password" />

        <Button title="Register" />
      </View>
    </>
  );
};

export default Register;
