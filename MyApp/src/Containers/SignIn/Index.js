import React from 'react'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'

const SignIn = ({ height = 200, width = 200, mode = 'contain' }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
      <Text>Sign in page</Text>
    </View>
  )
}

export default SignIn
