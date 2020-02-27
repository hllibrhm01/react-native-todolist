import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../styles/colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class InputField extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }


  render(){
    const {
      labelText,
      autoCapitalize,
      autoFocus,
      labelTextSize,
      textColor,
      borderBottomColor,
      inputType,
      onChangeText,
      placeHolder,
      iconName,
      iconSize,
      iconColor,
      handleIconPress,
      value,
    } = this.props;
    const { secureInput, scaleCheckmarkValue } = this.state;
    const fontSize = labelTextSize || 14;
    const keyboardType = inputType === 'email' ? 'email-address' : 'default';

    return(
      <View style={ styles.wrapper }>
         <View style={ styles.textWrapper }>
          <TextInput
            placeholder={ placeHolder }
            autoCorrect={false}
            style={ styles.inputField }
            secureTextEntry={ secureInput }
            onChangeText={ onChangeText }
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize}
            autoCorrect={false}
            value={value}
          />
         </View>
         <TouchableHighlight
          style={ styles.icon }
          onPress={ handleIconPress }
          underlayColor={ false }
         >
          <Icon name={ iconName } size={ iconSize } color={ iconColor } />
        </TouchableHighlight>
      </View>
    );
  }
}

InputField.propTypes = {
  labelTextSize: PropTypes.number,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoCapitalize: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textWrapper: {
    width: wp('80%'),
    height: hp('5%'),
  },
  icon: {
    height: hp('5%'),
    width: wp('10%'),
    justifyContent: 'center',
    padding: hp('1%'),
  },
  inputField: {
    marginTop: hp('1%'),
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: colors.blue,
  },
});
