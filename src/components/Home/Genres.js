import React from 'react'; 
import {View, Text, ScrollView} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const Genres = (props) => {

  const list1 = [
    {
      genre: 'fiction',
      title: 'Fiction',
      type: 'font-awesome',
      icon: 'comments',
    },
    {
      genre: 'history',
      title: 'History',
      type: 'font-awesome',
      icon: 'hourglass-half',
    },
    {
      genre: 'biography',
      title: 'Biography',
      type: 'font-awesome',
      icon: 'users',
    },
  ]

  const list2 = [
    {
      genre: 'nonfiction',
      title: 'Non-Fiction',
      type: 'font-awesome',
      icon: 'pencil',
    },
    {
      genre: 'children',
      title: 'Children',
      type: 'font-awesome',
      icon: 'child',
    },
    {
      genre: 'classic',
      title: 'Classics',
      type: 'font-awesome',
      icon: 'bank',
    },
  ]

  return(
    <>
      <View
        style={{
          // marginTop: 15,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Quicksand-Bold',
            color: '#373D3F',
          }}>
          Genres
        </Text>
      <View style={{
        backgroundColor: 'gray',
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1,
        }}>
          {
          list1.map((item, i) => (
              <ListItem
              containerStyle={{
                // backgroundColor: 'lightgray',
                maxHeight: 50,
                // maxWidth: 175,
              }}
              contentContainerStyle={{
                // backgroundColor: 'red'
              }}
              titleStyle={{
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F'
              }}
                key={i}
                title={item.title}
                leftIcon={{type: item.type, name: item.icon, color: '#373D3F', size: 20,}}
                onPress={() => props.nav.navigate('Collection', {genreName: item.genre})}
                // onPress={() => console.log(item.text)}
              />
            ))
          }
          </View>
          <View style={{
      flex: 1,
    }}>
          {
          list2.map((item, i) => (
              <ListItem
              containerStyle={{
                // backgroundColor: 'lightgray',
                maxHeight: 50,
                // maxWidth: 175,
              }}
              contentContainerStyle={{
                // backgroundColor: 'red'
              }}
              titleStyle={{
                fontFamily: 'Quicksand-Bold',
                color: '#373D3F'
              }}
                key={i}
                title={item.title}
                leftIcon={{type: item.type, name: item.icon, color: '#373D3F', size: 20,}}
                onPress={() => props.nav.navigate('Collection', {genreName: item.genre})}
                // onPress={() => console.log(item.text)}
              />
            ))
          }
          </View>
          </View>
      </View>
    </>
  )
}

export default Genres;