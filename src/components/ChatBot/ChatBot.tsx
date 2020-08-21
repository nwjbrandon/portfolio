import React from 'react';
import MikuChatbot from 'assets/images/MikuChatbot.gif';

import './ChatCanvas';

import './ChatBot.scss';
import ChatCanvas from './ChatCanvas';

const Chatbot: React.FC = () => {
  const [isGretting, setIsGreeting] = React.useState<boolean>(true);
  const [isChat, setIsChat] = React.useState<boolean>(false);

  const openChat = () => {
    setIsGreeting(false);
    setIsChat(true);
  };

  const closeChat = () => {
    setIsChat(false);
  };

  return (
    <div>
      <div>
        {isGretting ? (
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
        {isChat ? <ChatCanvas closeChat={closeChat} /> : <div />}
      </div>
    </div>
  );
};

export default Chatbot;
