import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexExampleContainer, SignIn, SignUp } from '@/Containers'
import { startClock } from 'react-native-reanimated'
import { single } from 'validate.js'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "SignUp"
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
