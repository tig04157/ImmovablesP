import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon, Container, Header } from 'native-base'; 
import MapView from 'react-native-maps';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Map extends Component {

  constructor(props){
    super(props)
    this.state={
      //region: null
    }
  }

  static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
          <Icon name='ios-map' styles={{color: tintColor}}/>
      )
  }  

  onRegionChange(region) {
    this.setState({ region });
  }
  

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}><Text>지도</Text></Header>
          <View style={styles.container}>
            <MapView
              initialRegion={{
                latitude: 35.2,
                longitude: 127.8,
                latitudeDelta: 6.5,
                longitudeDelta: 3.6,
              }}
              /*
              region={this.state.region}
              onRegionChange={this.onRegionChange}
              */
              style={styles.mapStyle} />
          </View> 
      </Container>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
      },
      header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      title: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      content: {
   
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFE4B0',
      },
      footer: {
        flex: 1,
        width: '100%',
        height: hp('10%'),
        backgroundColor: '#EFE4B0',
      },
      br: {
        height: '3%'
      },
      mapStyle:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }
});