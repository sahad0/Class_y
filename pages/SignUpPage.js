import { View, Text, Dimensions, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import Heading from '../Components/SignUp/Heading'
import InputComp from '../Components/SignUp/InputComp';

export default function SignUpPage() {

    const {height,width} = Dimensions.get('screen');


  return (
    <TouchableOpacity activeOpacity={1} onPress={()=> Keyboard.dismiss()} style={{flex:1,backgroundColor:"white"}}>
        <Heading height={height}  />
        <InputComp height={height} width={width} />

    </TouchableOpacity>
  )
}