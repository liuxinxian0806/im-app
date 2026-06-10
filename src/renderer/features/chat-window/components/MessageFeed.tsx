import React from 'react';
import { useChatStore } from "../../../store/useChatStore";
import MessageBubble from './MessageBubble';

const MessageFeed: React.FC = () => {
  const { activeConversationId, messages } = useChatStore();
  const currentMessages = activeConversationId ? (messages[activeConversationId] || []) : [];

  return (
    <div className="flex-grow overflow-y-auto p-4 space-y-4">
      {currentMessages.length > 0 ? (
        currentMessages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} isMe={msg.senderId === 'me'} />
        ))
      ) : (
        <div className="h-full flex items-center justify-center text-slate-40 0 text-sm">
          暂无消息，开始聊天吧！
        </div>
      )}
    </div>
  );
};

export default MessageFeed;
