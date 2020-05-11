
import React, { Component } from 'react';
import {TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH );

export default class WriteModal extends Component {


    constructor(props) {  
      super(props);  
      this.state = {
        modalShown: false,
        modalVisible: false,
        title:'',
        category:'카테고리',
      };  
  }  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
    
  setModalShown(visible) {
    this.setState({modalShown: visible});
  }
  Settingmodal=()=>{
    return <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.modalShown}
    onRequestClose={() => {
      this.setModalShown(!this.state.modalShown);
    }}
    backdrop={true}
    >
      <View style={{felx:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.setModalShown(!this.state.modalShown);}}/>
          <Text>세부 정보</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.button} onPress={()=>this.setModalShown(true)}>
            <Text style={{margin:5}}>세부정보</Text>
            <Text style={{margin:5}}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  }
  showmodal =() =>{
  return <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      this.setModalVisible(!this.state.modalVisible);
    }}
    backdrop={true}
    >
    <TouchableWithoutFeedback onPress={()=>{this.setModalVisible(!this.state.modalVisible);}}>
      <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <TouchableWithoutFeedback>
          <View style={{justifyContent:'center', alignItems:'center',width: 300, height: 150, borderWidth:1, borderColor:'#a7a7a7', borderRadius:5, backgroundColor:'#c0c0c0'}}>
            <Text style={{color:'#004aff',margin:5}}>카테고리를 선택하시오.</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.setState({category: '방 구하기'});
            }}> 
            <Text style={{color:'#004aff'}}>방 구하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.setState({category: '방 내놓기'});

            }}> 
              <Text style={{color:'#004aff'}}>방 내놓기</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>

  </Modal>
  }
  updateText = () => {
    this.setState({myText: 'My Changed Text'})
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
                    게시판 글쓰기
                  </Text>
                  <Text></Text>           
                </Header>
                {this.showmodal()}
                {this.Settingmodal()}
                <View style={{alignItems:'center'}}>
                  <View style={styles.iteminformation}>
                    <Icon name='ios-camera' style={{margin:10, fontSize: 100}} />
                    <View>
                      <Text>매물이름</Text>
                      <Text>가격</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.button} onPress={()=>this.setModalVisible(true)}>
                    <Text style={{margin:5}}>{this.state.category}</Text>
                    <Text style={{margin:5}}>></Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>this.setModalShown(true)}>
                    <Text style={{margin:5}}>세부정보</Text>
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