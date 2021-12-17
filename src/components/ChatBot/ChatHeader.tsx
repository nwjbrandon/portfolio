import React from 'react';
import VirtualAssistant from 'assets/images/VirtualAssistant.gif';
import { useChatBot } from './ChatBotContext';

import './ChatBot.scss';

const ChatHeader: React.FC = () => {
  const { closeChat } = useChatBot();
  return (
    <div className="chatbot__chatheader">
      <div>
        <img
          src={VirtualAssistant}
          alt="Chloe Icon"
          className="chatbot__chatheader--img"
        />
      </div>
      <div>
        <div className="chatbot__chatheader--header">Chloe</div>
        <div className="chatbot__chatheader--subheader">Virtual Assistant</div>
      </div>
      <div className="chatbot__chatheader--close" onClick={closeChat}>
        X
      </div>
    </div>
  );
};

export default ChatHeader;
