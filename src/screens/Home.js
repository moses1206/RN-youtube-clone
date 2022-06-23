import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'
import Constant from 'expo-constants'
import { useSelector } from 'react-redux'

export default function Home({ navigation }) {
  const cardData = useSelector((state) => {
    return state.cardData
  })

  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          )
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  )
}
