import BookDetail from './src/screens/BookDetail';
import Collection from './src/screens/Collection';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import storage from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = storage;

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          {/* <View> */}
          <Drawer.Navigator 
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            labelStyle: { fontFamily: 'Quicksand-Bold' },
          }}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Collection" component={Collection} />
            <Drawer.Screen name="BookDetail" component={BookDetail} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
          </Drawer.Navigator>
          {/* </View> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
