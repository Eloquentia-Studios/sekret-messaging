import React from 'react'
import { View } from 'react-native'
import MessageInput from './components/inputs/MessageInput'
import MessageList from './components/messages/MessageList'

const IndexPage = () => {
  return (
    <View className='flex-1 bg-zinc-900'>
      <MessageList />
      <MessageInput />
    </View>
  )
}

export default IndexPage
