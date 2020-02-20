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

export default class HeaderComponent extends Component {


  render() {
    const underlayColor = 'rgba(73,182,77,1,0.9)';
    const {
      handleListPress,
      handleSearchPress,
      handleCategoriesPress,
      box1IconName,
      box2TextValue,
      box3IconName,
      box4IconName,
      box5IconName,
      fontSizeProp,
      box1IconSize,
    } = this.props;
    let fontSizeOps = fontSizeProp;
    return (
      <View style={styles.container}>

        <View style={ styles.box1 }>
          <Icon name={ box1IconName } size={box1IconSize} color="#fff"  />
        </View>

        <View style={ styles.box2 }>
          <Text style={ [{ fontSize: fontSizeOps }, styles.allListText] }>{box2TextValue}</Text>
        </View>

        <View style={ styles.box3 }>
          <TouchableHighlight
            onPress={ handleListPress }
            underlayColor
          >
            <Icon name={box3IconName} size={hp('3%')} color="#fff"  />
          </TouchableHighlight>
        </View>

        <View style={ styles.box4 }>
          <TouchableHighlight
            onPress={ handleSearchPress }
            underlayColor
          >
            <Icon name={box4IconName} size={hp('3%')} color="#fff"  />
          </TouchableHighlight>
        </View>

        <View style={ styles.box5 }>
          <TouchableHighlight
            onPress={ handleCategoriesPress }
            underlayColor
          >
            <Icon name={box5IconName} size={hp('3%')} color="#fff"  />
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0176be',
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,

    elevation: 10,
  },
  box1: {
    width: wp('15%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingLeft: wp('4%'),
    paddingTop: hp('3%')
  },
  box2: {
    width: wp('25%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingTop: hp('3%')
  },
  box3: {
    width: wp('30%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingLeft: wp('20%'),
    paddingTop: hp('1.5%')
  },
  box4: {
    width: wp('15%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingLeft: wp('5%'),
    paddingTop: hp('3%')
  },
  box5: {
    width: wp('15%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingLeft: wp('8%'),
    paddingTop: hp('3%')
  },
  allListText: {
    fontWeight: '700',
    color: '#fff'
  }
});
