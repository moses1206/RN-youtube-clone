import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Home() {
  const mycolor = '#212121'

  return (
    <View
      style={{
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,

        // Ios elevation대신 시용
        // shadowOffset: { width: 10, height: 10 },
        // shadowColor: 'black',
        // shadowOpacity: 1.0,
      }}
    >
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <AntDesign
          style={{ marginLeft: 20 }}
          name='youtube'
          size={32}
          color='red'
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            color: mycolor,
            fontWeight: 'bold',
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name='md-videocam' size={32} color={mycolor} />
        <Ionicons name='md-search' size={32} color={mycolor} />
        <MaterialCommunityIcons
          name='account-circle'
          size={32}
          color='#212121'
        />
      </View>
    </View>
  )
}
