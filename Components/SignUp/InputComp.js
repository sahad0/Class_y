import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function InputComp({height,width}) {
  return (
    <View>
      <TextInput style={{backgroundColor:"white",borderColor:"lightgray",borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"#6e7d98"}} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'emailAddress'} placeholder={"Email"} />
      <TextInput style={{backgroundColor:"white",borderColor:"lightgray",borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,marginTop:10,color:"#6e7d98"}} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'password'} secureTextEntry={true} placeholder={"Password"} />

    </View>
  )
}