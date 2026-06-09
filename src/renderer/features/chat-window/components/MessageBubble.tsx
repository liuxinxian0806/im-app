import React from 'react';
import { Message } from "../../../types/chat"; '../../../../../types/</strong>chat';

interface MessageBubbleProps {
  message: Message;
  isMe: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isMe }) => {
  const timeStr = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (message.type === 'system') {
    return (
      <div className="flex justify-center my-4">
        <span className="bg-slate-200 text-slate-600 text-[11px] px-3 py-1 rounded-full font-medium">
          {message.content}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
      {!isMe && <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0 mb-1" />}
      <div
        className={`max-w-[70%] p-3 rounded-2xl shadow-sm text-sm ${
          isMe 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
        }`}
      >
        <p className="leading-relaxed">{message.content}</p>
        <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-blue-100' : 'text-slate-400'}`}>
          {timeStr}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
