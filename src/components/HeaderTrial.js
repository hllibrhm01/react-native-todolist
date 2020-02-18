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
    const { handleListPress, handleSearchPress, handleCategoriesPress } = this.props;
    return (
      <View style={styles.container}>

        <View style={ styles.box1 }>
          <Icon name="check-square" size={hp('5%')} color="#fff"  />
        </View>

        <View style={ styles.box2 }>
          <Text style={ styles.allListText }>All List</Text>
        </View>

        <View style={ styles.box3 }>
          <TouchableHighlight
            onPress={ handleListPress }
            underlayColor
          >
            <Icon name="sort-down" size={hp('3%')} color="#fff"  />
          </TouchableHighlight>
        </View>

        <View style={ styles.box4 }>
          <TouchableHighlight
            onPress={ handleSearchPress }
            underlayColor
          >
            <Icon name="search" size={hp('3%')} color="#fff"  />
          </TouchableHighlight>
        </View>

        <View style={ styles.box5 }>
          <TouchableHighlight
            onPress={ handleCategoriesPress }
            underlayColor
          >
            <Icon name="ellipsis-v" size={hp('3%')} color="#fff"  />
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
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,

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
    paddingLeft: wp('10%'),
    paddingTop: hp('3%')
  },
  allListText: {
    fontSize: hp('3%'),
    fontWeight: '700',
    color: '#fff'
  }
});

