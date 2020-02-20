import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

//import screens
import HomeScreen from './src/screens/HomeScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';

export default class App extends Component{
  render(){
    return (
      //<HomeScreen />
      <AddTodoScreen />
    );
  }
}
