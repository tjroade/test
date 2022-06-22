import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export class TxtInput extends Component {
    render() {
        return (
            <View style={{backgroundColor:"white", padding:10, borderRadius: 12, marginBottom:10, width:"100%", borderWidth:1, borderColor: "grey"}}>
            <View style={{paddingLeft: 3}}>
                <Text style={{color:"black"}}>{this.props.title}</Text>
                </View>
                <TextInput
                    onChangeText={(value) => this.props.press(value)}
                    style={{height:40, color:"grey"}}
                    value={this.props.value}
                    placeholder={this.props.placeHolder}
                    keyboardType={this.props.keyboard}
                />
            </View>
        )
    }
}

export default TxtInput