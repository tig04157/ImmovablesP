import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './Login/Login' 
import test1 from './test1'
import test2 from './test2'

const AppTabNavigator = createBottomTabNavigator({
    //LoginTab : {screen: Login},
    test1: {screen:test1},
    test2: {screen:test2}
})

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    //headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
    //headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    title: <Text>어디 살래?</Text>,
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