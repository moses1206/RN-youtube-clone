import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import dotenv from 'dotenv'
dotenv.config()

export default function Search() {
  const [text, setText] = useState('')
  const [miniCardData, setMiniCardData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${text}&type=video&key=${process.env.GOOGLE_YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMiniCardData(data.items)
        setLoading(false)
      })
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          elevation: 5,
          backgroundColor: 'white',
        }}
      >
        <Ionicons name='md-arrow-back' size={32} />
        <TextInput
          style={{ backgroundColor: '#e6e6e6', width: '70%' }}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Ionicons name='md-send' size={32} onPress={() => fetchData()} />
      </View>

      {loading ? (
        <ActivityIndicator style={{ marginTop: 30 }} size='large' color='red' />
      ) : (
        <FlatList
          data={miniCardData}
          renderItem={({ item }) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            )
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      )}
    </View>
  )
}
