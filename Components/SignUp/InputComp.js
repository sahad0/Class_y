import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Fontisto'
import Icons from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginController } from '../../Store/store';
import { Formik } from 'formik';


export default function InputComp({height,width,mode}) {

  const [loading,setLoading] = useState(false);
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
          setLoading(false);
          console.log("Error");
        }

      }
     
    } catch (error) {
      
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

  

  return (
    <>
    <View style={{height:height*0.7,}}>
      <View  style={{height:width*0.2,width:width*0.2,backgroundColor:mode&&mode==='s'?'#f4f7ff':'#fff5f4',margin:height*0.05,marginTop:height*0.01,alignSelf:'center',borderRadius:height,marginBottom:height*0.02,justifyContent:'center',borderColor:'white',elevation:0}}>
             {mode==='s'?
            <><Icon name='person' size={20} color={'black'} style={{alignSelf:'center',}} /></> :<><Icons name='chalkboard-teacher' size={20} color={'black'} style={{alignSelf:'center',}} /></>
            }     
                  


      </View>

      <Formik
        validateOnChange={false}
        initialValues={{ username:"",email:"",password:"" }}
        onSubmit={signUpFunc}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <TextInput   onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} style={{backgroundColor:"white",borderColor:"lightgray",borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"black"}} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'name'} placeholder={"Username"} />
          <TextInput   onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}style={styles.inputStyle} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'emailAddress'}  placeholder={"Email"} />
          <TextInput   onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}style={styles.inputStyle} cursorColor={'#6e7d98'} placeholderTextColor={"gray"} textContentType={'password'} secureTextEntry={true} placeholder={"Password"} />
        
        
          <Text style={{color:'black',textDecorationLine:'underline',alignSelf:'flex-end',margin:height*0.05,marginTop:height*0.02}}>Issues with Sign In?</Text>
    
          <TouchableOpacity onPress={handleSubmit} style={{height:height*0.06,justifyContent:'center',backgroundColor:mode&&mode==='s'?'#f4f7ff':'#fff5f4',borderColor:mode&&mode==='s'?"#6e7d98":'#e6aba4',borderWidth:1,width:width*0.8,alignSelf:'center',borderRadius:10,paddingLeft:20,color:"#6e7d98"}}>
            {
              loading ?
              <>
                <ActivityIndicator color={mode&&mode==='s'?"#6e7d98":'#e6aba4'} style={{marginRight:width*0.04}} size={'large'}/>
              </>
              :
              <>
                <Text style={{fontSize:height*0.023,marginLeft:width*0.26,fontFamily:'Lato',color:mode&&mode==='s'?"#6e7d98":'#e6aba4'}}>Signup</Text>
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



