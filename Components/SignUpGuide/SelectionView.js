import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto'
import Icons from 'react-native-vector-icons/FontAwesome5'
import IonIcons from 'react-native-vector-icons/Ionicons'




export default function SelectionView({height,width,type,setType,navigation}) {


    const forwardSelection = ()=>{
        if(type===''){
            return
        }

        navigation.navigate('SignUp');
    }


  return (
   <>
    <View>
        <TouchableOpacity activeOpacity={1} onPress={()=> setType('s')} style={{height:width*0.5,width:width*0.5,backgroundColor:'#f4f7ff',margin:height*0.05,borderRadius:30,marginBottom:height*0.02,justifyContent:'center',borderColor:'white',elevation:type && type==='s'? 4 : 0,}}>
                <Icon name='person' size={50} color={'#6e7d98'} style={{alignSelf:'center',}} />
                {/* <Text style={{color:'black'}}>Student</Text> */}
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={()=> setType('t')}  style={{height:width*0.5,width:width*0.5,backgroundColor:'#fff5f4',margin:height*0.02,borderRadius:30,marginLeft:height*0.2,justifyContent:'center',borderColor:'white',elevation:type && type==='t'? 4 : 0,}}>
            <Icons name='chalkboard-teacher' size={50} color={'#6e7d98'} style={{alignSelf:'center',}} />

        </TouchableOpacity>
    </View>

    <TouchableOpacity disabled={type===''?true:false}  onPress={forwardSelection}>
    
    <IonIcons name='arrow-forward' size={40} color={type!=='' ? 'black' :'lightgray'} style={{alignSelf:'flex-end',margin:height*0.1,marginRight:height*0.05}} />

    </TouchableOpacity>
    </>
  )
}