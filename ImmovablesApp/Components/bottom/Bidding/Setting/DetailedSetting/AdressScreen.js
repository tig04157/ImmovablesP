import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';
export default class AdressScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  render() {
    return (
        <Container style={styles.container}>
          <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
            <Text style={{margin:15, fontSize: 15 }}>주소는 동, 면, 읍, 단지명 까지만 노출됩니다.</Text>
            <TouchableOpacity style={{width:'90%', height:'10%', borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
              <Text style={{}}>주소 찾기</Text>  
            </TouchableOpacity>
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