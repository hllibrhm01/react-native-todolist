import React from 'react';
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

export default class HomeScreen extends React.Component {

  handleListPress = () => {
    alert('List Press');
  }

  handleSearchPress = () => {
    alert('Search Press');
  }

  handleCategoriesPress = () => {
    alert('Categories Press');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <HeaderTrial
            handleListPress={ this.handleListPress }
            handleSearchPress={ this.handleSearchPress }
            handleCategoriesPress={ this.handleCategoriesPress }
          />
        </View>
        <View style={ styles.todoListView } >
          <TodoListViewComponent />
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
  todoListView: {
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});
