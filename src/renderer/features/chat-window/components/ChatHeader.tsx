import React from 'react';
import { MoreVertical, Phone, Video } from 'lucide-react';

interface ChatHeaderProps {
  displayName: string;
  lastActive?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ displayName, lastActive }) => {
  return (
    <div className="h-[70px] bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-slate-200 mr-3" /> {/* Placeholder Avatar */}
        <div>
          <h3 className="font-semibold text-slate-900 leading-tight">{displayName}</h3>
          {lastActive && <p className="text-xs text-green-500 font-medium">{lastActive}</p>}
        </div>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <button className="hover:text-blue-500 transition-colors"><Phone size={20} /></button>
        <button className="hover:text-blue-500 transition-colors"><Video size={20} /></button>
        <div className="h-6 w-[1px] bg-slate-200 mx-1" />
        <button className="hover:text-blue-500 transition-colors"><MoreVertical size={20} /></button>
      </div>
    </div>
  );
};

export default ChatHeader;
