import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextComp from '../Components/SignUpGuide/TextComp';
import SelectionView from '../Components/SignUpGuide/SelectionView';
import { useIsFocused } from '@react-navigation/native';


export default function SignUpGuide({navigation}) {

    const {width,height} = Dimensions.get('screen');
    
    const [type,setType] = useState('');

    // const focused = useIsFocused();

    // useEffect(()=>{
    //   if(!focused){
    //     setType('');
    //   }
    // },[focused])

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
       <TextComp height={height} width={width} />
    {/* <Text style={{color:"gray",margin:width*0.2}}>What best describes you..</Text> */}
    <SelectionView height={height} width={width} type={type} setType={setType} navigation={navigation}/>
    
    </View>
  )
}