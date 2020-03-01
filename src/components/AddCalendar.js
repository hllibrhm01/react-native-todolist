import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  //Vibration
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Modal from "react-native-modal";

import { connect } from 'react-redux';
import modalVisible from '../redux/actions/modalVisible';

import {Container, Content, Button} from 'native-base';

import colors from '../styles/colors';

class AddCalendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      nowDateNumber: Date.now(),
      nowDate: new Date(),
      year: new Date().getFullYear().toString(),
      month: (new Date().getMonth() + 1).toString(),
      day: new Date().getDate().toString(),
    };
  }

  onDayPress = (day) => {
    console.log('selected day', day);
    alert(day.dateString);
  }
    /* StartVibrationFunction=()=>{
    Vibration.vibrate(DURATION) ;
  }*/

  handleCancelPress = () => {
    !this.props.isModalVisible ? modalVisible(true) : modalVisible(false);
  }

  render() {
    const { nowDateNumber, nowDate,
      year, month, day } = this.state;
    const { handleOkPress } = this.props;
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};
    let monthString = (month.length === 1 ? `0${month}` : `${month}`).toString();
    let dayString = (day.length === 1 ? `0${day}` : `${day}`).toString();
    let nowCalendar = `${year}-${monthString}-${dayString}`
    let nowCalendarToString = nowCalendar.toString();

    const monthToNumber = parseInt(this.state.month);

    const DURATION = 10000;
    const PATTERN = [1000, 2000, 3000];

    /*
    Vibration.vibrate(DURATION);
    Vibration.vibrate(PATTERN);
    Vibration.vibrate(PATTERN, true);
    Vibration.cancel();
    */

    return (
        <Modal isVisible={ this.props.isModalVisible }>
          <View style={ styles.modalWrapper }>
            <View style={ styles.container }>
              <View style={ styles.dateViewStyle }>
                <Text
                  style={{ color: colors.white, fontSize: hp('4%'), fontWeight: 'bold' }}
                >Fri, Feb 28</Text>
              </View>
              <Calendar
                minDate={ nowCalendarToString }
                current={ nowCalendarToString }
                showWeekNumbers={true}
                onPressArrowRight={addMonth => addMonth()}
                hideDayNames={true}
                showWeekNumbers={false}
                firstDay={1}
                onDayPress={ this.onDayPress }
                style={ styles.calendar }
              />
            <View style={ styles.okCancelButtonStyle }>
              <Button transparent
                onPress={ this.handleCancelPress }
                style={{ marginLeft: wp('3%'), marginRight: wp('5%') }}
              >
                <Text
                  style={{ color: colors.blue, fontWeight: 'bold' }}
                >Cancel</Text>
              </Button>
              <Button transparent
                style={{ marginLeft: wp('3%'), marginRight: wp('6%') }}
                onPress={ handleOkPress }
              >
                <Text
                  style={{ color: colors.blue, fontWeight: 'bold' }}
                >Ok</Text>
              </Button>
            </View>
            </View>
          </View>
        </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  modalWrapper: {
    flex: 1,
  },
  dateViewStyle: {
    width: wp('90%'),
    height: hp('15%'),
    backgroundColor: colors.blue,
    justifyContent: 'center',
    paddingLeft: wp('5%'),
  },
  calendar: {
    width: wp('90%'),
    height: hp('50%'),
  },
  okCancelButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
});


const mapStateToProps = (state, ownProps) => ({
    isModalVisible: state.modalVisibleReducer.isModalVisible,
});

export default connect(mapStateToProps)(AddCalendar);
