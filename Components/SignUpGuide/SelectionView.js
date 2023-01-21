import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Fontisto'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from '../Loader/Loader'




export default function SelectionView({height,width,type,setType,navigation}) {

    const [loading,setLoading] = useState(false);

    const forwardSelection = ()=>{
        if(type===''){
            return
        }
        setLoading(true);
        setTimeout(()=>{
            navigation.navigate('SignUp',{mode:type});

        },200);
    }


  return (
   <>
    <View>
        <TouchableOpacity activeOpacity={1} onPress={()=> setType('s')} style={{height:width*0.5,width:width*0.5,backgroundColor:'#f4f7ff',margin:height*0.05,borderRadius:30,marginBottom:height*0.02,justifyContent:'center',borderColor:'white',elevation:type && type==='s'? 4 : 0,}}>
                <Icon name='person' size={50} color={'black'} style={{alignSelf:'center',}} />
                <Text style={{color:"black",alignSelf:'center',margin:10,fontFamily:'Lato'}}>Learner</Text>
                {/* <Text style={{color:'black'}}>Student</Text> */}
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={()=> setType('t')}  style={{height:width*0.5,width:width*0.5,backgroundColor:'#fff5f4',margin:height*0.02,borderRadius:30,marginLeft:height*0.2,justifyContent:'center',borderColor:'white',elevation:type && type==='t'? 4 : 0,}}>
            <Icons name='chalkboard-teacher' size={50} color={'black'} style={{alignSelf:'center',}} />
            <Text style={{color:"black",alignSelf:'center',margin:10,fontFamily:'Lato'}}>Instructor</Text>

        </TouchableOpacity>


        <TouchableOpacity disabled={type===''?true:false}  onPress={forwardSelection}>
            {/* {!loading && */}
           
            {/* ( <> */}
                <Entypo name='chevron-with-circle-right' size={40} color={type!=='' ? 'black' :'lightgray'} style={{alignSelf:'flex-end',margin:height*0.1,marginRight:height*0.05,marginTop:height*0.06}} />
             {/* </>)} */}
            

        </TouchableOpacity>
    </View>
    {loading &&(
    <Loader />)}


  
    </>
  )
}