import React from 'react';
import { Conversation } from '../../types/chat';

interface ChatItemProps {
  conversation: Conversation;
  onClick: (id: string) => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ conversation, onClick }) => {
  return (
    <div
      onClick={() => onClick(conversation.id)}
      className="flex items-center p-3 cursor-pointer hover:bg-slate-100 transition-colors border-b border-slate-200"
    >
      <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
        <img 
          src={conversation.avatarUrl} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-3 flex-grow min-w-0">
        <h3 className="font-semibold text-slate-900 truncate">{conversation.displayName}</h3>
        <p className="text-sm text-slate-500 truncate">{conversation.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;
