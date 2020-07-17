import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import History from './History';

import {connect} from 'react-redux';
import {getTransaction} from '../../redux/actions/transaction';

const HistoryList = (props) => {
  const [transactionData, setTransactionData] = useState([]);

  const getTransactionData = () => {
    Axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/' + 'transaction/1',
    })
      // props
      //   .dispatch(getTransaction())
      .then((res) => {
        // console.log(res.data.body)
        setTransactionData(res.data.body);
        // console.log('props.transaction.data');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  console.log('hello');

  return (
    <>
      {transactionData.map((data) => {
        return (
          <History
            key={data.id}
            id={data.id}
            user={data.user}
            book={data.book}
            status={data.status}
            borrow_date={data.borrow_date}
            return_date={data.return_date}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
});

export default connect(mapStateToProps)(HistoryList);
