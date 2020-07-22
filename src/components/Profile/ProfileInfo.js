/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './syles';
import {Image, Button} from 'react-native-elements';
import img from '../../assets/images/harry-potter.jpg';
import { connect } from "react-redux";
import {logout} from '../../redux/actions/auth';

const Profile = (props) => {
  // console.log("Hello", props.auth.data.full_name)

  const logout = () => {
    props.logout();
    console.log("Logout success!")
    props.nav.navigate("Login")
  }

  return (
    <>
      <View style={styles.profile}>
        {/* <Image
          source={img}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: 'hidden',
          }}
        /> */}
        <Text style={styles.username}>{props.auth.data.username}</Text>
        <Text style={styles.name}>{props.auth.data.full_name}</Text>
        <Text style={(styles.email, {marginBottom: 10})}>{props.auth.data.email}</Text>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Profile)