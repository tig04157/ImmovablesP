import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import RowCardComponent  from '../../../../CityRowCardComponent'; 
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
            loading:true,
            DBdata:null,
            city:''

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

              console.log(this.state.DBdata)


              //this.state.DBdata.map((feed, index) => (
                // <RowCardComponent data={ feed } key={index} ckname={(a)=>this.setnum(a)}/>
                



                /*
                <View style={{flexDirection:'column', justifyContent: 'center', alignItems:'center',}}>
                  <View style={{flexDirection:'row',}}>
                  <Text style={{backgroundColor:'red'}}>{feed.name==='서울시' ? '서울시': null}</Text>
                  <Text style={{backgroundColor:'red'}}>{feed.name==='경기도' ? feed.name : null}</Text>
                  </View>
                  <View style={{flexDirection:'column',}}>

                  <Text style={{backgroundColor:'red'}}>{feed.name==='대구시' ? feed.name : null}</Text>
                  <Text style={{backgroundColor:'red'}}>{feed.name==='세종시' ? feed.name : null}</Text>
                  </View>
                  <Text style={{backgroundColor:'red'}}>{feed.name==='충청북도' ? feed.name : null}</Text>
                
                </View>
                */
              //))
            )
          }
        else{
          return(
            <Text>로딩에 실패하였습니다.</Text>
          )
        }
    }
    setnum=(a)=>{
      this.setState({city:a})
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style ={{justifyContent:'space-between', alignItems:'center'}}> 
                <Icon name='ios-arrow-back' onPress={()=>{this.props.Dotoggle()}}/>
                <Text>시/도 선택</Text>
                <Text/>
                </Header>
                <View >
                  <View style={{flexDirection:'column'}}>
                    {this.renderSection()}
                    <Text>ff</Text>
                  </View>
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