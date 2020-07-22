import React, {useState, useEffect} from 'react';

import {Text, View} from 'react-native';

const History = (props) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (props.status === 1) {
      setStatus('Borrowed');
    } else {
      setStatus('Returned');
    }
  }, [props]);

  return (
    <>
      <View style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <Text style={{
          fontSize: 16, 
          fontFamily: 'Quicksand-Bold',
          }}>
          {props.book}
        </Text>
        <Text style={{
          fontSize: 14, 
          fontFamily: 'Quicksand-Bold',
          color: 'gray',
          marginBottom: 10,
          }}>
          {status}
          </Text>
      </View>
    </>
  );
};

export default History;
