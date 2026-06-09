import React from 'react';
import { User, Users, MessageSquare, Folder, Settings } from 'lucide-react';
import { useChatStore } from '../../store/useChatStore';

const NavigationSidebar: React.FC = () => {
  const { setView } = useChatStore();

  const navItems = [
    { icon: <User size={24} />, label: 'Profile', id: 'profile' },
    { icon: <Users size={24} />, label: 'Contacts', id: 'contacts' },
    { icon: <MessageSquare size={24} />, label: 'Chats', id: 'chats', view: 'chats' as const },
    { icon: <Folder size={24} />, label: 'Files', id: 'files' },
    { icon: <Settings size={24} />, label: 'Settings', id: 'settings', view: 'settings' as const },
  ];

  return (
    <div className="w-[60px] h-full bg-slate-900 flex flex-col items-center py-4 gap-8 text-slate-400">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => item.view && setView(item.view)}
          className="p-2 rounded-lg transition-colors hover:bg-slate-800 hover:text-white"
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default NavigationSidebar;
