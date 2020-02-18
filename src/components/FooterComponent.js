import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import InputField from './InputField';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class FooterComponent extends Component{
  render(){
    return (
     <View style={ styles.wrapper }>
      <View style={ styles.microphoneButtonStyle } >
        <Icon name='microphone' size={hp('3%')} color='white' />
      </View>
      <View style={ styles.inputFieldStyle }>
        <InputField />
      </View>
     </View>
    );
  }
}

FooterComponent.propTypes = {
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0176be',
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('7%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,

    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  microphoneButtonStyle: {
    margin: hp('2%'),
  },
  inputFieldStyle: {

  },
});
