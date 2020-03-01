import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
  TouchableHighlight,
  Vibration,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Modal from "react-native-modal";

import AddCalendar from '../components/AddCalendar';

import { connect } from 'react-redux';
import setTask from '../redux/actions/setTask';
import modalVisible from '../redux/actions/modalVisible';

class Trial extends Component {
  state = {};

  toggleModal = () => {
    !this.props.isModalVisible ? modalVisible(true) : modalVisible(false);
  };

  /*
    <Button title="Show modal" onPress={this.toggleModal} />
    <Modal isVisible={this.props.isModalVisible}>
      <View style={{ flex: 1 }}>
        <View style={ styles.container }>
          <AddCalendar
            style={ styles.calendar }
          />
        </View>
        <Button title="Hide modal" onPress={this.toggleModal} />
      </View>
    </Modal>
    */

  render() {
    return (
      <View style={ styles.wrapper }>
        <Button
          title='Modal'
          onPress={ this.toggleModal }
        />
        <AddCalendar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {

  },
  calendar: {
    width: wp('60%'),
    height: hp('50%'),
  },
});

const mapStateToProps = (state, ownProps) => ({
    task: state.setTaskReducer.taskList,
    isModalVisible: state.modalVisibleReducer.isModalVisible,
});

export default connect(mapStateToProps)(Trial);
