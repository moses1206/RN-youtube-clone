import { View, Text } from 'react-native'
import React from 'react'
import Constant from 'expo-constants'

export default function VideoPlayer() {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Text>VideoPlayer Screen</Text>
    </View>
  )
}
