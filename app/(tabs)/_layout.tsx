import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const Rootlayout = () => {
  return (
<Stack>
    <Stack.Screen name="index"/>
    <Stack.Screen name="about"/>
    
</Stack>
  )
}

export default Rootlayout;