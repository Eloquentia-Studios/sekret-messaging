import { Ionicons } from '@expo/vector-icons'
import { TextInput, TouchableOpacity, View } from 'react-native'

const MessageInput = () => {
  return (
    <View className='flex-row items-center flex-1 w-full p-4 bg-zinc-800 max-h-20'>
      <TextInput className='flex-grow p-4 mr-4 text-white rounded-md bg-zinc-700' placeholder='Type your message here...' />
      <TouchableOpacity onPress={() => {}}>
        <View className='items-center justify-center flex-1 w-10 rounded-full bg-zinc-700 max-h-10'>
          <Ionicons name='send' size={19} color='white' />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MessageInput
