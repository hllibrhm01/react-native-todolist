import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

class Welcome extends Component {

  handleListPress = () => {
    alert('handleListPress');
  }

  handleSortButtonPress = () => {
    alert('handleSortButtonPress');
  }

  handleSearchButtonPress = () => {
    alert('handleSearchButtonPress');
  }

  handleEllipsisButtonPress = () => {
    alert('handleEllipsisButtonPress');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.Header }>
          <HeaderComponent
            handleListPress={ this.handleListPress }
            handleSortButtonPress={ this.handleSortButtonPress }
            handleSearchButtonPress={ this.handleSearchButtonPress }
            handleEllipsisButtonPress={ this.handleEllipsisButtonPress }
          />
        </View>
        <ScrollView style={ styles.mediumField }>
          <Text>ssdfds</Text>
        </ScrollView>
        <View style={ styles.Footer}>
          <FooterComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  mediumField: {
    width: wp('100%'),
    height: ('82%'),
  },
  Footer: {

  }
});

export default Welcome;
