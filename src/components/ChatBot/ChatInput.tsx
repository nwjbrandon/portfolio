import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './ChatBot.scss';

interface ChatInputProps {
  text: string;
  setText: (text: string) => void;
  onClick: (e: React.MouseEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ text, setText, onClick }) => {
  return (
    <div className="chatbot__chatinput">
      <div className="chatbot__chatinput--wrapper">
        <TextareaAutosize
          maxRows={5}
          minRows={1}
          className="chatbot__chatinput--textarea"
          placeholder="Say Something"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="chatbot__chatinput--send" onClick={onClick}>
        <div className="chatbot__chatinput--tri-top" />
        <div className="chatbot__chatinput--tri-bot" />
      </div>
    </div>
  );
};

export default ChatInput;
