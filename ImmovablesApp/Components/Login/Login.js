import React, { Component, useState } from 'react';
import {TouchableOpacity,AsyncStorage, StyleSheet,   Alert,  Button,   Image,  TextInput,   Text,   View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'native-base';
import CustomButton from '../Util/LoginUtil/CustomButton';
import http from '../../http-common'
import Main from './../MainScreen'
import Signup from '../Signup/Signup'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Login extends Component {
    // navigationOptions 코드 추가
    static navigationOptions = {
      header : null
      // title: <Text>어디 살래?</Text>,
    }
    
    constructor(props) {  
        super(props);  
        this.state = {
          id: '',
          pw: '',
          dataku: [],
          textInputData: '',
          getValue: '',
      };  
    }  

     klikPost(){
      http.post('/login/chinfo', {
        id: this.state.id,
        pw: this.state.pw,
        
      })
      .then((response)=> {
        if(response.data.values=="중복"){
          AsyncStorage.setItem('idchk', this.state.id)
          this.setState({id:''})
          this.setState({pw:''})
          this.props.navigation.replace('next')

        }
        else if(response.data.values=="중복아님"){
          alert('아이디 혹은 비밀번호가 다릅니다.');
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    };
    
   /* _doLogin(){
      // do something
      this.props.navigation.replace('next')
    }   */

    render() {    
      return (
        <View style={styles.container}>  
        <View style={styles.header}></View>    
        <View style={{height:60}}></View>    
        <View style={styles.title}>
        <Image style={{height:'100%',width:'100%', resizeMode:'contain'}} source={require('./../../assets/logoB1.png')}/>
        </View>
        <View style={styles.content}></View>
          <View style={styles.searchSection}>
            {/* <Text style={{color:"rosybrown"}}>아이디</Text> */}
            <Image style={{height:'30%',width:'20%', resizeMode:'contain'}} source={require('./../../assets/mail_outline.png')}/>
            <TextInput  
                  style={{width:'80%',height: 40, fontSize: 20, margin:10}}  
                  placeholder="ID"  
                  color ='white'
                  placeholderTextColor = "white"
                  onChangeText={(id) => this.setState({id})}  
                  value={this.state.id}
              />
            <View/>
          </View>
          
          <View style={styles.searchSection}>
            {/* <Text style={{color:"rosybrown"}}>비밀번호</Text> */}
            <Image style={{height:'30%',width:'20%', resizeMode:'contain'}} source={require('./../../assets/key.png')}/>
            <TextInput  
                style={{width:'80%',height: 40, fontSize: 20, margin:10}}  
                placeholder="Password"
                color ='white'
                placeholderTextColor = "white"
                onChangeText={(pw) => this.setState({pw})} 
                value={this.state.pw}
            />
            <View/>
          </View>
        {/* <View style={styles.footer}></View> */}
        <View style={{height :30}}></View>
        <View style={{height :50, flexDirection:'row'}}>
          <CustomButton
            buttonColor={'#58615C'}
            title={'로그인'}
            onPress={this.klikPost.bind(this)}
            
            />
            <View style={{width: 10}}></View>
          <CustomButton 
            buttonColor={'#58615C'}
            title={'회원가입'}
            onPress={() => this.props.navigation.navigate('Signup')}/>
        </View>
        <View style={styles.content}></View>
        

      </View>  
      );
    }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#D7B575',
      alignItems:'center'
    },
    header: {
      width:'100%',
      height:'1%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D7B575',
    },
    title: {
      width:'100%',
      height:'30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D7B575',
    },
    footer: {
      flex: 1,
      width: '100%',
      height: 50,
      backgroundColor: '#D7B575',
    },
    searchSection: {
      flexDirection: 'row',
      width:'90%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1
  },
  });