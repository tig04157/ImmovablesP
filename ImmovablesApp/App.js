import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login  from './Components/Login/Login';
import test  from './Components/Login/test';
import MainScreen from  './Components/MainScreen'

const AppStackNavigator = createStackNavigator({
  Main:{
      screen: MainScreen // Login 컴포넌트를 네비게이터에 등록
    },
  },
  {
    headerLayoutPreset: 'center'
  }
);

export default createAppContainer(AppStackNavigator);