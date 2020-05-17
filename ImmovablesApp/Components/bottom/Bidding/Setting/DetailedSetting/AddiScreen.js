import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';

export default class AddiScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            colorId : 0
        };
      }
    
      chbutton = (id) => {
        this.setState({colorId: id});
      };
    
      render() {
        return (
            <Container style={styles.container}>
              <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
                <View style={{width:'90%', borderBottomWidth:0.5}}>
                  <Text style={{margin:15, fontSize: 15 }}>결정할 때 필요한 정보이므로 정확히 입력하세요.</Text>
                </View>
                <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
                  <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text>옵션</Text>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity onPress={()=>this.chbutton(1)} style={this.state.colorId === 1? styles.red : styles.button} >
                        <Text style={this.state.colorId === 1? styles.white : styles.black}>없음</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.chbutton(2)} style={this.state.colorId === 2? styles.red : styles.button} >
                        <Text style={this.state.colorId === 2? styles.white : styles.black}>있음</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
                  <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text>난방종류</Text>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                      <Text>입력하세요</Text>
                      <Icon name='ios-arrow-forward'/>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
                  <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text>반려동물</Text>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity onPress={()=>this.chbutton(3)} style={this.state.colorId === 3? styles.red : styles.button} >
                        <Text style={this.state.colorId === 3? styles.white : styles.black}>불가</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.chbutton(4)} style={this.state.colorId === 4? styles.red : styles.button} >
                        <Text style={this.state.colorId === 4? styles.white : styles.black}>가능</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
                  <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text>전세자금대출</Text>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity onPress={()=>this.chbutton(5)} style={this.state.colorId === 5? styles.red : styles.button} >
                        <Text style={this.state.colorId === 5? styles.white : styles.black}>불가</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.chbutton(6)} style={this.state.colorId === 6? styles.red : styles.button} >
                        <Text style={this.state.colorId === 6? styles.white : styles.black}>가능</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
                  <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text>준공년도</Text>
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