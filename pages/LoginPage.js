import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Screen } from 'react-native-screens';
import Heading from '../Components/Login/Heading';
import { Formik } from 'formik';
const backgroundImg = require('../assets/images/LandingPage/img1.png');
const backgroundImg1 = require('../assets/images/LandingPage/img2.png');


export default function LoginPage() {
    const {width,height} = Dimensions.get('screen');
  const [loading,setLoading] = useState(false);



    const styles = StyleSheet.create({
        inputStyle :{
          backgroundColor:"white",
          borderColor:"lightgray",
          borderWidth:1,
          width:width*0.8,
          alignSelf:'center',
          borderRadius:10,
          paddingLeft:20,
          marginTop:10,
          color:"black"
        }
      })




  return (
    <View onPress={()=>Keyboard.dismiss()} style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity  activeOpacity={1} onPress={()=>Keyboard.dismiss()} style={[StyleSheet.absoluteFillObject]}>
        <Heading height={height} />

        <Image source={backgroundImg1} style={{marginTop:-height*0.05,alignSelf:'center',height:height*0.3,width:width*0.5,transform:[{rotateZ:"50deg"}]}}resizeMode={'contain'} />
    
    
        <Formik
        validateOnChange={false}
        initialValues={{email:"",password:"" }}
        onSubmit={(value)=>console.log(value)}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>

            <TextInput   onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}style={styles.inputStyle} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'emailAddress'}  placeholder={"Email"} />
            <TextInput   onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}style={styles.inputStyle} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'password'} secureTextEntry={true} placeholder={"Password"} />
            <Text style={{color:'black',textDecorationLine:'underline',alignSelf:'flex-end',margin:height*0.05,marginTop:height*0.02}}>Forgot Password?</Text>

            <TouchableOpacity onPress={handleSubmit} style={{height:height*0.06,justifyContent:'center',backgroundColor:'#f4f7ff',borderColor:"#6e7d98",borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"#6e7d98"}}>
            {
              loading ?
              <>
                <ActivityIndicator color={"#6e7d98"} style={{marginRight:width*0.04}} size={'large'}/>
              </>
              :
              <>
                <Text style={{fontSize:height*0.023,marginLeft:width*0.26,fontFamily:'Lato',color:"#6e7d98"}}>Login</Text>
              </>
              }
        </TouchableOpacity>

        </>)}

        

        </Formik>
        </TouchableOpacity>
    </View>
  )
}