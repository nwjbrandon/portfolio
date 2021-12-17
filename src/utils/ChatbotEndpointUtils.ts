import axios from 'axios';

const ChatbotEndpoint = axios.create({
  baseURL: process.env.REACT_APP_CHATBOT_API
});

export default ChatbotEndpoint;