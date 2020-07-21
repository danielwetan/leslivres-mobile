import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements'

import img from '../../assets/images/reading_time.png';

const TopImage = () => {
  return(
    <>
      <View style={{
        flex: 1,
        backgroundColor: '#303960',
        borderBottomEndRadius: 80,
        // borderBottomStartRadius: 80,
        }}>
      <Image
          source={img}
          style={{
            marginTop: -110,
            height: 250,
            overflow: 'hidden',
            borderBottomRightRadius: 80,
          }}
        />
      </View>
    </>
  )
}

export default TopImage;