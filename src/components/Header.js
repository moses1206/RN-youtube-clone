import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const mycolor = colors.iconColor
  const currentTheme = useSelector((state) => {
    return state.myDarkMode
  })

  return (
    <View
      style={{
        height: 45,
        backgroundColor: colors.headerColor,
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
        <Ionicons
          name='md-search'
          size={32}
          color={mycolor}
          onPress={() => navigation.navigate('search')}
        />
        <MaterialCommunityIcons
          name='account-circle'
          size={32}
          color={mycolor}
          onPress={() =>
            dispatch({ type: 'change_theme', payload: !currentTheme })
          }
        />
      </View>
    </View>
  )
}
