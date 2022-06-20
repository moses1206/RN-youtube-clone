import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'

import { MaterialIcons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Provider } from 'react-redux'
import store from './src/store'
import { reducer } from './src/reducers'

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === 'home') {
            iconName = 'home'
          } else if (route.name === 'explore') {
            iconName = 'explore'
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions'
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='rootHome' component={RootHome} />
          <Stack.Screen name='search' component={Search} />
          <Stack.Screen name='videoplayer' component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
