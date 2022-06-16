import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {
  return (
    <View>
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
