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
import Constant from 'expo-constants'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'

import { GOOGLE_YOUTUBE_API_KEY } from '@env'

export default function Search({ navigation }) {
  const { colors } = useTheme()
  const mycolor = colors.iconColor

  const [text, setText] = useState('')
  // const [miniCardData, setMiniCardData] = useState([])
  const miniCardData = useSelector((state) => {
    return state
  })
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${text}&type=video&key=${GOOGLE_YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // setMiniCardData(data.items)
        setLoading(false)
        dispatch({ type: 'add', payload: data.items })
      })
  }

  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          elevation: 5,
          backgroundColor: colors.headerColor,
        }}
      >
        <Ionicons
          style={{ color: mycolor }}
          name='md-arrow-back'
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{ backgroundColor: '#e6e6e6', width: '70%' }}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Ionicons
          style={{ color: mycolor }}
          name='md-send'
          size={32}
          onPress={() => fetchData()}
        />
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
