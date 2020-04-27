
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Container, Content,Icon, Button, Separator } from 'native-base'; 

function Separator() {
    return <View style={styles.separator} />;
  }

  export default class plus extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={style.container}>
                <View style ={{  flexDirection: 'column' }}>
                    <View style ={{ height: 60 }}></View>
                    <Text>ID</Text>
                    <Text>e-mail</Text>
                    <Button style ={style.topbutton}><Text style ={{color : 'blue'}}>정보수정</Text></Button>
                </View>
                <Separator></Separator>
                <View><Text>dfd</Text></View>

            </Container>
            
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    topbutton: {
        width: '20%',
        height: 30,
        justifyContent: 'center',
        backgroundColor:'white',
        borderColor: 'blue',
        borderWidth: 1
    },
     separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});