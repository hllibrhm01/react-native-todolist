import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../styles/colors';

import HeaderComponent from '../components/HeaderComponent';
import InputField from '../components/InputField';

export default class AddTodoScreen extends Component {
  constructor(props){
    super(props);

  }

  handleIconPress = () => {
    alert('clicked');
  }

  render() {
    return (
      <View style={styles.container}>
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
            />
          </View>
        </View>
      </View>
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
});
