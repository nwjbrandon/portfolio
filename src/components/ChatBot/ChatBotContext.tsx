import React from 'react';
import { isAndroid, isIOS, isWinPhone } from 'react-device-detect';
import GetResponse from 'utils/Chatbot';
import { hotTextsList, MAX_HOT_TEXTS } from 'utils/Dataset';
import { MessageProps } from './ChatHistory';

// https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1
interface ChatBotContextProps {
  text: string;
  messages: MessageProps[];
  isGreeting: boolean;
  isChat: boolean;
  lines: number;
  hotTexts: [string, number][];
  setIsGreeting(_: boolean): void;
  setIsChat(_: boolean): void;
  onKeyDown(_: React.KeyboardEvent): void;
  onClick(_: React.MouseEvent): void;
  setText(_: string): void;
  closeChat(): void;
  openChat(): void;
  setHotTexts(_: [string, number][]): void;
  addMessage(msg: string, i: number): void;
}

const defaultContextProps: ChatBotContextProps = {
  text: '',
  messages: [],
  isGreeting: true,
  isChat: false,
  lines: 0,
  hotTexts: [],
  setIsGreeting: (_: boolean): void => {},
  setIsChat: (_: boolean): void => {},
  onKeyDown: (_: React.KeyboardEvent): void => {},
  onClick: (_: React.MouseEvent): void => {},
  setText: (_: string): void => {},
  closeChat: (): void => {},
  openChat: (): void => {},
  setHotTexts: (_: [string, number][]): void => {},
  addMessage: (_: string, __: number): void => {},
};

const ChatBotContext =
  React.createContext<ChatBotContextProps>(defaultContextProps);

const ChatBotProvider: React.FC = (props) => {
  const [text, setText] = React.useState<string>('');
  const [hotTexts, setHotTexts] = React.useState<[string, number][]>([]);
  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const [isGreeting, setIsGreeting] = React.useState<boolean>(true);
  const [isChat, setIsChat] = React.useState<boolean>(true);

  React.useEffect(() => {
    const shuffled = hotTextsList.sort(() => Math.round(Math.random()));
    setHotTexts(shuffled.slice(0, MAX_HOT_TEXTS));
    setMessages([
      {
        message:
          'Hi, I am Chloe! I can answer your questions about Brandon on his behalf.',
        user: 'bot',
        date: new Date(),
      },
    ]);
  }, []);

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
        addMessage(message, -1);
        e.preventDefault();
      }
    }
  };

  const onClick = async (e: React.MouseEvent) => {
    const message = trimMessage(text);
    if (message !== '') {
      await addMessage(message, -1);
      e.preventDefault();
    }
  };

  const trimMessage = (text: string) => text.replace(/^\s+|\s+$/g, '');

  const addMessage = async (message: string, hotTextResponseId: number) => {
    const userUtterance = { message, user: 'user', date: new Date() };
    setMessages([...messages, userUtterance]);
    setText('');
    const { botUtterance, nextHotTexts } = await GetResponse(
      message,
      hotTextResponseId
    );
    setMessages([...messages, userUtterance, botUtterance]);
    setHotTexts(nextHotTexts);
  };

  return (
    <ChatBotContext.Provider
      value={{
        text,
        hotTexts,
        setHotTexts,
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
        closeChat,
        addMessage,
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
