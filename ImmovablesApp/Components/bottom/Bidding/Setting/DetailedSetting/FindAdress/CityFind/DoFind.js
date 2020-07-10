import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import RowCardComponent  from '../../../../RowCardComponent'; 
import http from "../../../../../../../http-common"

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH );
const ITEM_WIDTH1 = Math.round(SLIDER_WIDTH);
export default class DoFind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            loading:true
        };
      }
    componentDidMount(){
    this.getDB()
    setTimeout(()=>{
        this.setState({
        loading:false
        })
    }, 1000)
    }
    getDB(){
        http.get(`/city/getCity`)
          .then(response => {
            this.state.DBdata = response.data
            this.renderSection()
          })
          .catch(error => {
            console.log(error);
          })
    }
    renderSection() {  
        if(this.state.DBdata != null){
            return (            
              this.state.DBdata.map((feed, index) => (
                <RowCardComponent data={ feed } key={index}/>
              ))
            )
          }
        else{
          return(
            <Text>로딩에 실패하였습니다.</Text>
          )
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style ={{justifyContent:'space-between', alignItems:'center'}}> 
                <Icon name='ios-arrow-back' onPress={()=>{this.props.Dotoggle()}}/>
                <Text>시/도 선택</Text>
                <Text/>
                </Header>
                <View>
                    {this.renderSection()}
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
});