/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';
import { connect } from "react-redux";
import Axios from 'axios';

import Modal from 'react-native-modal';

const BookDetail = (props) => {

  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [showButton, setShowButton] = useState(true)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(false)
  };

  const Borrow = () => {
    Axios({
      method: 'POST',
      url: 'http://192.168.43.186:3000/transaction',
      data: {
        user: userId,
        book: bookId,
        status: 1,
      },
      headers: {
        Authorization: props.auth.data.mainToken
      }
    })
    .then(() => {
      console.log('Borrow success!')
      setIsModalVisible(true)
      setShowButton(false)
    })
    .catch((err) => {
      console.log(err.response.data.body)
    })
  }

  useEffect(() => {
    setUserId(props.auth.data.id)
    setBookId(props.id)
  }, [])

  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'http://192.168.43.186:3000/img/' + props.img}}
            style={{
              // width: 120,
              // height: 190,
              width: 130,
              height: 200,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
          <View style={styles.detail}>
            <Text style={styles.bookTitle}>{props.title}</Text>
            <Text style={styles.bookGenre}>{props.genre}</Text>
            <Text style={styles.bookAuthor}>{props.author}</Text>
            <Text style={styles.bookStatus}>{props.status}</Text>
            <View style={styles.borrowButtonContainer}>
              {showButton === true ? <Button buttonStyle={{backgroundColor: '#004380'}} titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16,}} title="Borrow" onPress={() => Borrow()} /> : null  }
              {/* <Button buttonStyle={{backgroundColor: '#004380'}} titleStyle={{fontFamily: 'Quicksand-Bold', fontSize: 16,}} title="Borrow" onPress={() => setIsModalVisible(true)} /> */}
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionBody}>{props.description}</Text>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={{ 
            backgroundColor: 'white', 
            height: 80, 
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            }}>
              <View style={{
                flexDirection: 'row',
              }}>
            <Text style={{
              fontFamily: 'Quicksand-Bold',
              fontSize: 18,
              marginRight: 5,
            }}>Borrow Success!</Text>
            <Text style={{
              fontFamily: 'Quicksand-Bold',
              fontSize: 18,
              color: 'blue',
            }} onPress={() => setIsModalVisible(false) }>Ok</Text>
            </View>
          </View>
        </Modal>

      </View>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(BookDetail)