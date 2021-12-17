import React from 'react';
import { isAndroid, isIOS, isWinPhone } from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';
import ChatbotEndpoint from 'utils/ChatbotEndpointUtils';
import { MessageProps } from './ChatHistory';

// https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1
interface ChatBotContextProps {
  text: string;
  messages: MessageProps[];
  isGreeting: boolean;
  isChat: boolean;
  lines: number;
  setIsGreeting(_: boolean): void;
  setIsChat(_: boolean): void;
  onKeyDown(_: React.KeyboardEvent): void;
  onClick(_: React.MouseEvent): void;
  setText(_: string): void;
  closeChat(): void;
  openChat(): void;
}

const defaultContextProps: ChatBotContextProps = {
  text: '',
  messages: [],
  isGreeting: true,
  isChat: false,
  lines: 0,
  setIsGreeting: (_: boolean): void => {},
  setIsChat: (_: boolean): void => {},
  onKeyDown: (_: React.KeyboardEvent): void => {},
  onClick: (_: React.MouseEvent): void => {},
  setText: (_: string): void => {},
  closeChat: (): void => {},
  openChat: (): void => {}
};

const ChatBotContext = React.createContext<ChatBotContextProps>(
  defaultContextProps
);

const ChatBotProvider: React.FC = props => {
  const userId = uuidv4();
  const [text, setText] = React.useState<string>('');
  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const [isGreeting, setIsGreeting] = React.useState<boolean>(true);
  const [isChat, setIsChat] = React.useState<boolean>(false);

  const openChat = () => {
    setIsGreeting(false);
    setIsChat(true);
  };

  const closeChat = () => {
    setIsChat(false);
  };

  const onKeyDown = async (e: React.KeyboardEvent) => {
    const message = trimMessage(text);
    if (!(isAndroid || isIOS || isWinPhone)) {
      if (e.charCode === 13 && !e.shiftKey && message !== '') {
        addMessage(message);
        e.preventDefault();
      }
    }
  };

  const onClick = async (e: React.MouseEvent) => {
    const message = trimMessage(text);
    if (message !== '') {
      await addMessage(message);
      e.preventDefault();
    }
  };

  const trimMessage = (text: string) => text.replace(/^\s+|\s+$/g, '');

  const addMessage = async (message: string) => {
    const userUtterance = { message, user: 'user', date: new Date() };
    setMessages([
      ...messages,
      userUtterance,
    ]);    
    setText('');
    try {
      const { data } = await ChatbotEndpoint.post("/webhooks/rest/webhook", {message, "sender": userId});
      const botUtterances = await data.map((message: any) => ({ message: message.text, user: 'bot', date: new Date()}))
      setMessages([
        ...messages,
        userUtterance,
        ...botUtterances
      ]);
    } catch (e) {
      console.error(e);
      setMessages([
        ...messages,
        userUtterance,
        {
          message: 'I am currently under maintenance.',
          user: 'bot',
          date: new Date()
        }
      ]);     

    }

  };

  return (
    <ChatBotContext.Provider
      value={{
        text,
        messages,
        isGreeting,
        isChat,
        lines: text.split('\n').length,
        setIsGreeting,
        setIsChat,
        onKeyDown,
        onClick,
        setText,
        openChat,
        closeChat
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useChatBot = () => {
  const context = React.useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error(`useChatBot must be used within a ChatBotProvider`);
  }
  return context;
};

export { ChatBotProvider, useChatBot };
