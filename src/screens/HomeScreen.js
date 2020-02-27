import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeaderComponent from '../components/HeaderComponent';
import TodoListViewComponent from '../components/TodoListViewComponent';
import FooterComponent from '../components/FooterComponent';

//screens
import AddTodoScreen from './AddTodoScreen';

export default class HomeScreen extends Component {

  handleListPress = () => {
    alert('List Press');
  }

  handleSearchPress = () => {
    alert('Search Press');
  }

  handleCategoriesPress = () => {
    alert('Categories Press');
  }

  handleAddSumButton = ({ navigation }) => {
    this.props.navigation.replace('AddTodoScreen')

  }

  handleDeletePress = () => {
    alert('Delete button press');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <HeaderComponent
            box1IconName={'check-square'}
            box2TextValue={'All List'}
            box3IconName={'sort-down'}
            box4IconName={'search'}
            box5IconName={'ellipsis-v'}
            fontSizeProp={hp('3%')}
            box1IconSize={hp('5%')}
            handleListPress={ this.handleListPress }
            handleSearchPress={ this.handleSearchPress }
            handleCategoriesPress={ this.handleCategoriesPress }
          />
        </View>
        <View style={ styles.todoListView } >
          <TodoListViewComponent 
            handleAddSumButton={ this.handleAddSumButton }
            handleDeletePress={ this.handleDeletePress }
          />
        </View>
        <View style={ styles.footer }>
          <FooterComponent />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex'
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});
