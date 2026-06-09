import React from 'react';
import MessageBubble from './MessageBubble';
import { useChatStore } from "../../../store/useChatStore"; '../../../../../store/useChatStore';

const MessageFeed: React.FC = () => {
  const { activeConversationId, messages } = useChatStore();
  const currentUserId = 'me'; // In a real app, this comes from the store

  const currentMessages = activeConversationId ? (messages[activeConversationId] || []) : [];

  if (!activeConversationId) {
    return (
      <div className="flex-grow flex items-center justify-center text-slate-400">
        Select a conversation to start chatting
      </div>
    );
  }

  return (
    <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50">
      <div className="flex justify-center">
        <span className="bg-slate-200 text-slate-500 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-medium">
          Today
        </span>
      </div>

      {currentMessages.length === 0 ? (
        <div className="text-center text-slate-400 text-sm mt-10">
          No messages yet. Start the conversation!
        </div>
      ) : (
        currentMessages.map((msg) => (
          <MessageBubble 
            key={msg.id} 
            message={msg} 
            isMe={msg.senderId === currentUserId} 
          />
        ))
      )}
    </div>
  );
};

export default MessageFeed;
