import React, { Component } from 'react';
import {TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4)

export default class DetailPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible : false,
      data : props.toData,
      toggle : props.toggle
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Icon 
            name='ios-close'
            style={{fontSize: 50, color: 'black', position: 'absolute', left: 15}}
            onPress={this.props.toggle2}
          />
          <Text> 
            {this.state.data.title} 
          </Text>   
        </Header>
        <ScrollView>
          {/*사진 View*/}
          <View style={styles.img}>
            <Text style={{margin:15}}>사진</Text>        
          </View>
          {/*가격 뷰*/}
          <View style={styles.price}>
            <Text style={{margin:15}}>{this.state.data.price}</Text>
          </View>
          {/*설명*/}
          <View style={styles.price}>
            <Text style={{margin:15}}>{this.state.data.content}</Text>
          </View>
          {/*부동산*/}
          <View style={styles.price}>
            <Text style={{margin:15}}>{this.state.data.author}</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      margin:-20,
      backgroundColor: 'whitesmoke'
    },
  header:{
    backgroundColor: 'whitesmoke',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  img:{
    alignItems:'center',
    justifyContent: 'center',
  },
  price:{
    alignItems:'center',
    justifyContent: 'center',
  },
  info:{
    alignItems:'center',
    justifyContent: 'center',
  },
  br: {
    height: '10%',
    backgroundColor: 'whitesmoke'
  }


});