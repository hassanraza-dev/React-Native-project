import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Search from './views/Search'


const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#00aaff"/>
    <Search />
    </>
  );
};



export default App;
