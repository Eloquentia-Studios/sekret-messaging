import { View } from 'react-native'
import Message from './Message'

const MessageList = () => {
  return (
    <View className='flex-1 justify-end'>
      <Message />
      <Message />
      <Message />
    </View>
  )
}

export default MessageList
