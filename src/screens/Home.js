import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'
import Constant from 'expo-constants'

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  )
}
