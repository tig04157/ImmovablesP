
import React, { Component } from 'react';
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RowCardComponent  from './RowCardComponent'; 
import http from "../../../http-common";
import Wishlist from '../../Util/WriteUtil/Wishlist'
import { createStackNavigator } from 'react-navigation-stack'


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class Board extends Component { 

  constructor(props) {  
    super(props);      
    this.state = {
      test: 'ok',
      DBdata: null,
      activeIndex: 0,
      loading: true,
      searchInfo: ''
    };  
  }    
  //로딩 구현(Life cycle (constructor-> static getDerivedStateFromProps() -> render() -> ))
  componentDidMount(){
    this.getDB()
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    }, 1000)
  }

  static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
          <Icon name='ios-create' style={{color: tintColor}}/>
      )
  }

  segmentClicked = (activeIndex)=>{
    this.setState({activeIndex});
  }

  getDB(){
    http.get(`/postList/getPost/${this.state.test}`)
      .then(response => {
        this.state.DBdata = response.data
        this.renderSection()
      })
      .catch(error => {
        console.log(error);
      })
  }

  renderSection() {  
    if(this.state.DBdata != null){
      if(this.state.activeIndex === 0){ 
        return (    
          this.state.DBdata.map((feed, index) => (
            <RowCardComponent data={ feed } key={index}/>
          ))  
        )            
      }
      else if(this.state.activeIndex === 1){
        return (            
          this.state.DBdata.map((feed, index) => (
            <RowCardComponent data={ feed } key={index}/>
          ))
        )
      }
    }else{
      return(
        <Text>로딩에 실패하였습니다.</Text>
      )
    }
  }
  
  render() {
    if(this.state.loading){
      return(
        <Container style={styles.container}>
          <Header style={styles.header}>
            <View style={{justifyContent:'center'}}>
              <Text>입찰 게시판</Text>                  
            </View> 
            <View style={{position: 'absolute', right: 0}}>
              <Button style={{backgroundColor:'white'}}>
                <Icon name='ios-create' style={{color:'black'}}/>
              </Button>
            </View>                   
          </Header>
          <View style={styles.search}>                  
              <TextInput  
                  style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                  placeholder="검색"  
                  onChangeText={(searchInfo) => this.setState({searchInfo})}  
              />
              <TouchableOpacity onPress={()=>this.props.navigation.replace('toDetail',{
          title: data.title, 
          author: data.author
          })}>
              <Icon name='ios-search'/>
              <Text>검색</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.category}>
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
          <View>
            <Text>로딩중</Text>
          </View>
        </Container>
      )
    }else{
      return (        
        <Container style={styles.container}>
          <Header style={styles.header}>
            <View style={{justifyContent:'center'}}>
              <Text>입찰 게시판</Text>                  
            </View> 
            <View style={{position: 'absolute', right: 0}}>
              <Button style={{backgroundColor:'white'}}>
                <Icon name='ios-create' style={{color:'black'}}/>
              </Button>
            </View>                   
          </Header>
          <View style={styles.search}>                  
              <TextInput  
                  style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                  placeholder="검색"  
                  onChangeText={(searchInfo) => this.setState({searchInfo})}  
              />
              <TouchableOpacity onPress={()=>this.props.navigation.replace('toDetail')}>
              <Icon name='ios-search'/>
              <Text>검색</Text>
              </TouchableOpacity>
          </View>        

          <View style={styles.category}>
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
          <ScrollView>                                             
          {                               
            this.renderSection() 
          }
          </ScrollView>
        </Container>
      );
    }
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
        justifyContent: 'space-around',
        flexDirection:'row'
      },
      search: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      category: {
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
      }
});