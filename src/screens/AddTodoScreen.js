import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../styles/colors';

import HeaderComponent from '../components/HeaderComponent';
import InputField from '../components/InputField';

export default class AddTodoScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList: [],
      text: '',
    };
  }

  handleIconPress = () => {
    alert('clicked');
  }

  handleCategoriesPress = (e) => {
    e.preventDefault();
    this.state.taskList.push(this.state.text);

    console.log(this.state.taskList);

    this.setState({
      text: '',
    });
  }

  inputTask = (text) => {
    this.setState({
      text,
    });
  }

    /*renderItemList = (item, index) => {
  }*/

  renderItemList(){
    return(
      this.state.taskList.map( (item, index) =>
      <View style={ styles.itemList }>
        <Text key={index} style={{ margin: hp('2%'), fontSize: hp('2%'), color: colors.white }}>
          { item }
        </Text>
      </View>
      )
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <HeaderComponent
          box1IconName={'arrow-left'}
          box2TextValue={'New Task'}
          box5IconName={'check'}
          fontSizeProp={hp('2.5%')}
          box1IconSize={hp('3%')}
          handleListPress={ this.handleListPress }
          handleSearchPress={ this.handleSearchPress }
          handleCategoriesPress={ this.handleCategoriesPress }
        />
        <View style={ styles.upperAreaWrapper }>
          <Text style={ styles.text1 }>What is to be done ?</Text>
          <View style={ styles.inputField }>
            <InputField
              placeHolder='Enter Task Here'
              iconName={ 'microphone' }
              iconSize={ hp('2%') }
              iconColor={ colors.blue }
              handleIconPress={ this.handleIconPress }
              onChangeText={ this.inputTask }
              value={this.state.text}
            />
          </View>
        </View>
        <View style={ styles.lowerAreaWrapper }>
          <Text style={ styles.text2 }>Due date</Text>
          <View style={ styles.inputField }>
            <InputField
              placeHolder='Date not set'
              iconName={ 'calendar' }
              iconSize={ hp('2%') }
              iconColor={ colors.blue }
              handleIconPress={ this.handleIconPress }
              //onChangeText={ this.inputTask }
              //onChangeText={text => onChangeText(text)}
            />
          </View>
        </View>
        <ScrollView style={ styles.outputTask }>
            {
              this.renderItemList()
            }
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    flexDirection: 'column',
    display: 'flex'
  },
  upperAreaWrapper: {
    flexDirection: 'column',
    width: wp('100%'),
    height: hp('15%'),
    padding: wp('5%'),
  },
  lowerAreaWrapper: {
    flexDirection: 'column',
    width: wp('100%'),
    height: hp('20%'),
    padding: wp('5%'),
  },
  text1: {
    fontSize: hp('1.8%'),
    color: colors.blue,
    fontWeight: '700',
  },
  text2: {
    fontSize: hp('1.8%'),
    color: colors.blue,
    fontWeight: '700',
  },
  outputTask: {
    width: wp('100%'),
    height: hp('50%'),
    backgroundColor: 'pink',
  },
  itemList: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('10%'),
    marginRight: wp('10%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    borderRadius: 10,
    padding: hp('2%'),
  },
});
