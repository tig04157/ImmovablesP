import React, { Component } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Header, Icon} from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'
import AddiScreen from './DetailedSetting/AddiScreen'
import DescScreen from './DetailedSetting/DescScreen'
import AdressScreen from './DetailedSetting/AdressScreen'
import DefaultScreen from './DetailedSetting/DefaultScreen'

const TabNavigator = createMaterialTopTabNavigator({
    주소: { screen: AdressScreen},
    기본정보: { screen: DefaultScreen },
    추가정보: { screen: AddiScreen },
    설명: { screen: DescScreen },
});
const AppContainer = createAppContainer(TabNavigator);

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ch2:0,
      ch3:0,
      ch4:0
    };
  }
  static navigationOptions = {
    title: 'Great',
  };
 
  render() {
    return (
      <Container>
        <Header>
        </Header>
        <AppContainer/>
      </Container>
    );
  }
}