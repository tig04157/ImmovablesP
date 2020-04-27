
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {  Container, Content,Icon, Button, } from 'native-base'; 
import { ScrollView } from 'react-native-gesture-handler';



  export default class plus extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={style.container}>
                <ScrollView>
                <View style ={{  flexDirection: 'column' }}>
                    <View style ={{ height: 60 }}></View>
                    <Text>ID</Text>
                    <Text>e-mail</Text>
                    <Button style ={style.chimpormation}><Text style ={{color : 'blue'}}>정보수정</Text></Button>
                </View>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <Button style = {style.topbutton}><Icon name='ios-notifications-outline' style={{fontSize: 40,color: 'black'}}/><Text style={{padding:5}}>알림</Text></Button>
                    <Button style ={style.topbutton}><Icon name='ios-home-outline' style={{fontSize: 40, color: 'black'}}/><Text style={{padding:5}}>방내놓기</Text></Button>
                    <Button style ={style.topbutton}><Icon name='ios-paper-outline' style={{fontSize: 40, color: 'black'}}/><Text style={{padding:5}}>내가쓴리뷰</Text></Button>
                    <Button style ={style.topbutton}><Icon name='ios-home' style={{fontSize: 40, color: 'black'}}/><Text style={{padding:5}}>연락한부동산</Text></Button>
                    <Button style ={style.topbutton}><Icon name='md-trending-up' style={{fontSize: 40, color: 'black'}}/><Text style={{padding:5}}>입찰</Text></Button>
                </View>
                <View style={style.rowSeparatorLine} />

                <View>
                    <View style={style.midview}>
                        <Button style={style.midbutton}><Text style={{fontSize: 18}}>매물번호 조회</Text></Button>
                        <Button style={style.midbutton}><Text style={{fontSize: 18}}>자주 묻는 질문</Text></Button>
                    </View>
                    <View style={style.bottomview}>
                        <Button style={style.midbutton}><Text style={{fontSize: 18}}>이벤트</Text></Button>
                        <Button style={style.midbutton}><Text style={{fontSize: 18}}>공지사항</Text></Button>
                    </View>
                    <View style={style.bottomview}>
                        <Button style={style.midbutton}><Text style={{fontSize: 18}}>1:1문의</Text></Button>
                    </View>

                </View>
                <View style={style.rowSeparatorLine} />

                <View style={{flexDirection: 'row'}}>
                    <Button style ={style.bottombutton}><Text style={{color:'#d1cece'}}>이용약관 </Text></Button>
                    <Button style={style.bottombutton}><Text style={{color:'#d1cece'}}> 개인정보처리방침</Text></Button>
                </View>
                <View style={style.rowSeparatorLine} />
                </ScrollView>
            </Container>
            
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    chimpormation: {
        width: '20%',
        height: 30,
        justifyContent: 'center',
        backgroundColor:'white',
        borderColor: 'blue',
        borderWidth: 1
    },
    topbutton: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },

    midview: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    midbutton: {
        flex: 1,
        height: 40,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    bottombutton: {
        backgroundColor: 'white',
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      SeparatorLine: {
        backgroundColor: 'black',
        width: 2,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      rowSeparatorLine: {
        backgroundColor: '#d1cece',
        width: '100%',
        height: '0.1%',
        
        
      }
});