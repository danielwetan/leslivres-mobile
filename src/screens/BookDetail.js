/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input, Button} from 'react-native-elements';
import TopMenu from '../components/Public/Menu/Top';
import Main from '../components/BookDetail';
import {SafeAreaView} from 'react-native';
import Axios from 'axios';

const BookDetail = ({route, navigation}) => {
  const {id} = route.params;
  const [bookData, setBookData] = useState([]);

  const getBookData = () => {
    Axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/book/' + id,
    })
      .then((res) => {
        setBookData(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookData();
  }, [id]);

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <TopMenu nav={navigation} />
        {bookData.map((data) => {
          return (
            <Main
              key={data.id}
              id={data.id}
              author={data.author}
              description={data.description}
              genre={data.genre}
              img={data.img}
              status={data.status}
              title={data.title}
            />
          );
        })}
      </SafeAreaView>
    </>
  );
};

export default BookDetail;
