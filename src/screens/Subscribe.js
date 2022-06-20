import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Constant from 'expo-constants'

export default function Subscribe() {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
      <Text>Subscribe Screen </Text>
    </View>
  )
}
