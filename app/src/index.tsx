import React from 'react'
import { Text, View } from 'react-native'
import MessageInput from './components/inputs/MessageInput'
import { trpc } from './services/trpc'

const IndexPage = () => {
  const { data } = trpc.hello.useQuery('world')

  if (!data) return <Text>Loading...</Text>

  return (
    <View className='flex-1 bg-zinc-900'>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-4xl font-bold text-white'>{data.message}</Text>
      </View>

      <MessageInput />
    </View>
  )
}

export default IndexPage
