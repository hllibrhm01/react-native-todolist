import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
  Vibration
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class AddTodoScreen extends Component {
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

  StartVibrationFunction=()=>{
    const DURATION = 10000 ;
    const PATTERN = [ 1000, 2000, 3000, 4000] ;
    Vibration.vibrate(DURATION) ;
  }

  render() {
    const { nowDateNumber, nowDate, year, month, day } = this.state;
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

    Vibration.vibrate(DURATION);
    Vibration.vibrate(PATTERN);
    Vibration.vibrate(PATTERN, true);
    Vibration.cancel();

    return (
      <View style={styles.container}>
        <Calendar
          minDate={ nowCalendarToString }
          current={ nowCalendarToString }
          showWeekNumbers={true}
          onPressArrowRight={addMonth => addMonth()}
          hideDayNames={true}
          showWeekNumbers={false}
          firstDay={1}
          onDayPress={ this.onDayPress }
        />
        <View style={{margin: 10}}>

            <Button title = " Start Vibration " onPress = {this.StartVibrationFunction} />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 70
  },
});
