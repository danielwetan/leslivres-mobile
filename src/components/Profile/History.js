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
      <View>
        <Text>
          {props.book} | {status}
        </Text>
      </View>
    </>
  );
};

export default History;
