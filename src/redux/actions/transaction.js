import axios from 'axios';

const getTransaction = () => {
  return {
    type: 'GET_TRANSACTION',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/' + 'transaction/1',
    }),
  };
};

export {getTransaction};
