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

class AddTaskComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoListViewState: false,
    }
  }

  render() {
    const { handleDeletePress, taskText, dateText } = this.props;
    const underlayColor = 'rgba(73,182,77,1,0.9)';
    const { handleListPress, handleSearchPress, handleCategoriesPress } = this.props;
    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={ styles.textWrapper }>
                <Text style={ styles.task }>{ taskText }</Text>
                <Text style={ styles.date }>Sat, Feb 22,2020, 12:00</Text>
            </View>

            <TouchableHighlight 
                underlayColor={ false }
                onPress={ handleDeletePress }
                style={ styles.iconRubbish }>
                <Icon name='trash' size={hp('3%')} style={{ color: colors.black }} />
            </TouchableHighlight>
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: wp('90%'),
    padding: hp('1%'),
    margin: hp('1%'),
    borderRadius: hp('0.7%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,

    elevation: 5,
  },
  textWrapper: {
      width: wp('80%'),      
  },
  iconRubbish: {
      justifyContent: 'center',
      width: wp('5%'),      
  },
  task: {
      fontSize: hp('2%'),
      padding: hp('0.5%'),
  },
  date: {
      fontSize: hp('1.7%'),
      padding: hp('0.5%'),
      color: colors.lightBlue,
  },
});

export default AddTaskComponent;