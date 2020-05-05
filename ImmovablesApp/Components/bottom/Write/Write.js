
import React, { Component } from 'react';
import {TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, Button, } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RowCardComponent  from './RowCardComponent'; 
//import myData from '../../Util/test.json';
import axios from 'axios';
import Wishlist from '../../Util/WriteUtil/Wishlist'
import { createStackNavigator } from 'react-navigation-stack'



const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH );



export default class Write extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-create' style={{color: tintColor}}/>
        )
    }

    constructor(props) {  
      super(props);  
      this.state = {
        DBdata: null,
        activeIndex: 3  ,
        modalVisible: false,
        title:''
      };  
  }  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  getDB = function(){
    test = 'ok';
    axios.get(`http://192.168.0.22:3000/postList/getPost/${test}`)
    .then(function (response) {
      alert(response.data.row)
      this.state.DBdata = response.data.row
      
      this.state.DBdata.map((feed, index) => (
        <RowCardComponent data={ feed } key={index}/>
        ))
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  segmentClicked = (activeIndex)=>{
    this.setState({activeIndex});
  }

  renderSection = () => { 
    if(this.state.activeIndex === 0){
      return (
        <View>                                              
          {                 
          this.getDB()
          }             
        </View>      
      )
    }
    else if(this.state.activeIndex === 1){
      return (
        <View>                                              
          {                  
            <Text>거래 게시판</Text> 
          }                 
        </View>      
      )
    }
  }
  render() {
      return (
          <Container style={styles.container}>
              <Header style={styles.header}>
                <View style={{alignItems:'center',justifyContent:'center',width:'90%',height:'80%'}} >
                  <Text >                       입찰 게시판</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Button style={{backgroundColor:'white'}} onPress={()=> {this.setModalVisible(true);}}>
                    <Icon name='ios-create' style={{color:'black'}}/>
                  </Button>
                </View>
              </Header>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert('Modal has been closed.');
                }}
                style={{height:'50%', width:'50%'}}
              >
              <ScrollView>
              <View style={styles.container}>
                <Header style={styles.modalheader}>     
                  <Text></Text>           
                  <Text style={{fontSize:15 }}>
                    게시판 글쓰기
                  </Text>
                  <TouchableOpacity  onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  }}>
                    <Text>취소</Text>
                  </TouchableOpacity>
                </Header>
                
                <View style={{alignItems:'center'}}>
                  <View style={styles.iteminformation}>
                    <Icon name='ios-camera' style={{margin:10, fontsize: '100'}} />
                    <View>
                      <Text>매물이름</Text>
                      <Text>가격</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={{margin:5}}>카테고리 선택</Text>
                    <Text style={{margin:5}}>></Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.button}  
                    placeholder="제목" onChangeText={(title) => this.setState({title})} value={this.state.title}>  
                  </TextInput>
                  <View style={{margin:5, width:'100%', alignItems:'center'}}>
                    <TextInput style={styles.mcontent}>
                      >
                    </TextInput>
                    <View style={styles.bottomimage}>
                      <Icon name='md-image' style={{margin:5, color:'#004aff'}}/>
                      <Text style={{margin:5, color:'#004aff'}}>사진 추가하기</Text>
                    </View>
                  </View> 
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.bottombutton} 
                      onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}> 
                      <Text>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottombutton1} 
                      onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                      <Text style={{color:'white'}}>작성하기</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              </ScrollView>
              </Modal >
              
              <View style={styles.title}>
                <TouchableOpacity style={[ this.state.activeIndex === 0 ? {height:40,borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                  onPress={() => this.segmentClicked(0)}
                  active={this.state.activeIndex === 0}>
                  <Text style={[ this.state.activeIndex === 0 ? {} : {color: 'grey'} ]}>구매 희망 게시판</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ this.state.activeIndex === 1 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                  onPress={() => this.segmentClicked(1)}
                  active={this.state.activeIndex === 1}>
                  <Text style={ [ this.state.activeIndex === 1 ? {} : {color: 'grey'} ]}>거래 게시판</Text>
                </TouchableOpacity>
              </View> 
              { this.renderSection() }

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
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'center'
      },
      modalheader:{
        backgroundColor: 'whitesmoke',
        alignItems:'center',
        justifyContent: 'space-between',

      },
      title: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
      },    texinputstyle:{
        margin:10,
        borderWidth:1,
        borderColor:'whitesmoke',
        width:'90%',
        height: 40,
        backgroundColor: 'white',
        fontSize: 20,
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
    wishwrite:{
        margin:10,
        width:'90%',
        height:'70%',
        backgroundColor:'white',
        fontSize: 20,
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