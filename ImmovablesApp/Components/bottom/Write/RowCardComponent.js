import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class RawCardComponent extends Component {
    render() {
      const { data } = this.props; // 피드 항목 데이터
      //const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
      return (
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.replace('toDetail',{
          title: data.title, 
          author: data.author
          })}>
          <Card>
              <CardItem>
                  <Body style={{flex: 1.5, flexDirection: 'column',  alignItems:'flex-start'}}>
                    {
                    (String(data.price).replace(/\n/g,' ').slice(0, 15)).length>=11 ?
                      <Text> 
                        {String(data.price).replace(/\n/g,' ').slice(0, 15) }...
                      </Text> 
                    : <Text> 
                        {String(data.price).replace(/\n/g,' ').slice(0, 11) }
                      </Text>
                    }
                    <Text note>{
                    data.title
                    //new Date(data.created).toDateString()
                    
                    }</Text>
                    <Text style = {{ fontWeight:'900'}}>파는 곳 : {data.author}</Text>
                    {     
                        (data.content.replace(/\n/g,' ').slice(0, 15)).length>=11 ?
                        <Text> 
                          {data.content.replace(/\n/g,' ').slice(0, 15) }...
                        </Text> 
                      : <Text> 
                          {data.content.replace(/\n/g,' ').slice(0, 11) }
                        </Text>
                    }
                    
                  </Body>                  
                  
                  <Body style={{flex: 1}}>
                    {
                      <Text>사진</Text>
                     /*
                      image && image.length ?
                      <Image 
                        source={{ uri: image[0] }} 
                        style={{ height:100, width:150 }} />
                    : null
                    */
                    }
                  </Body>
              </CardItem>
          </Card>
        </TouchableWithoutFeedback>
      );
    }
  }