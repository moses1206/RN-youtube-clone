import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Card() {
  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
            this is amazing course dslfjdslfldsfjlsdddddddddddddddd das
          </Text>
          <Text>this is amazing course</Text>
        </View>
      </View>
    </View>
  )
}
