import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
     <View style={{ flex: 1, backgroundColor: '#161622' }}>
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
    </Stack>
    <StatusBar style="light" backgroundColor='#161622' />
    </View>
    </>
  )
}

export default AuthLayout