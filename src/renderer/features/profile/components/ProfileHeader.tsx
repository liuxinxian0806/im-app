import React from 'react';
import { User } from 'lucide-react';
import { useChatStore } from '../../../store/useChatStore';

const ProfileHeader: React.FC = () => {
  const { currentUserId } = useChatStore();
  
  return (
    <div className="p-8 border-b border-slate-200 bg-white flex items-center gap-6">
      <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-3xl font-bold text-blue-600 border-4 border-blue-100 shadow-sm">
        {currentUserId === 'me' ? 'JD' : '??'}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">John Doe</h1>
        <p className="text-slate-500">Software Engineer @ TechCorp</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
