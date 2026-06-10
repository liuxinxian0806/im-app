import React from 'react';
import { useChatStore } from '../../../store/useChatStore';

const subModules = [
  { id: 'account', label: '账号' },
  { id: 'privacy', label: '隐私' },
  { id: 'security', label: '安全' },
  { id: 'notifications', label: '通知' },
] as const;

const ProfileSubNav: React.FC = () => {
  const { activeSubModule, setSubModule } = useChatStore();

  return (
    <div className="w-[200px] h-full bg-slate-50 border-r border-slate-200 p-4 space-y-2">
      {subModules.map((mod) => (
        <button
          key={mod.id}
          onClick={() => setSubModule(mod.id as any)}
          className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
            activeSubModule === mod.id 
              ? 'bg-blue-500 text-white font-medium' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {mod.label}
        </button>
      ))}
    </div>
  );
};

export default ProfileSubNav;
