import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, ActivityIndicator, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Fontisto'
import Icons from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginController } from '../../Store/store';
import { Formik } from 'formik';
import * as yup from 'yup';
const backgroundImg1 = require('../../assets/images/LandingPage/img3.png');



export default function InputComp({height,width,mode}) {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  const dispatch = useDispatch();





  const signUpFunc = async(value)=>{
    const {username,email,password} = value;
    if(username===""||email==="",password==="") return;
    const details = {...value,user_type:mode.toUpperCase()}


    try {
      setLoading(true);

      const {data} = await axios.post('http://192.168.1.73:4000/api/register',details);
      if(data){
        const {status} = data;

        if(status==='success'){
            const {token,user} = data.response;
            dispatch(loginController({token:token,user:user}));

            
        }
        else{
          refEmail.current.style.borderColor = '#EE9B9B';
          setError(true);
          setLoading(false);
        }

      }
     
    } catch (error) {
      
    }
  }


  const changeUserBorder = (error)=> {
    refUsername.current.setNativeProps({style:{  borderColor:'#EE9B9B'}})
    return(
      <Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{error}</Text>
    )
  };

  const changeBackUser = ()=>{
    refUsername.current.setNativeProps({style:{borderColor:'lightgray'}});
  }
  const changeEmailBorder = (error)=> {
    refEmail.current.setNativeProps({style:{  borderColor:'#EE9B9B'}})
    return(
      <Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{error}</Text>
    )
  };
  const changeBackEmail = ()=>{
    refEmail.current.setNativeProps({style:{borderColor:'lightgray'}});
  }
  const changePasswordBorder = (error)=> {
    refPassword.current.setNativeProps({style:{  borderColor:'#EE9B9B'}})
    return(
      <Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{error}</Text>
    )
  };
  const changeBackPassword = ()=>{
    refPassword.current.setNativeProps({style:{borderColor:'lightgray'}});
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
          <TextInput name="username" ref={refUsername} onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} style={{backgroundColor:"white",borderColor:"lightgray",borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"black"}} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'name'} placeholder={"Username"} />
          {
            errors.username ? changeUserBorder(errors.username) : changeBackUser()
          }
          <TextInput name="email" ref={refEmail}  onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}style={styles.inputStyle} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'emailAddress'}  placeholder={"Email"} />
          {
            errors.email ? changeEmailBorder(errors.email) : changeBackEmail()
          }
          {
            error &&(<Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>Email aldready exist,please login!</Text>)
          }
          <TextInput  name="password" ref={refPassword} onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}style={styles.inputStyle} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'password'} secureTextEntry={true} placeholder={"Password"} />
          {
            errors.password ? changePasswordBorder(errors.password) : changeBackPassword()

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



