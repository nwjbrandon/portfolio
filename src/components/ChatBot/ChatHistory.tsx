import React from 'react'
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

export interface ChatHistoryProps {
  messages: MessageProps[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
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
  return (
    <div className="chatbot__chathistory">
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