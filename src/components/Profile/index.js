/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './syles';

import ProfileInfo from './ProfileInfo';
import HistoryList from './HistoryList';

const Profile = (props) => {

  return (
    <>
      <View style={[styles.container, styles.profile]}>
        <ProfileInfo nav={props.nav} />
        <HistoryList />
        </View>
    </>
  );
};

export default Profile;
