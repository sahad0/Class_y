import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Screen } from 'react-native-screens';
import Heading from '../Components/Login/Heading';
import { Formik } from 'formik';
import LoginInput from '../Components/Login/LoginInput';
const backgroundImg = require('../assets/images/LandingPage/img1.png');
const backgroundImg1 = require('../assets/images/LandingPage/img2.png');


export default function LoginPage() {
    const {width,height} = Dimensions.get('screen');



   




  return (
    <View onPress={()=>Keyboard.dismiss()} style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity  activeOpacity={1} onPress={()=>Keyboard.dismiss()} style={[StyleSheet.absoluteFillObject]}>
        <Heading height={height} />

        <Image source={backgroundImg1} style={{marginTop:-height*0.05,alignSelf:'center',height:height*0.3,width:width*0.5,transform:[{rotateZ:"50deg"}]}}resizeMode={'contain'} />
    
    
       <LoginInput height={height} width={width} />
        </TouchableOpacity>
    </View>
  )
}