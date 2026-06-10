import React from 'react';

const ProfileInfoList: React.FC = () => {
  const info = [
    { label: '电子邮件', value: 'john.doe@example.com' },
    { label: '电话', value: '+86 138 0000 0000' },
    { label: '位置', value: '中国, 上海' },
    { label: '个人简介', value: '正在构建未来桌面通信应用。' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-800">个人信息</h2>
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {info.map((item) => (
            <div key={item.label} className="flex items-center p-4 hover:bg-slate-50 transition-colors">
              <span className="w-32 text-sm font-medium text-slate-50 0">{item.label}</span>
              <span className="text-sm text-slate-900 flex-grow truncate">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoList;
