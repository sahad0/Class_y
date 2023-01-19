import { View, Text, Image } from 'react-native'
import React from 'react'

const img1 = require('../../assets/images/LandingPage/img1.png');
const img2 = require('../../assets/images/LandingPage/img2.png');
const img3 = require('../../assets/images/LandingPage/img3.png');
const img4 = require('../../assets/images/LandingPage/img4.png');
const img5 = require('../../assets/images/LandingPage/img5.png');

export default function ImageComp({height,width}) {
  return (
    <View style={{height:height*0.55,marginTop:height*0.02}}>
        <Image source={img1} style={{height:height*0.55,width:width*0.9,alignSelf:"center"}} resizeMode={'contain'} />
        <Image source={img2} style={{height:height*0.28,width:height*0.28,position:"absolute",left:width*0.4,marginTop:height*0.20,transform:[{rotateZ:"10deg"}]}} resizeMode={'contain'} />
        <Image source={img3} style={{height:height*0.28,width:height*0.28,position:"absolute",transform:[{rotateZ:"25deg"}]}} resizeMode={'contain'} />
        <Image source={img4} style={{height:height*0.15,width:height*0.15,position:"absolute",left:width*0.02,transform:[{rotateZ:"30deg"}],marginTop:height*0.25}} resizeMode={'contain'} />
        <Image source={img5} style={{height:height*0.12,width:height*0.12,position:"absolute",left:width*0.6,marginTop:height*0.05,transform:[{rotateZ:"50deg"}]}} resizeMode={'contain'} />
    </View>


  )
}