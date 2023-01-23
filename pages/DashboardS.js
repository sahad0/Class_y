import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutController } from '../Store/store';

export default function DashboardS() {


const dispatch = useDispatch();


  return (
    <View>
      <Text>WOw</Text>
      <Button title='logout' onPress={()=> dispatch(logoutController())} />
    </View>
  )
}