/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {ThemeProvider} from 'react-native-elements';
import BookDetail from './src/screens/BookDetail';
import Collection from './src/screens/Collection';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';

// // import Drawer from './src/components/Public/Menu/Drawer';
// import {SafeAreaView, ScrollView} from 'react-native';

// // ScrollView => horizontal true

// const App = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Home />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

import * as React from 'react';
import {View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Collection" component={Collection} />
        <Drawer.Screen name="BookDetail" component={BookDetail} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
