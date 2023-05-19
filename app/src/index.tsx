import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { trpc } from './services/trpc'

const IndexPage = () => {
  const { data } = trpc.hello.useQuery('world')

  if (!data) return <Text>Loading...</Text>

  return (
    <View style={styles.container}>
      <Text>{data.message}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default IndexPage
