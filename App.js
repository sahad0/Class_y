import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Router from './Router/Router'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        <Router />
    </SafeAreaView>
  )
}