import React from 'react';
import { User, Settings, Bell, Shield, Lock } from 'lucide-react';

const SettingsView: React.FC = () => {
  return (
    <div className="flex h-full bg-white">
      <div className="w-[200px] h-full bg-slate-50 border-r border-slate-200 p-4 space-y-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">Settings</div>
        <button className="w-full text-left px-4 py-2 rounded-lg text-sm transition-colors bg-blue-50 text-blue-600 font-medium flex items-center gap-3">
          <User size={18} /> Account
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg text-sm transition-colors text-slate-600 hover:bg-slate-100 flex items-center gap-3">
          <Settings size={18} /> Preferences
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg text-sm transition-colors text-slate-600 hover:bg-slate-100 flex items-center gap-3">
          <Bell size={18} /> Notifications
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg text-sm transition-colors text-slate-600 hover:bg-slate-100 flex items-center gap-3">
          <Shield size={18} /> Privacy
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg text-sm transition-colors text-slate-600 hover:bg-slate-100 flex items-center gap-3">
          <Lock size={18} /> Security
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-8">Settings</h1>
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2">Account Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-500">Email Address</label>
                <input 
                  type="email" 
                  readOnly 
                  value="john.doe@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none cursor-not-allowed" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-500">Username</label>
                <input 
                  type="text" 
                  readOnly 
                  value="John Doe" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none cursor-not-allowed" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
