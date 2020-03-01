import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  BackHandler
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeaderComponent from '../components/HeaderComponent';
import TodoListViewComponent from '../components/TodoListViewComponent';
import FooterComponent from '../components/FooterComponent';

import { connect } from 'react-redux';
import setTask from '../redux/actions/setTask';

import AsyncStorage from '@react-native-community/async-storage';

//screens
import AddTodoScreen from './AddTodoScreen';

class HomeScreen extends Component {

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

  async componentWillMount() {
    if(this.state.text){
      this.props.task.push(this.state.text);
    }
    try {
      const result = await AsyncStorage.setItem("todolist", JSON.stringify(this.props.task));
      } catch (error) {
        console.log('Error SET  ' + error.message);
      }
    this.setState({ text: '' });
  }

  async componentDidMount() {
    try {
      const result = JSON.parse(await AsyncStorage.getItem("todolist"));
      this.props.task.length < result.length && (
        result.map(e => setTask(e))
      )
    } catch (error) {
      console.log('Error GET  ' + error.message)
    }
  }

  renderTodoListView = () => {
    return (
      <TodoListViewComponent
        handleAddSumButton={ this.handleAddSumButton }
        handleDeletePress={ this.handleDeletePress }
        taskText={ this.props.task }
      />
    )
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
          {
           this.renderTodoListView()
          }
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

const mapStateToProps = (state, ownProps) => ({
    task: state.setTaskReducer.taskList,
});

export default connect(mapStateToProps)(HomeScreen);
