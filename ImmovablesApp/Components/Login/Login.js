import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class Login extends Component {

    // navigationOptions 코드 추가
    static navigationOptions = {
      //headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
      //headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
      title: <Text>어디 살래?</Text>,
        
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>로그인 화면</Text>
        </View>
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