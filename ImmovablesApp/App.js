import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login  from './Components/Login/Login';
import MainScreen from  './Components/MainScreen'

const AppStackNavigator = createStackNavigator({
  Login:{
      screen: Login // Login 컴포넌트를 네비게이터에 등록
    },
  },
  {
    headerLayoutPreset: 'center'
  }
);

export default createAppContainer(AppStackNavigator);