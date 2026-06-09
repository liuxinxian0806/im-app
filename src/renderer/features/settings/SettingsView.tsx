import React from 'react';
import { User, Bell, Shield, Lock } from 'lucide-react';

const SettingsView: React.FC = () => {
  return (
    <div className="flex-grow h-full bg-white overflow-y-auto p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Settings</h1>
      
      <div className="max-w-2xl space-y-8">
        {/* Section: Profile */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <User size={20} /> Profile Settings
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
              <input type="text" readOnly value="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input type="email" readOnly value="john.doe@example.com" className="w-full bg-slate-50 border border-slate-<code>slate-200 rounded-lg px-4 py-2 text-sm outline-none cursor-not-allowed" />
            </div>
          </div>
        </section>

        {/* Section: Notifications */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Bell size={20} /> Notifications
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
             <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">Enable desktop notifications</span>
                <div className="w-10 h-5 bg-blue-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
             </div>
          </div>
        </section>

        {/* Section: Security */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Shield size={20} /> Security
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
             <button className="w-full text-left text-sm font-medium text-red-500 hover:text-red-700 transition-colors flex items-center gap-2">
                <Lock size={16} /> Logout from all devices
             </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsView;
