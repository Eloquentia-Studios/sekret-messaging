import { useRef } from 'react'
import { ScrollView, View } from 'react-native'
import Message from './Message'

const MessageList = () => {
  const scrollViewRef = useRef<ScrollView>(null)

  return (
    <View className='flex-1 justify-end'>
      <ScrollView ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: false })}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </ScrollView>
    </View>
  )
}

export default MessageList
