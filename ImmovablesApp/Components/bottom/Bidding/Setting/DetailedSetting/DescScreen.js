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
            <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
                <View style={{height:'10%', alignItems:'center', justifyContent: 'center',}}>
                    <Text> 최대한 자세하게 설명하세요</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-start', justifyContent:'flex-start', width:'90%'}}>
                    <Text> 방 제목</Text>
                </View>
                <View style={{width:'100%', alignItems:'center'}}>
                    <Text></Text>
                    <TextInput style={{color:'#000', width:'90%', height:'30%', borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}} placeholder='예) 햇빛 좋은 방' placeholderTextColor='#000'/>
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-start', justifyContent:'flex-start', width:'90%'}}>
                    <Text> 상세설명</Text>
                </View>
                <View style={{width:'100%', alignItems:'center'}}>
                    <Text></Text>
                    <TextInput multiline={true} style={{color: '#000', width:'90%', height:'50%', borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}} placeholder={"지역의 편리한 점, 주변 이웃 분위기 등 이방 의 특징을 최대한 자세하게 작성"}   placeholderTextColor="#000"/>
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