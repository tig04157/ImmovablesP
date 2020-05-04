import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import Login  from './Components/Login/Login';
import test  from './Components/Login/test';
import MainScreen from  './Components/MainScreen'
import Signup from './Components/Signup/Signup'
import Wishlist from './Components/Util/WriteUtil/Wishlist'
import post from './Components/bottom/Write/Post'

/*
const WriteStack = createStackNavigator({
  //Write,
  
},

)*/

const detail = createStackNavigator(
  {
    post,  
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
        //title: 'Home',
    }),
    headerTitleAlign: 'center'  
},
)

const HomeStack = createStackNavigator(
  {
    MainScreen,
    
    toDetail: {
      screen: detail,
      navigationOptions: ({navigation}) => ({
          title:'',
          headerShown: false,
      }),
      headerLayoutPreset: 'center',

    },
  },

  {
      defaultNavigationOptions: ({navigation}) => ({
          title: 'Home',
      }),
      headerTitleAlign: 'center'
  },
  
);

const AppStackNavigator = createStackNavigator({
  
  LoginScreen: Login,

  next: {
      screen: HomeStack,
      navigationOptions: ({navigation}) => ({
          headerShown: false,
      }),
        headerLayoutPreset: 'center'
    },
  Signup: {
    screen: Signup,
  },

  },
);

export default createAppContainer(AppStackNavigator);