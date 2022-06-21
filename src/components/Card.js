import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Card(props) {
  return (
    <View style={{ marginBottom: 10 }} onPress={() => console.log(props)}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={{ width: '100%', height: 200 }}
      />
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <MaterialCommunityIcons
          name='account-circle'
          size={40}
          color='#212121'
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontSize: 20, width: Dimensions.get('screen').width - 50 }}
            ellipsizeMode='tail'
            numberOfLines={2}
          >
            {props.title}
          </Text>
          <Text>{props.channel}</Text>
        </View>
      </View>
    </View>
  )
}
