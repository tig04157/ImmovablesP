import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';

export default class DefaultScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        rentId : 0,
        manaId : 0,
        parkId : 0,
        moveId : 0,
        ch1:0
    };
  }
  chrent = (id) => {
    this.setState({rentId: id});
  };
  chmana = (id) => {
    this.setState({manaId: id});
  };
  chpark = (id) => {
    this.setState({parkId: id});
  };
  chmove = (id) => {
    this.setState({moveId: id});
  };

  render() {{this.setState.ch1=1}
    return (
        <Container style={styles.container}>
          <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
            <View style={{width:'90%', borderBottomWidth:0.5}}>
              <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
            </View>
            <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>가격</Text>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  <Text>입력하세요</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>층 수</Text>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  <Text>입력하세요</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>방 크기</Text>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  <Text>입력하세요</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>단기임대</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chrent(1)} style={this.state.rentId === 1? styles.red : styles.button} >
                    <Text style={this.state.rentId === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chrent(2)} style={this.state.rentId === 2? styles.red : styles.button} >
                    <Text style={this.state.rentId === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>관리비</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chmana(1)} style={this.state.manaId === 1? styles.red : styles.button} >
                    <Text style={this.state.manaId === 1? styles.white : styles.black}>없음</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chmana(2)} style={this.state.manaId === 2? styles.red : styles.button} >
                    <Text style={this.state.manaId === 2? styles.white : styles.black}>있음</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>주차</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chpark(1)} style={this.state.parkId === 1? styles.red : styles.button} >
                    <Text style={this.state.parkId === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chpark(2)} style={this.state.parkId === 2? styles.red : styles.button} >
                    <Text style={this.state.parkId === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>입주 가능일</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chmove(1)} style={this.state.moveId === 1? styles.red : styles.button} >
                    <Text style={this.state.moveId === 1? styles.white : styles.black}>즉시 입주</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chmove(2)} style={this.state.moveId === 2? styles.red : styles.button} >
                    <Text style={this.state.moveId === 8? styles.white : styles.black}>날짜 협의</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chmove(3)} style={this.state.moveId === 3? styles.red : styles.button} >
                    <Text style={this.state.moveId === 3? styles.white : styles.black}>직접 입력</Text>
                  </TouchableOpacity>
                  
                </View>
              </View>
            </View>
            
          </View> 
        </Container>
         
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    red: {
        backgroundColor: '#004aff',
        alignItems: 'center',
        padding: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
    white: {
        color:'white'
    },
    black:{
        color:'black'
    }
});