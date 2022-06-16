import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'

export default function Search() {
  const [text, setText] = useState('')

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
        <Ionicons name='md-send' size={32} />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
    </View>
  )
}
