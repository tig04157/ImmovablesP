import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createBottomTabNavigator } from 'react-navigation-tabs'
import Login from './Login/Login' 

const AppTabNavigator = createBottomTabNavigator({
    LoginTab : {screen: Login}
})

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
    headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    title: <Text>Instagram</Text>,
      
  }

  render() {
    return (
      <AppTabContainet/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});