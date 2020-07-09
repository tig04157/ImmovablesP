import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';

export default class DescScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container style={styles.container}>
            <View style={{ width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
                <View style={{height:'10%', alignItems:'center', justifyContent: 'center',}}>
                    <Text> 희망 가격을 입력하세요(만원단위)</Text>
                </View>
                    <View style={{height:30}}/>
                    <View style={{flexDirection:'row',alignItems:'flex-start', width:'90%'}}>
                        <Text> 최소가격 ~ 최대가격</Text>
                    </View>
                    <View style={{justifyContent:'space-between', height:'11%', width:'90%', alignItems:'flex-end', flexDirection:'row'}}>
                        <TextInput style={{color:'#000', width:'48%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}} placeholder='예)10 -> 10만원' placeholderTextColor='#000'/>
                        <TextInput style={{color:'#000', width:'48%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}} placeholder='예)10 -> 10만원' placeholderTextColor='#000'/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-start', justifyContent:'flex-start', width:'90%'}}>
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
   
  });