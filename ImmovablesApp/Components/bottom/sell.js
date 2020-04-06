
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Container, Header} from 'native-base'; 

export default class sell extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={style.container}>
             <Header>
                <Text>분양</Text>
            </Header>
        
          </Container>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    }
});