import { View, Text, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import Heading from '../Components/SignUp/Heading'
import SignUpInput from '../Components/SignUp/SignUpInput';

export default function SignUpPage({navigation,route}) {

    const {height,width} = Dimensions.get('screen');

    const {mode} = route.params;

    


    useEffect(() => {
      const unsubscribe = navigation.addListener('beforeRemove', e => {
        e.preventDefault(); 
        unsubscribe();
        navigation.navigate('LandingPage') 
      });
   }, []);



  return (
    <TouchableOpacity activeOpacity={1} onPress={()=> Keyboard.dismiss()} style={{flex:1,backgroundColor:"white"}}>

        <Heading height={height} mode={mode} />
        <SignUpInput height={height} width={width} mode={mode}  />

    </TouchableOpacity>
  )
}