import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import ChatBotHotText from './ChatBotHotText';
import { useChatBot } from './ChatBotContext';
import './ChatBot.scss';

const ChatCanvas: React.FC = () => {
  const { onKeyDown } = useChatBot();
  return (
    <div className="chatbot__chatcanvas" onKeyPress={onKeyDown}>
      <ChatHeader />
      <ChatHistory />
      <ChatBotHotText />
      <ChatInput />
    </div>
  );
};

export default ChatCanvas;
