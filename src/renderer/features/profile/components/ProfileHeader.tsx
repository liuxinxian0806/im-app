import React from 'react';
import { QrCode } from 'lucide-react';

interface ProfileHeaderProps {
  user: {
    avatarUrl: string;
    displayName: string;
    bibiId: string;
    region: string;
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="relative p-8 bg-gradient-to-b from-blue-50 to-white border-b border-slate-100 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="flex items-center justify-between relative z-10">
        {/* Profile Info Area */}
        <div className="flex items-center gap-6">
          {/* Square Avatar with slight rounding (rounded-md) as per requirement */}
          <div className="relative group cursor-pointer">
            <img 
              src={user.avatarUrl} 
              alt="Avatar" 
              className="w-20 h-20 rounded-md border-2 border-white shadow-sm group-hover:ring-2 group-hover:ring-blue-200 transition-all object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">{user.displayName}</h2>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-blue-600 font-semibold">BIBI号: {user.bibiId}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">{user.region}</span>
            </div>
          </div>
        </div>

        {/* QR Code Button at top right */}
        <button 
          className="p-3 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md rounded-xl transition-all text-slate-600 border border-scale-100"
          onClick={() => console.log('Show QR Code')}
        >
          <QrCode size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
