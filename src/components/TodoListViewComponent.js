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

class TodoListViewComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoListViewState: false,
    }
  }


  render() {
    const underlayColor = 'rgba(73,182,77,1,0.9)';
    const { handleListPress, handleSearchPress, handleCategoriesPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={ styles.scrollView }>
        {
         this.state.todoListViewState === false && (
          <View style={ styles.iconNullTodoView }>
          <Icon name='tree' size={hp('20%')} style={{ color: colors.darkGray }} />
          <Text style={ styles.nothingTodoText }>Nothing to do</Text>
          </View>
          )}
        </View>
        <View style={ styles.addTodoButton }>
          <AddSumButton
            handleAddSumButton={ () => alert('AddSumButton')  }
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

export default TodoListViewComponent;
