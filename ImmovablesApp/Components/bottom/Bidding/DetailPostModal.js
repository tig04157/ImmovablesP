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
            style={{fontSize: 50, color: 'black'}}
            onPress={this.props.toggle2}
          />
          <Text> 
            {this.state.data} 
          </Text> 
          <Text> 
            
          </Text>        
        </Header>
        <ScrollView>
        <View>
        <Text>검색</Text>
        
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
    justifyContent: 'space-around',
    flexDirection:'row'
  },

  button:{
      margin:5,
      width:'95%',
      height:40,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#a7a7a7',
      borderRadius:5,
      backgroundColor:'whitesmoke'
      
  },
  iteminformation:{
    flex:1,
    height:100,
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor:'#b7b7b7',
  },

  mcontent:{
    height:ITEM_HEIGHT,
    width:'95%',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#a7a7a7',      
  },
  bottomimage:{
    width:'95%',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#a7a7a7',      
  },
  bottombutton:{
    width:'46%',
    height: ITEM_HEIGHT/7,
    margin:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#a7a7a7',      
  },
  bottombutton1:{
    width:'46%',
    height: ITEM_HEIGHT/7,
    margin:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#a7a7a7',   
    backgroundColor:'#004aff'   
  },

});