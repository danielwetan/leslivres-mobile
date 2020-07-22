/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './syles';
import {Image, Button} from 'react-native-elements';
import img from '../../assets/images/harry-potter.jpg';
import { connect } from "react-redux";
import {logout} from '../../redux/actions/auth';

const Profile = (props) => {
  const logout = () => {
    props.logout();
    console.log("Logout success!")
    props.nav.navigate("Login")
  }

  return (
    <>
      <View style={{
        alignItems: 'center', 
        marginTop: 10, 
        paddingBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        }}>
        <Text style={styles.name}>{props.auth.data.full_name}</Text>
        <Text style={styles.email}>{props.auth.data.email}</Text>
        <Button buttonStyle={{backgroundColor: '#004380', width: 100,}} titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16,}} title="Logout" onPress={() => logout()} />
      </View>

        {/* <Button title="Logout" buttonStyle={{backgroundColor: '#004380'}} titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 18,}} onPress={() => logout()} /> */}
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Profile)