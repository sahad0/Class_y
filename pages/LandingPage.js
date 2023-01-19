import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import HeadingComp from '../Components/LandingComp/HeadingComp';
import ButtonComp from '../Components/LandingComp/ButtonComp';
import ImageComp from '../Components/LandingComp/ImageComp';






export default function LandingPage({navigation}) {

    const {width,height} = Dimensions.get('screen');


  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      
        <ImageComp height={height} width={width} />

        <HeadingComp height={height} />

        <ButtonComp height={height} width={width}  navigation={navigation}/>
       

    </View>
  )
}