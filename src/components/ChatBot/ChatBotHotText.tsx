import React from 'react';
import { useChatBot } from './ChatBotContext';
import './ChatBot.scss';

const ChatBotHotText: React.FC = () => {
  const { hotTexts, addMessage } = useChatBot();
  return (
    <div className="chatbot__quickselect--container">
      {hotTexts.map((value, index) => (
        <button
          key={index}
          onClick={() => addMessage(value[0], value[1])}
          className="chatbot__quickselect--button"
        >
          {value[0]}
        </button>
      ))}
    </div>
  );
};

export default ChatBotHotText;
