import { View, Text } from 'react-native'
import React from 'react'

export default function HeadingComp({height,}) {
  return (
    <View style={{height:height*0.09,}}>

        <Text style={{color:"black",fontFamily:"Lato",fontSize:30,alignSelf:"center"}}>yow! get set </Text>
        <Text style={{color:"black",fontFamily:"Lato",fontSize:15,alignSelf:"center"}}>stream. </Text>

    </View>
  )
}