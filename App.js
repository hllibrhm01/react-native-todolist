import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

//import screens
import HomeScreen from './src/screens/HomeScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component{
  render(){
    return (
      //<HomeScreen />
      <AddTodoScreen />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    task: state.setTaskReducer.taskList,
});

export default connect(mapStateToProps)(App);