import React from 'react'; 
import {View, Text, ScrollView} from 'react-native';
import Genre from './Genre';
import { ListItem } from 'react-native-elements'

const Genres = () => {

  const list = [
    {
      title: 'Fiction',
      icon: 'av-timer'
    },
    {
      title: 'Biography',
      icon: 'flight-takeoff'
    },
    {
      title: 'Fiction',
      icon: 'av-timer'
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
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
            }}>
              <Genre />

          </View>
        </ScrollView> */}
  <View style={{
    backgroundColor: 'gray',
    flexDirection: 'row'
  }}>
    <View style={{
      flex: 1,
    }}>
          {
          list.map((item, i) => (
              <ListItem
              containerStyle={{
                // backgroundColor: 'lightgray',
                maxHeight: 45,
                // maxWidth: 175,
              }}
              contentContainerStyle={{
                // backgroundColor: 'red'
              }}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: 'gray'}}
              />
            ))
          }
          </View>
          <View style={{
      flex: 1,
    }}>
          {
          list.map((item, i) => (
            <ListItem
            containerStyle={{
              // backgroundColor: 'lightgray',
              maxHeight: 45,
              // maxWidth: 175,
            }}
            contentContainerStyle={{
              // backgroundColor: 'red'
            }}
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon, color: 'gray'}}
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