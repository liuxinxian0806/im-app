import React from 'react';
import { Conversation } from '../../types/chat';
import ChatItem from './ChatItem';
import { DUMMY_CONVERSATIONS } from '../../utils/dummyData';

interface ConversationListProps {
  onSelectConversation: (id: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ onSelectConversation }) => {
  return (
    <div className="w-[350px] h-full bg-white border-r border-slate-200 flex flex-col overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Chats</h2>
        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-slate-100 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {DUMMY_CONVERSATIONS.map((conv) => (
          <ChatItem key={conv.id} conversation={conv} onClick={onSelectConversation} />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
