import React from 'react';
import TimeAgo from 'react-timeago';
import { useWindow } from 'contexts/WindowContext';
import { useChatBot } from './ChatBotContext';
import './ChatBot.scss';

export interface MessageProps {
  message: string;
  user: string;
  date: Date;
}

const Message: React.FC<MessageProps> = ({ message, user, date }) => {
  return (
    <div className={`chatbot__chathistory--${user}`}>
      <div className="chatbot__chathistory--message">
        <div>{message}</div>
        <div className="chatbot__chathistory--timestamp">
          <TimeAgo date={date} />
        </div>
      </div>
    </div>
  );
};

const ChatHistory: React.FC = () => {
  const { height, width } = useWindow();
  const { messages, lines } = useChatBot();

  const chatWindow = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (chatWindow === null || chatWindow.current === null) return;
    const element: HTMLDivElement = chatWindow.current;
    element.scrollIntoView({ behavior: 'smooth' });
  });

  const chatBotHeight = width < 350 ? height : 450;
  const maxLines = lines > 5 ? 5 : lines;
  const heightInPx = chatBotHeight - maxLines * 15 - 85;
  return (
    <div className="chatbot__chathistory" style={{ height: `${heightInPx}px` }}>
      <div>
        {messages.map((chat, i) => (
          <Message
            key={i}
            message={chat.message}
            date={chat.date}
            user={chat.user}
          />
        ))}
      </div>
      <div ref={chatWindow} />
    </div>
  );
};

export default ChatHistory;
