import React, { Component, useState } from 'react';
import {   StyleSheet,   Alert,  Button,   Image,  TextInput,   Text,   View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'native-base';
import CustomButton from '../Util/LoginUtil/CustomButton';
import axios from 'axios';
import Main from './../MainScreen'
import Signup from '../Signup/Signup'

export default class Login extends Component {
    // navigationOptions 코드 추가
    static navigationOptions = {
      title: <Text>어디 살래?</Text>,
    }
    
    constructor(props) {  
        super(props);  
        this.state = {
          id: '',
          pw: '',
          dataku: [],
      };  
    }  
    klikPost(){
      //var url = 'http://192.168.0.25:3210/data';
      var url = 'http://192.168.0.25:3210/chinfo'
      axios.post(url, {
        id: this.state.id,
        pw: this.state.pw
      })
      .then(function (response) {
        if(response.data.values=="중복"){
          
        }
        else if(response.data.values=="중복아님"){
          alert('아이디 혹은 비밀번호가 다릅니다.');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      this.state.id = '';
      this.state.pw = ''; 
      this.props.navigation.replace('next')
     
    };
    
   /* _doLogin(){
      // do something
      this.props.navigation.replace('next')
    }   */

    render() {    
      return (
        <View style={styles.container}>  
        <View style={styles.header}></View>        
        <View style={styles.title}>
        <Image style={{height:'100%',width:'100%', resizeMode:'contain'}} source={require('./../../assets/applogo.png')}/>

        </View>
        
        <View>
        <Text style={{color:"rosybrown"}}>아이디</Text>
        <TextInput  
              style={{height: 40, backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
              placeholder="아이디"  
              onChangeText={(id) => this.setState({id})}  
              value={this.state.id}
          />
        </View>
        <View>
        <Text style={{color:"rosybrown"}}>비밀번호</Text>
          <TextInput  
              style={{height: 40, backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
              placeholder="비밀번호"  
              onChangeText={(pw) => this.setState({pw})} 
              value={this.state.pw}

          />
        </View>
        <View style={styles.content}></View>
        <View style={styles.footer}></View>
          <CustomButton 
            buttonColor={'cornflowerblue'}
            title={'로그인'}
            onPress={this.klikPost.bind(this)}
            
            />
          <CustomButton 
            buttonColor={'mediumseagreen'}
            title={'회원가입'}
            onPress={() => this.props.navigation.navigate('Signup')}/>
      </View>  
      );
    }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#EFE4B0'
    },
    header: {
      width:'100%',
      height:'1%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFE4B0',
    },
    title: {
      width:'100%',
      height:'30%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFE4B0',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFE4B0',
    },
    footer: {
      flex: 1,
      width: '100%',
      height: 50,
      backgroundColor: '#EFE4B0',
    },
  });