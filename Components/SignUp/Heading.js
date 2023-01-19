import { View, Text } from 'react-native'
import React from 'react'

export default function Heading({height}) {


  return (
    <View>
      <Text style={{fontFamily:'LatoB',color:"black",fontSize:height*0.04,margin:height*0.08,marginLeft:height*0.05,marginBottom:0}}>Welcome,</Text>
      <Text style={{fontFamily:'LatoB',color:"gray",fontSize:height*0.015,margin:height*0.08,marginLeft:height*0.05,marginTop:10}}> Please fill the details to continue,</Text>

    </View>
  )
}