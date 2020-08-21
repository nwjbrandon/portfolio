import React from 'react';
import './ChatBot.scss';

interface ChatInputProps {
  text: string
  setText: (text:string) => void;
  handleSubmit: (e:React.MouseEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ text, setText, handleSubmit }) => {
  return (
    <div className="chatbot__chatinput">
      <div className="chatbot__chatinput--wrapper">
        <textarea
          rows={2}
          className="chatbot__chatinput--textarea"
          placeholder="Say Something"
          value={text} onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="chatbot__chatinput--send" onClick={handleSubmit}>
        <div className="chatbot__chatinput--tri-top" />
        <div className="chatbot__chatinput--tri-bot" />
      </div>
    </div>
  );
};

export default ChatInput;
