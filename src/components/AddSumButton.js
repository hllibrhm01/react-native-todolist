import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Container, Content, Button} from 'native-base';

import colors from '../styles/colors';

class AddSumButton extends Component {

  render() {
    const underlayColor = 'rgba(73,182,77,1,0.9)';
    const { handleAddSumButton } = this.props;
    return (
        <View style={ styles.container }>
            <Button
              rounded
              style={ styles.addTodoButton }
              onPress={ handleAddSumButton }
            >
              <Icon
                  name="bell"
                  color='white'
                  type="MaterialCommunityIcons"
                  style={{
                      fontSize: hp('4%'),
                      marginLeft : 3
                  }}
              />
            </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: hp('15%'),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  addTodoButton: {
    borderRadius : 32,
    width : 64,
    height : 64,
    justifyContent: 'center',
    backgroundColor: colors.blue,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.75,

    elevation: 10,
  },
});

export default AddSumButton;
