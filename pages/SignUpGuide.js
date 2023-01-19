import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import TextComp from '../Components/SignUpGuide/TextComp';
import SelectionView from '../Components/SignUpGuide/SelectionView';

export default function SignUpGuide({navigation}) {

    const {width,height} = Dimensions.get('screen');
    
    const [type,setType] = useState('');


  return (
    <View style={{flex:1,backgroundColor:"white"}}>
       <TextComp height={height} width={width} />
    {/* <Text style={{color:"gray",margin:width*0.2}}>What best describes you..</Text> */}
    <SelectionView height={height} width={width} type={type} setType={setType} navigation={navigation}/>
    
    </View>
  )
}