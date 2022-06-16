import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function MiniCard() {
  return (
    <View style={{ flexDirection: 'row', margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }}
        style={{ width: '45%', height: 100 }}
      />
      <View style={{ paddingLeft: 7 }}>
        <Text
          style={{ fontSize: 17, width: Dimensions.get('screen').width / 2 }}
          ellipsizeMode='tail'
          numberOfLines={3}
        >
          Lorem This is amazing course !!! Lorem This is amazing course !!!
          Lorem This is amazing course !!!
        </Text>
        <Text
          style={{ fontSize: 12, width: Dimensions.get('screen').width / 2 }}
          ellipsizeMode='tail'
          numberOfLines={1}
        >
          coders never quit fdssssssssdsfds dfsssssssssssss dfasasasasasasasas
        </Text>
      </View>
    </View>
  )
}
