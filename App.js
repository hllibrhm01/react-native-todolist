import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

//import screens
import HomeScreen from './src/screens/HomeScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import Trial from './src/screens/Trial';

import AsyncStorage from '@react-native-community/async-storage';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

class App extends Component{
  render(){
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={ HomeScreen }
        />
        <Stack.Screen
          name="AddTodoScreen"
          component={ AddTodoScreen }
        />
        <Stack.Screen
          name="Trial"
          component={ Trial }
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    task: state.setTaskReducer.taskList,
});

export default connect(mapStateToProps)(App);
