import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '../styles/colors';

import HeaderComponent from '../components/HeaderComponent';
import InputField from '../components/InputField';

//action
import setTask from '../redux/actions/setTask';

class AddTodoScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }
  handleIconPress = () => {
    alert('Voice Button');
  }

  handleDatePress = () => {
    alert('Date button');
  }

  handleBackButtonClick = () => {
    this.props.navigation.replace('Home');
    return true;
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  async componentDidMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    try {
      const result = JSON.parse(await AsyncStorage.getItem("todolist"));
      this.props.task.length < result.length && (
        result.map(e => setTask(e))
      )
    } catch (error) {
      console.log('Error GET  ' + error.message)
    }
  }

  handleCategoriesPress = async (e) => {
    e.preventDefault();
    if(this.state.text){
      this.props.task.push(this.state.text);
      //this.props.navigation.replace('Home');
    }
    try {
      const result = await AsyncStorage.setItem("todolist", JSON.stringify(this.props.task));
      } catch (error) {
        console.log('Error SET  ' + error.message);
      }
    this.setState({ text: '' });
  }

  handleBackPress = () => {
    this.props.navigation.replace('Home');
  }

  renderItemList(){
    let newDate = new Date();
    let second = newDate.getSeconds();

    return (
      this.props.task.map( (item, index) =>
        <View style={ styles.taskContainer }>
          <Text style={ styles.textItem } key={ index+1 } >{` ${item}  ${index} `}</Text>
          <Button title="Delete"
            key={ index }
            onPress={ async () =>  {
              this.props.task.splice(index, 1);
              console.log(this.props.task);
              try {
                const result = await AsyncStorage.setItem("todolist", JSON.stringify(this.props.task));
              } catch (error) {
                console.log('Error SET  ' + error.message);
              }
              this.setState({ text: '' });
            } } />
        </View>
      )
    )
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <HeaderComponent
          box1IconName={'arrow-left'}
          box2TextValue={'New Task'}
          box5IconName={'check'}
          fontSizeProp={hp('2.5%')}
          box1IconSize={hp('3%')}
          handleListPress={ this.handleListPress }
          handleSearchPress={ this.handleSearchPress }
          handleCategoriesPress={ this.handleCategoriesPress }
          handleBackPress={ this.handleBackPress }
        />
        <View style={ styles.upperAreaWrapper }>
          <Text style={ styles.text1 }>What is to be done ?</Text>
          <View style={ styles.inputField }>
            <InputField
              placeHolder='Enter Task Here'
              iconName={ 'microphone' }
              iconSize={ hp('2%') }
              iconColor={ colors.blue }
              handleIconPress={ this.handleIconPress }
              onChangeText={ e => this.setState({ text: e }) }
              value={this.state.text}
            />
          </View>
        </View>
        <View style={ styles.lowerAreaWrapper }>
          <Text style={ styles.text2 }>Due date</Text>
          <View style={ styles.inputField }>
            <InputField
              placeHolder='Date not set'
              iconName={ 'calendar' }
              iconSize={ hp('2%') }
              iconColor={ colors.blue }
              value={this.state.text}
              handleIconPress={ this.handleDatePress }
              //onChangeText={text => (text)}
            />
          </View>
        </View>
        <ScrollView style={ styles.outputTask }>
            {
              this.renderItemList()
            }
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    flexDirection: 'column',
    display: 'flex'
  },
  upperAreaWrapper: {
    flexDirection: 'column',
    width: wp('100%'),
    height: hp('15%'),
    padding: wp('5%'),
  },
  lowerAreaWrapper: {
    flexDirection: 'column',
    width: wp('100%'),
    height: hp('20%'),
    padding: wp('5%'),
  },
  text1: {
    fontSize: hp('1.8%'),
    color: colors.blue,
    fontWeight: '700',
  },
  text2: {
    fontSize: hp('1.8%'),
    color: colors.blue,
    fontWeight: '700',
  },
  outputTask: {
    width: wp('100%'),
    height: hp('50%'),
  },
  itemList: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('10%'),
    marginRight: wp('10%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    borderRadius: 10,
    padding: hp('2%'),
  },
});

const mapStateToProps = (state, ownProps) => ({
    task: state.setTaskReducer.taskList,
});

export default connect(mapStateToProps)(AddTodoScreen);
