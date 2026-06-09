import React from 'react';

const ProfileInfoList: React.FC = () => {
  const info = [
    { label: 'Email', value: 'john.doe@example.com' },
    { label: 'Phone', value: '+1 (555) 000-1234' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Bio', value: 'Building the future of desktop communication.' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-800">Personal Information</h2>
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {info.map((item) => (
            <div key={item.label} className="flex items-center p-4 hover:bg-slate-50 transition-colors">
              <span className="w-32 text-sm font-medium text-slate-500">{item.label}</span>
              <span className="text-sm text-slate-900 flex-grow truncate">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoList;
