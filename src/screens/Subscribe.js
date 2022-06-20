import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constant from 'expo-constants'

export default function Subscribe() {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Text>Subscribe Screen </Text>
    </View>
  )
}
