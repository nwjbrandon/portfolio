import React from 'react';
import VirtualAssistant from 'assets/images/VirtualAssistant.gif';
import { useChatBot } from './ChatBotContext';
import ChatCanvas from './ChatCanvas';

import './ChatBot.scss';

const Chatbot: React.FC = () => {
  const { isGreeting, isChat, openChat } = useChatBot();

  return (
    <div>
      <div>
        {isGreeting ? (
          <div className="chatbot__launcher--speech-bubble" onClick={openChat}>
            Hi, I am Chloe! How may I assist you today?
          </div>
        ) : (
          <div />
        )}
        {isChat ? (
          <div />
        ) : (
          <img
            src={VirtualAssistant}
            alt="Chloe Icon"
            className="chatbot__launcher--img"
            onClick={openChat}
          />
        )}
        {isChat ? <ChatCanvas /> : <div />}
      </div>
    </div>
  );
};

export default Chatbot;
