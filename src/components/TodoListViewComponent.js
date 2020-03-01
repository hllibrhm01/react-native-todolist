import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Container, Content, Button} from 'native-base';

import colors from '../styles/colors';
import AddSumButton from './AddSumButton';
import AddTaskComponent from './AddTaskComponent';

import { connect } from 'react-redux';

class TodoListViewComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoListViewState: true,
    }
  }

  handleAddTaskPress = () => {
    this.state.todoListViewState ?
    this.setState({ todoListViewState: false }) :
    this.setState({ todoListViewState: true });
  }

  renderNothingTodoScreen = () => {
    return (
      <View style={ styles.iconNullTodoView }>
        <Icon name='tree' size={hp('20%')} style={{ color: colors.darkGray }} />
        <Text style={ styles.nothingTodoText }>Nothing to do</Text>
      </View>
    )
  }

  renderTaskListScreen = () => {
    const { taskText } = this.props;
    const { handleDeletePress } = this.props;
    return (
      this.props.task === null ? null :
      (
      <AddTaskComponent
        handleDeletePress={ handleDeletePress }
        taskText={ taskText }
      />
      )
    )

  }


  render() {
    const underlayColor = 'rgba(73,182,77,1,0.9)';
    const { handleListPress, handleSearchPress,
      handleCategoriesPress, handleAddSumButton } = this.props;
    return (
      <View style={styles.container}>
        <View style={ styles.scrollView }>
        {
         this.state.todoListViewState ?
         ( this.renderTaskListScreen() ) :
         ( this.renderNothingTodoScreen() )
        }
        </View>
        <View style={ styles.addTodoButton }>
          <AddSumButton
            //handleAddSumButton={ this.handleAddTaskPress }
            handleAddSumButton={ handleAddSumButton }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  nothingTodoText: {
    color: colors.darkGray,
    fontSize: hp('3%'),
  },
  addTodoButton: {
    position: 'absolute',
    right: wp('3%'),
    bottom: hp('10%'),
  },
});

const mapStateToProps = (state, ownProps) => ({
    task: state.setTaskReducer.taskList,
});

export default connect(mapStateToProps)(TodoListViewComponent);
