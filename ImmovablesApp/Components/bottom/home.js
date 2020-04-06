import React, { Component } from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon } from 'native-base'; 

export default class like extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    constructor(props) {  
        super(props);  
        this.state = {
          data: ''
      };  
    }  

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TextInput  
                        style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                        placeholder="아이디"  
                        onChangeText={(data) => this.setState({data})}  
                    />
                    <Icon name='ios-search'/>
                    <Text>검색</Text>
                </View>
                <View style={style.title}></View>
                <View style={style.content}></View>
                <View style={style.fotter}></View>                
            </View> 
            
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#EFE4B0'
      },
      header: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
        height: hp('10%'),
        backgroundColor: '#EFE4B0',
      },
});