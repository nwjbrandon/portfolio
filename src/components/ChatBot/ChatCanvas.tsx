import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatHistory, { MessageProps } from './ChatHistory';
import './ChatBot.scss';

interface ChatCanvasProps {
  closeChat: () => void;
}

const ChatCanvas: React.FC<ChatCanvasProps> = ({ closeChat }) => {
  const [text, setText] = React.useState<string>('');
  const [messages, setMessages] = React.useState<MessageProps[]>([]);

  const handleSubmit = async (e: any) => {
    if (e.charCode === 13) {
      setMessages([
        ...messages,
        { message: text, user: 'user' },
        { message: 'I am currently under maintenance.', user: 'bot' }
      ]);
      setText('');
      e.preventDefault();
    }
  };
  return (
    <div
      className="chatbot__chatcanvas"
      onKeyPress={(e: React.KeyboardEvent) => handleSubmit(e)}
    >
      <ChatHeader closeChat={closeChat} />
      <ChatHistory messages={messages} />
      <ChatInput text={text} setText={setText} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatCanvas;
