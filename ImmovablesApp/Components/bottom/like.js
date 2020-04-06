import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content,Icon } from 'native-base';
import CardComponent  from '../CardComponent'; 

export default class home extends Component {

      state = {
        feeds: []
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
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
          <Container style={style.container}>
            <Content>
              {
                this.state.feeds.map(feed => <CardComponent data={ feed }/>)
              }
            </Content>
          </Container>
        );
      }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
     //   alignItems: 'center', //글자 수직 정렬
     //   justifyContent: 'center', //글자 수평 정렬
    }
});