import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, ActivityIndicator, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginController } from '../../Store/store';
import { Formik } from 'formik';
import * as yup from 'yup';
const backgroundImg1 = require('../../assets/images/LandingPage/img3.png');



export default function SignUpInput({height,width,mode,navigation}) {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  const dispatch = useDispatch();





  const signUpFunc = async(value)=>{

    try {
      const details = {...value,user_type:mode.toUpperCase()}

      setLoading(true);

      const {data} = await axios.post('http://194.195.114.166/api/register',details);
      if(data){
        const {status} = data;

        if(status){
            const {token,user} = data.response;
            dispatch(loginController({token:token,user:user}));

            
        }
        else{
          refEmail.current.setNativeProps({
            style:{borderColor: '#EE9B9B',}
          })
          setError(true);
          setLoading(false);
        }

      }
     
     
    } catch (error) {
      setLoading(false);
    }
  }





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
  });

  const signupValidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(8, ({ min }) => `Username must be at least ${min} characters`)
      .required('Username is required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  return (
    <>
    <View style={{height:height*0.7,}}>
        <Image source={backgroundImg1} style={{marginTop:-height*0.05,alignSelf:'center',height:height*0.3,width:width*0.5,transform:[{rotateZ:"30deg"}]}}resizeMode={'contain'} />


      <Formik
        validationSchema={signupValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ username:"",email:"",password:"" }}
        onSubmit={signUpFunc}
      >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <TextInput name="username" ref={refUsername} onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} style={{backgroundColor:"white",borderColor:errors.username?'#EE9B9B':'lightgray',borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"black"}} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'name'} placeholder={"Username"} />
          {
            errors.username && <Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{errors.username}</Text>
          }
          <TextInput name="email" ref={refEmail}  onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}style={[styles.inputStyle,{borderColor:errors.email?'#EE9B9B':'lightgray'}]} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'emailAddress'}  placeholder={"Email"} />
          {
            errors.email && <Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{errors.email}</Text>
          }
          {
            error &&(<Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>Email aldready exist,please login!</Text>)
          }
          <TextInput  name="password" ref={refPassword} onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}style={[styles.inputStyle,{borderColor:errors.password?'#EE9B9B':'lightgray'}]} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'password'} secureTextEntry={true} placeholder={"Password"} />
          {
            errors.password && <Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{errors.password}</Text>

          }
            <Text style={{color:'black',textDecorationLine:'underline',alignSelf:'flex-end',margin:height*0.05,marginTop:height*0.02}}>Issues with Sign In?</Text>
          <TouchableOpacity  onPress={handleSubmit} style={{height:height*0.06,justifyContent:'center',backgroundColor:'#f4f7ff',borderColor:"#6e7d98",borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"#6e7d98"}}>
            {
              loading ?
              <>
                <ActivityIndicator color={"#6e7d98"} style={{marginRight:width*0.04}} size={'large'}/>
              </>
              :
              <>
                <Text style={{fontSize:height*0.023,marginLeft:width*0.26,fontFamily:'Lato',color:"#6e7d98"}}>Signup</Text>
              </>
              }
            </TouchableOpacity>
        </>    
      )}
      
      </Formik>

      
    </View>

  
    </>

    
  )
}



