import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

//import screens
import Welcome from './src/screens/Welcome';
import HomeScreen from './src/screens/HomeScreen';

class App extends Component{
  render(){
    return (
      <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
