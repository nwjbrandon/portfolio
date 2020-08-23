import React from 'react'
import { ChatBotProvider } from './ChatBotContext'
import ChatBot from './ChatBot';

const ChatBotProviders:React.FC = () => {
  return (
    <ChatBotProvider>
      <ChatBot/>
    </ChatBotProvider>
  )
}

export default ChatBotProviders
