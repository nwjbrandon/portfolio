import React from 'react';
import MikuChatbot from 'assets/images/MikuChatbot.gif';
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
            Hi, I am Miku, Brandon&apos;s assistant! How may I assist you today?
          </div>
        ) : (
          <div />
        )}
        {isChat ? (
          <div />
        ) : (
          <img
            src={MikuChatbot}
            alt="Miku Icon"
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
