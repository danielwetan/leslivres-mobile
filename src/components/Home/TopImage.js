import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements'

import img from '../../assets/images/reading_time.png';

const TopImage = () => {
  return(
    <>
      <View style={{
        flex: 1,
        backgroundColor: '#162447',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        }}>
      <Image
          source={img}
          style={{
            marginTop: -130,
            height: 250,
            overflow: 'hidden',
            borderRadius: 50,
            // borderBottomRightRadius: 50,
          }}
        />
      </View>
    </>
  )
}

export default TopImage;