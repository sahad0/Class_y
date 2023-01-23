import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutController } from '../Store/store';

export default function DashboardT() {


  const dispatch = useDispatch();

  return (
    <View>
      <Button title='logout' onPress={()=> dispatch(logoutController())} />
    </View>
  )
}