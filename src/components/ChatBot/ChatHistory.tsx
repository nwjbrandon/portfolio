import React from 'react'
import { useChatBot } from './ChatBotContext';
import './ChatBot.scss'

export interface MessageProps {
  message: string;
  user: string;
}

const Message: React.FC<MessageProps> = ({ message, user }) => {
  return (
    <div className={`chatbot__chathistory--${user}`}>
      <div className="chatbot__chathistory--message">
        { message }
      </div>
    </div>
  )
}

const ChatHistory: React.FC = () => {
  const [height, setHeight] = React.useState<number>(window.innerHeight);
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  const { messages, lines }  = useChatBot();

  const chatWindow = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (chatWindow === null || chatWindow.current === null) return
    const element: HTMLDivElement = chatWindow.current;
    const childNodes = element.childNodes;
    if (childNodes.length !== 0) {
      const lastChild = childNodes[childNodes.length - 1] as HTMLDivElement; 
      lastChild.scrollIntoView();
    }
  })

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chatBotHeight = width < 400 ? height : 500;
  const maxLines = lines > 5 ? 5 : lines
  const heightInPx = chatBotHeight - maxLines * 15 - 85;
  return (
    <div className="chatbot__chathistory" style={{ height: `${heightInPx}px`}}>
      <div ref={chatWindow}>
      {
        messages.map((chat, i) => (
          <Message key={i} message={chat.message} user={chat.user} />
        ))
      }
      </div>
    </div>
  )
}

export default ChatHistory;