// rnf
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

export default function Setting() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Setting Screen</Text>
      </View>
    </SafeAreaView>
  )
}