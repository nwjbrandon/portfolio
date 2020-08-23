import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import { useChatBot } from './ChatBotContext';
import './ChatBot.scss';

const ChatCanvas: React.FC = () => {
  const { onKeyDown } = useChatBot();
  return (
    <div className="chatbot__chatcanvas" onKeyPress={onKeyDown}>
      <ChatHeader/>
      <ChatHistory />
      <ChatInput />
    </div>
  );
};

export default ChatCanvas;
