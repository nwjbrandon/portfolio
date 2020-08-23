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

  const onKeyDown = async (e: React.KeyboardEvent) => {
    const message = text.replace(/^\s+|\s+$/g, '');
    if (e.charCode === 13 && !e.shiftKey && message !== '') {
      setMessages([
        ...messages,
        { message, user: 'user' },
        { message: 'I am currently under maintenance.', user: 'bot' }
      ]);
      setText('');
      e.preventDefault();
    }
  };

  const onClick = async (e: React.MouseEvent) => {
    const message = text.replace(/^\s+|\s+$/g, '');
    if (message !== '') {
      setMessages([
        ...messages,
        { message, user: 'user' },
        { message: 'I am currently under maintenance.', user: 'bot' }
      ]);
      setText('');
      e.preventDefault();
    }
  };
  return (
    <div className="chatbot__chatcanvas" onKeyPress={onKeyDown}>
      <ChatHeader closeChat={closeChat} />
      <ChatHistory messages={messages} />
      <ChatInput text={text} setText={setText} onClick={onClick} />
    </div>
  );
};

export default ChatCanvas;
