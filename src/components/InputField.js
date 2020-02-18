import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class InputField extends Component{
  render(){
    return (
     <View style={ styles.wrapper }>
      <View style={ styles.inputField } >
       <Text>InputField</Text>
      </View>
     </View>
    );
  }
}

InputField.propTypes = {
};

const styles = StyleSheet.create({
 wrapper: {
     width: wp('70%'),
     height: hp('10%'),
 },
});

