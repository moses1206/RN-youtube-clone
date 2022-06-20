import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Constant from 'expo-constants'

export default function VideoPlayer() {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
      <Text>VideoPlayer Screen</Text>
    </View>
  )
}
