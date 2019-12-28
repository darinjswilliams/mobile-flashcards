import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CardFlip from 'react-native-card-flip'

const cardView = (props) => {
    return <View style={{ flex: 1, alignItems: "center", }}>

        <CardFlip ref={card => this.card = card} style={{ width: "90%", marginTop: 80, height: 400 }} >

            <TouchableOpacity style={{ backgroundColor: "#b2e7e7", width: "95%", height: 200 }}
                onPress={() => this.card.flip()} >
                <Text style={{ textAlign: "center" ,fontSize:18}}>{props.question}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "#009e9e", width: "95%", height: 200 }}
                onPress={() => this.card.flip()} >
                <Text style={{ textAlign: "center",fontSize:18 }}>{props.answer}</Text>
            </TouchableOpacity>

        </CardFlip>

    </View>
}

export default cardView 