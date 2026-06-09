import React from 'react';
import { Edit, LogOut, ShieldAlert } from 'lucide-react';

const ProfileActions: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Account Actions</h2>
      <button className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-100">
        <Edit size={18} /> Edit Profile
      </button>
      <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2.5 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors border border-red-100">
        <ShieldAlert size={18} /> Security Audit
      </button>
      <button className="w-full flex items-center justify-center gap-2 bg-slate-50 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors border border-slate-200">
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
};

export default ProfileActions;
