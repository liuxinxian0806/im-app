import React from 'react';
import ChatHeader from './components/ChatHeader';
import MessageFeed from './components/MessageFeed';
import InputArea from './components/InputArea';
import { useChatStore } from "../../store/useChatStore"; '../../../../../store/useChatStore';

const ChatWindow: React.FC = () => {
  const { activeConversationId, conversations } = useChatStore();
  
  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId
  );

  if (!activeConversation) {
    return (
      <div className="flex-grow flex items-center justify-center bg-slate-50 text-slate-400">
        Select a conversation to start chatting
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col h-full bg-white overflow-hidden">
      <ChatHeader displayName={activeConversation.displayName} />
      <MessageFeed />
      <InputArea />
    </div >
  );
};

export default ChatWindow;
