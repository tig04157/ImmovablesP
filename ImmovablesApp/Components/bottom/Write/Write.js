
import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RowCardComponent  from './RowCardComponent'; 
import myData from '../../Util/test.json';

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
        jsonD: myData
    };  
  }  

  componentDidMount() {   //기존함수 componentWillMount에서 componentDidMount로 변경함.

      this.fetchFeeds().then(feeds => {
          this.setState({
            feeds
          })
      });
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
                <Header style={styles.header}><Text>글쓰기</Text></Header>
                <View style={styles.title}>
                    <TextInput  
                        style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                        placeholder="검색"  
                        onChangeText={(data1) => this.setState({data1})}  
                    />
                    <Icon name='ios-search'/>
                    <Text>검색</Text>
                </View> 


                <View>                                              
                    {                  
                      this.state.jsonD.map((feed, index) => (
                        <RowCardComponent data={ feed } key={index}/>
                        ))   
                    }                 
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