import { View, Text } from 'react-native'
import React from 'react'

export default function Heading({height,mode}) {


  return (
    <View style={{height:height*0.16}}>
      
      <Text style={{fontFamily:'LatoB',color:"black",fontSize:height*0.04,margin:height*0.06,marginLeft:height*0.05,marginBottom:0}}>Welcome,</Text>
      <Text style={{fontFamily:'LatoB',color:"gray",fontSize:height*0.015,margin:height*0.06,marginLeft:height*0.05,marginTop:10,marginBottom:height*0.06}}> Please fill in the details to continue,{mode==='s'? " (Learner)":" (Instructor)"}</Text>

    </View>
  )
}