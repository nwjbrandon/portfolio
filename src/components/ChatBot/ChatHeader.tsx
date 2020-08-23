import React from 'react';
import MikuChatbot from 'assets/images/MikuChatbot.gif';
import { useChatBot } from './ChatBotContext';

import './ChatBot.scss';

const ChatHeader: React.FC = () => {
  const { closeChat } = useChatBot();
  return (
    <div className="chatbot__chatheader">
      <div>
        <img
          src={MikuChatbot}
          alt="Miku Icon"
          className="chatbot__chatheader--img"
        />
      </div>
      <div>
        <div className="chatbot__chatheader--header">Miku</div>
        <div className="chatbot__chatheader--subheader">Virtual Assistant</div>
      </div>
      <div className="chatbot__chatheader--close" onClick={closeChat}>
        X
      </div>
    </div>
  );
};

export default ChatHeader;
