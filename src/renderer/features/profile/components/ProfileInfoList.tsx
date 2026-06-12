import React from 'react';

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  onEdit?: () => void;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, onEdit }) => (
  <div 
    className={`flex items-center justify-between py-4 px-2 border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${onEdit ? 'cursor-pointer group' : ''}`}
    onClick={onEdit}
  >
    <span className="text-slate-500 text-sm font-medium">{label}</span>
    <div className="flex items-center gap-2 text-slate-900 text-base">
      {value}
      {onEdit && <span className="opacity-0 group:hover:opacity-100 text-blue-500 text-xs transition-opacity">编辑</span>}
    </div>
  </div>
);

interface ProfileInfoListProps {
  user: {
    avatarUrl: string;
    nickname: string;
    bibiId: string;
    gender: string;
    region: string;
    signature: string;
  };
}

const ProfileInfoList: React.FC<ProfileInfoListProps> = ({ user }) => {
  return (
    <div className="space-y-4">
      {/* Group 1: Identity/Avatar Information */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <InfoRow 
          label="头像" 
          value={
            <div className="flex items-center gap-2 group/item cursor-pointer" onClick={() => console.log('Change Avatar')}>
              <img src={user.avatarUrl} className="w-10 h-10 rounded-md object-cover border border-slate-200" />
              <span className="text-xs text-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity">更换</span>
            </div>
          } 
        />
        <InfoRow 
          label="昵称" 
          value={<span className="font-medium">{user.nickname}</span>} 
          onEdit={() => console.log('Edit Nickname')}
        />
        <InfoRow 
          label="BIBI号" 
          value={<span className="text-blue-600 font-medium">{user.bibiId}</span>} 
        />
      </div>

      {/* Group 2: Personal Details */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <InfoRow 
          label="性别" 
          value={<span className="text-slate-400">{user.gender || '请选择'}</span>} 
          onEdit={() => console.log('Edit Gender')}
        />
        <InfoRow 
          label="地区" 
          value={<span className="text-slate-400">{user.region || '请选择'}</span>} 
          onEdit={() => console.log('Edit Region')}
        />
        <InfoRow 
          label="个性签名" 
          value={<span className="text-slate-400 truncate max-w-[200px]">{user.signature || '暂无'}</span>} 
          onEdit={() => console.log('Edit Signature')}
        />
      </div>
    </div>
  );
};

export default ProfileInfoList;
