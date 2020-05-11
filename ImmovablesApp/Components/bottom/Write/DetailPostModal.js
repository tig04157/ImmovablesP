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
        <ScrollView>
          <Header style={styles.modalheader}>    
            <TouchableOpacity onPress={this.props.toggle}>
              <Text>X</Text>
            </TouchableOpacity> 
            <Text style={{fontSize:15 }}>
              {this.state.data}
            </Text>
            <Text></Text>           
          </Header>
          {this.showmodal()}
          <View style={{alignItems:'center'}}>
            <View style={styles.iteminformation}>
              <Icon name='ios-camera' style={{margin:10, fontsize: '100'}} />
              <View>
                <Text>매물이름</Text>
                <Text>가격</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>this.setModalVisible(true)}>
              <Text style={{margin:5}}>{this.state.category}</Text>
              <Text style={{margin:5}}>></Text>
            </TouchableOpacity>
            <TextInput
              style={styles.button}  
              placeholder="제목" onChangeText={(title) => this.setState({title})} value={this.state.title}>  
            </TextInput>
            <View style={{margin:5, width:'100%', alignItems:'center'}}>
              <TextInput 
                style={styles.mcontent} placeholder="게시글을 작성해주세요." >
                
              </TextInput>
              <View style={styles.bottomimage}>
                <Icon name='md-image' style={{margin:5, color:'#004aff'}}/>
                <Text style={{margin:5, color:'#004aff'}}>사진 추가하기</Text>
              </View>
            </View> 
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.bottombutton} onPress={this.props.toggle}> 
                <Text>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottombutton1}>
                <Text style={{color:'white'}}>작성하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
      margin:-20,
      backgroundColor: 'whitesmoke'
    },
    modalheader:{
      backgroundColor: 'whitesmoke',
      alignItems:'center',
      justifyContent: 'space-between',

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