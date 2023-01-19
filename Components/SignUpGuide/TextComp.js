import { View, Text } from 'react-native'
import React from 'react'

export default function TextComp({height,width}) {
  return (
    <View>
        <Text style={{color:"black",fontFamily:"Lato",fontSize:height*0.04,margin:width*0.16,marginLeft:width*0.1,marginBottom:0}}>What are</Text>
        <Text style={{color:"black",fontFamily:"Lato",fontSize:height*0.03,marginLeft:width*0.1}}>you ?</Text>
    </View>
  )
}