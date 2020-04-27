
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class Write extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-cart' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}><Text>글쓰기</Text></Header>
                <View style={{height:'10%'}}></View>


                <View style={{flexDirection:'row'}}>
                  <View style={{width: (SLIDER_WIDTH - 200)/2}}></View>
                  <View style={{width:200}}>              
                      <Button style={{justifyContent:'center'}}><Text>판매자</Text></Button>
                  </View>
                  <View style={{width:(SLIDER_WIDTH - 200)/2}}></View>
                </View>


                <View style={{height:'10%'}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>                    
                    <View style={{width:200}}>
                        <Button style={{justifyContent:'center'}}><Text>중개사</Text></Button>
                    </View>
                    <View style={{width:200}}>
                        <Button style={{justifyContent:'center'}}><Text>법무사</Text></Button>
                    </View>
                </View>
                <View style={{height:'10%'}}></View>
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