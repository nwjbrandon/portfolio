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
      <ChatHeader />
      <ChatHistory />
      <div className="chatbot__quickselect--container">
        <button className="chatbot__quickselect--button">
          What anime he likes?
        </button>
        <button className="chatbot__quickselect--button">
          What is his current job?
        </button>
        <button className="chatbot__quickselect--button">
          Tell me about him?
        </button>
        <button className="chatbot__quickselect--button">
          What anime he likes?
        </button>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatCanvas;
