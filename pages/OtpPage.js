import { View, Text, Dimensions } from 'react-native'
import React from 'react'

export default function OtpPage() {
    const {width, height} = Dimensions.get('screen');
  return (
    <View style={{flex:1}}>
        <OtpPage height={height} />
    </View>
  )
}