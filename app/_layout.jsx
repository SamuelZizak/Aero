import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#161622' }}>
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false, }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false ,}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false ,}} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
    </View>
    
  )
}

export default RootLayout