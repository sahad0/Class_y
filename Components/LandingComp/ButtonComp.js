import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


export default function ButtonComp({height,width,navigation}) {
  return (
   <>
    <TouchableOpacity style={{flexDirection:"row",height:height*0.07,backgroundColor:"#fff5f4",width:width*0.85,alignSelf:"center",marginTop:height*0.06,borderRadius:15}}>
        <View style={{justifyContent:'center',height:"75%",width:width*0.15,backgroundColor:"white",alignSelf:"flex-start",margin:"2%",marginLeft:"4%",borderRadius:12}}>
            <Icon name='login' size={25} color={'black'} style={{alignSelf:"center"}} />
        </View>
        <Text style={{color:"black",margin:height*0.02,fontSize:height*0.02}}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{navigation.navigate('SignUpGuide')}} style={{flexDirection:"row",height:height*0.07,backgroundColor:"#f4f7ff",marginTop:height*0.025,width:width*0.85,alignSelf:"center",borderRadius:15}}>
        <View style={{justifyContent:'center',height:"75%",width:width*0.15,backgroundColor:"white",alignSelf:"flex-start",margin:"2%",marginLeft:"4%",borderRadius:12}}>
          <Icon name='shrink' size={25} color={'black'} style={{alignSelf:"center"}} />
        </View>
        <Text style={{color:"#6e7d98",margin:height*0.02,fontSize:height*0.02}}>Sign up here!</Text>
    </TouchableOpacity>
   </>
  )
}