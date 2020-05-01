import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Container, Header } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Map extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-map' styles={{color: tintColor}}/>
        )
    }
 
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}><Text>지도</Text></Header>
            
            <View><Text>지도 삽입 필요(Google MAP API)</Text></View>

          </Container>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
      },
      header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      title: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      content: {
   
        width:'100%',
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
      br: {
        height: '3%'
      }
});