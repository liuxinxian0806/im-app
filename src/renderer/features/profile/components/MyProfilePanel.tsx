import React from 'react';
import { 
  User as UserIcon, 
  Wallet as WalletIcon, 
  Contact as ContactIcon, 
  Folder as FolderIcon, 
  Star as StarIcon, 
  Package as PackageIcon, 
  Briefcase as BriefcaseIcon,
  ClipboardList as ListIcon, 
  Settings as SettingsIcon, 
  QrCode as QrIcon,
  ChevronRight
} from 'lucide-react';

interface UserContext {
  avatarUrl: string;
  displayName: string;
  bibiId: string;
  region: string;
}

interface ListEntryProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ListEntry: React.FC<ListEntryProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 hover:bg-slate-50 active:bg-slate-100 transition-colors border-b border-slate-100 last:border-none group"
  >
    <div className="flex items-center gap-4">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <span className="text-slate-700 font-medium">{label}</span>
    </div>
    <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
  </button>
);

const MyProfilePanel: React.FC<{ user: UserContext }> = ({ user }) => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. TOP SECTION: Identity Header Group (Now with Arrow) */}
      <button
        className="w-full p-6 bg-gradient-to-r from-blue-50/50 to-transparent border-b border-slate-100 hover:bg-blue-50 transition-all group text-left flex items-center justify-between"
        onClick={() => console.log('Open Identity Detail')}
      >
        <div className="flex items-center gap-4">
          {/* Square Avatar with slight rounding */}
          <img 
            src={user.avatarUrl} 
            alt="Avatar" 
            className="w-16 h-16 rounded-md border border-slate-200 shadow-sm group-hover:scale-105 transition-transform object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">{user.displayName}</span>
            <span className="text-sm text-blue-600 font-medium">BIBI号: {user.bibiId}</span>
            <span className="text-xs text-slate-500">{user.region}</span>
          </div>
        </div>
        
        {/* The missing arrow for the top group */}
        <ChevronRight size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
      </button>

      {/* 2. MAIN LIST SECTION: All items with arrows */}
      <div className="flex flex-col py-2">
        <ListEntry 
          icon={<UserIcon size={20} />} 
          label="个人资料" 
          onClick={() => console.log('Open Profile')} 
        />
        <ListEntry 
          icon={<WalletIcon size={20} />} 
          label="我的钱包" 
          onClick={() => console.log('Open Wallet')} 
        />
        <ListEntry 
          icon={<ContactIcon size={20} />} 
          label="我的名片" 
          onClick={() => console.log('Open Business Card')} 
        />
        <ListEntry 
          icon={<FolderIcon size={
            20 
          }/>} 
          label="名片夹" 
          onClick={() => console.log('Open Card Folder')} 
        />
        <ListEntry 
          icon={<StarIcon size={20} />} 
          label="收藏" 
          onClick={() => console.log('Open Favorites')} 
        />
        <ListEntry 
          icon={<PackageIcon size={20} />} 
          label="我的货盘" 
          onClick={() => console.log('Open Cargo')} 
        />
        <ListEntry 
          icon={<BriefcaseIcon size={20} />} 
          label="我发布的招聘" 
          onClick={() => console.log('Open Recruitment')} 
        />
        <ListEntry 
          icon={<ListIcon size={20} />} 
          label="我的订单" 
          onClick={() => console.log('Open Orders')} 
        />
        <ListEntry 
          icon={<SettingsIcon size={ 20 
          }/>} 
          label="设置" 
          onClick={() => console.log('Open Settings')} 
        />
      </div>
    </div>
  );
};

export default MyProfilePanel;
