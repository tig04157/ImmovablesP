
import React, { Component } from 'react';
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RowCardComponent  from './RowCardComponent'; 
import myData from '../../Util/test.json';
import Wishlist from '../../Util/WriteUtil/Wishlist'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../../MainScreen';
import App from '../../../App'


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);



export default class Write extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-create' style={{color: tintColor}}/>
        )
    }

    constructor(props) {  
      super(props);  
      this.state = {
        data1: '',
        feeds: [],
        jsonD: myData,
        activeIndex: 0    };  
  }  

  componentDidMount() {   //기존함수 componentWillMount에서 componentDidMount로 변경함.

      this.fetchFeeds().then(feeds => {
          this.setState({
            feeds
          })
      });
  }
  segmentClicked = (activeIndex)=>{
    this.setState({activeIndex});
  }
  renderSection = () => {
    if(this.state.activeIndex === 0){
      return <View>                                              
                {                  
                this.state.jsonD.map((feed, index) => (
                  <RowCardComponent data={ feed } key={index}/>
                  ))   
                }                 
              </View>      
    }
    else if(this.state.activeIndex === 1){
      return <View>                                              
                {                  
                  <Text>거래 게시판</Text> 
                }                 
              </View>      
    }
  }
  fetchFeeds() {
      const data = {
          id: 1,
          jsonrpc: "2.0",
          method: "call",
          params: [
            "database_api",
            "get_discussions_by_created",
            [{ tag: "kr", limit: 20 }]
          ]
      };
      return fetch('https://api.steemit.com', {
          method: 'POST',
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => res.result)
  }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                  <View style={{alignItems:'center',justifyContent:'center',width:'90%',height:'80%'}}>
                    <Text>                       입찰 게시판</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Button style={{backgroundColor:'white'}}>
                      <Icon name='ios-create' style={{color:'black'}}/>
                    </Button>
                  </View>
                </Header>

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
                <Button  title ="dfefdsa" onPress={()=>Write.screen('Wishlist')}/>
                { this.renderSection() }

          </Container>
        );
    }
}
const AppNavigator = createStackNavigator({
  Wishlist: {
    screen: Wishlist,
  },
});
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
      }
});