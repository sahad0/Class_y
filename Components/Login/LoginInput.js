import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginController } from '../../Store/store';


export default function LoginInput({height,width,navigation}) {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState({email:false,password:false});
  const dispatch = useDispatch();

  const loginFunc = async(values)=>{
    try {
      setLoading(true);
      const {data} = await axios.post('http://194.195.114.166/api/login',values);
      if(data){
        const {status,message} = data;
        if(!status){
          if(message==='Email is not found.'){
            setError({...error,email:true,password:false})
          }
          else if(message==='Incorrect password.'){
            setError({...error,password:true,email:false});
          }
            
        }
        else{
          
          const {token,user} = data;
          setLoading(false);
          dispatch(loginController({token:token,user:user}));

        }

      }
    } catch (error) {
      console.log(error);
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
  })


  const loginValidationSchema = yup.object().shape({
    
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .required('Password is required'),
  })

  return (
   <>
     <Formik
        validationSchema={loginValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{email:"",password:"" }}
        onSubmit={loginFunc}
      >
      {({ handleChange, handleBlur, handleSubmit, values ,errors}) => (
        <>

            <TextInput name="email"  onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}style={[styles.inputStyle,{borderColor:error.email||errors.email?'#EE9B9B':'lightgray'}]} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'emailAddress'}  placeholder={"Email"} />
            {errors.email && (<Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{errors.email}</Text>)}
            {error.email && (<Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{"No email exist!,please register"}</Text>)}
            
            <TextInput name="password"  onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}style={[styles.inputStyle,{borderColor:error.password||errors.password?'#EE9B9B':'lightgray'}]} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'password'} secureTextEntry={true} placeholder={"Password"} />
            {errors.password && (<Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{errors.password}</Text>)}
            {error.password && (<Text style={{color:'black',margin:height*0.05,marginTop:0,marginBottom:0,fontSize:height*0.013,color:'#EE9B9B'}}>{"Incorrect Password! please try again"}</Text>)}
            <TouchableOpacity onPress={()=>navigation.navigate('Otp')}> 
              <Text style={{color:'black',textDecorationLine:'underline',alignSelf:'flex-end',margin:height*0.05,marginTop:height*0.02}}>Forgot Password?</Text>
            </TouchableOpacity>
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
   </>
  )
}