import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
export default function Loader() {
  return (
          <Lottie source={require('../../assets/animations/butterfly1.json')} style={{backgroundColor:"rgba(255,255,255,0.3)"}} autoPlay loop />
  )
}