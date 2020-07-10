import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';

export default class DescScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      num:0,
    };
  }
  ckonbutton=(cknum)=>{
    this.setState({num:cknum});
  };
  render() {
    return (
        <Container style={styles.container}>
            <View style={{ width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
              <View style={{height:'10%', alignItems:'center', justifyContent: 'center',}}>
                  <Text>집 주변 편의시설을 고르세요.</Text>
              </View>
              <View style={{height:30}}/>
              <View style={{ flexDirection:'column', width:'100%', alignItems:'center'}}>
                <View style={{height:60, width:'90%'}}>
                  <Text>편의시설</Text>
                </View>
                <View style={{justifyContent:'space-between', height:'11%', width:'90%', alignItems:'flex-end', flexDirection:'row'}}>
                  <TouchableOpacity 
                    onPress={()=>this.ckonbutton(1)}
                    style={this.state.num===1? styles.onbutton : styles.offbutton}>
                    <Icon name='md-restaurant'/>
                    <Text>
                      음식점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>this.ckonbutton(2)}
                    style={this.state.num===2? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-cafe'/>
                    <Text>
                      카페
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>this.ckonbutton(3)}
                    style={this.state.num===3? styles.onbutton : styles.offbutton}>
                    <Icon name='md-basket'/>
                    <Text>
                      편의점
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent:'flex-start', height:'27%', width:'90%', alignItems:'flex-end', flexDirection:'row'}}>
                <TouchableOpacity 
                  onPress={()=>this.ckonbutton(4)}
                  style={this.state.num===4? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-medkit'/>
                    <Text>
                      병원
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{height:'30%',width:'100%', justifyContent: 'flex-end', alignItems:'center'}}>
                <Text>dsf</Text>
              </View>
            </View>
        </Container>
    );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    onbutton:{
      height:50,
      width:95,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:0.5,
      backgroundColor:'#004aff'
    },
    offbutton:{
      height:50,
      width:95,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:0.5,
    }
   
  });