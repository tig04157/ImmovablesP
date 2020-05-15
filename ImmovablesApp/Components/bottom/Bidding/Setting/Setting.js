import React, { Component } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'

class AdressScreen extends React.Component {
    render() {
        return (
          <Container style={styles.container}>
            <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
              <Text style={{margin:15, fontSize: 15 }}>주소는 동, 면, 읍, 단지명 까지만 노출됩니다.</Text>
              <TouchableOpacity style={{width:'90%', height:'10%', borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                <Text style={{}}>주소 찾기</Text>  
              </TouchableOpacity>
            </View>
          </Container>
        );
    }
}

class DefaultScreen extends React.Component {
    render() {
        return (
          <Container style={styles.container}>
            <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <TextInput placeholder='입력하세요'>
                  <Text>가격</Text>
                </TextInput>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              <View style={{width:'90%', borderBottomWidth:0.5}}>
                <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
              </View>
              
            </View> 
          </Container>
           
        );
    }
}

class AddiScreen extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30 }}>Settings Screen</Text>
          </View>
      );
  }
}

class DescScreen extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30 }}>Settings Screen</Text>
          </View>
      );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
    주소: { screen: AdressScreen },
    기본정보: { screen: DefaultScreen },
    추가정보: { screen: AddiScreen },
    설명: { screen: DescScreen },
});
const AppContainer = createAppContainer(TabNavigator);

export default class MainScreen extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});