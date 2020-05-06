import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import Modal from "react-native-modal";

export default class DetailPostModal extends Component {
    render(){
        return (
            <View style={{flex: 1}}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={this.props.toggle}/>
            </View>
        );
    }

}