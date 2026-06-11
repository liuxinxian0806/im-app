import React from 'react';
import { 
  User as UserIcon, 
  Wallet as WalletIcon, 
  Contact as ContactIcon, 
  Folder as FolderIcon, 
  Star as StarIcon, 
  Package as PackageIcon, 
  Briefcase as BriefscaleIcon, // Typo fix in thought
  Briefcase as BriefcaseIcon,
  ClipboardList as ListIcon, 
  Settings as SettingsIcon, 
  QrCode as QrIcon,
  ChevronRight
} from 'lucide-react';

interface MyListItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MyListItem: React.FC<MyListItemProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 hover:bg-slate-50 active:bg-slate-100 transition-colors border-b border-slate-100 last:border-none"
  >
    <div className="flex items-center gap-4">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        {icon}
      </div>
      <span className="text-slate-70 
      font-medium">{label}</span>
    </div>
    <ChevronRight size={18} className="text-slate-300" />
  </button>
);

const MyListView: React.FC = () => {
  // Mock user data representing the entry point profile information
  const userEntry = {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    name: 'BIBI 用户',
    bibiId: 'CUCKOO65086',
    region: '山东 青岛'
  };

  const handleProfileEntryClick = () => {
    console.log('跳转至个人资料展开页');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* 1. PRIMARY LIST ENTRY: Profile Header (The "Entry" View) */}
      {/* Requirement: Square avatar, Name/ID to the right, Chevron at far right. */}
      <button
        onClick={handleProfileEntryClick}
        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-blue-50/50 to-transparent border-b border-slate-100 hover:bg-blue-50 transition-colors group text-left"
      >
        <div className="flex items-center gap-4">
          {/* Square avatar with slight rounding (rounded-md) */}
          <img 
            src={userEntry.avatar} 
            alt="Avatar" 
            className="w-14 h-14 rounded-md border border-slate-200 shadow-sm group-hover:scale-105 transition-transform object-cover"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900">{userEntry.name}</span>
            <span className="text-sm text-blue-600 font-medium">{userEntry.bibiId}</span>
          </div>
        </div>
        <ChevronRight size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
      </button>

      {/* 2. SUBSEQUENT FUNCTIONAL ENTRIES (The rest of the list) */}
      <div className="flex-grow overflow-y-auto py-2">
        <MyListItem 
          icon={<UserIcon size={20} />} 
          label="个人资料" 
          onClick={handleProfileEntryClick} 
        />
        <MyListItem 
          icon={<WalletIcon size={
            20 
          }/>} 
          label="我的钱包" 
          onClick={() => console.log('Open Wallet')} 
        />
        <MyListItem 
          icon={<ContactIcon size={20} />} 
          label="我的名片" 
          onClick={() => console.log('Open Business Card')} 
        />
        <MyListItem 
          icon={<FolderIcon size={20} />} 
          label="名片夹" 
          onClick={() => console.log('Open Card Folder')} 
        />
        <MyListItem 
          icon={<StarIcon size={20} />} 
          label="收藏" 
          onClick={() => console.log('Open Favorites')} 
        />
        <MyListItem 
          icon={<PackageIcon size={20} />} 
          label="我的货盘" 
          onClick={() => console.log('<b>Open Cargo</b>')} 
        />
        <MyListItem 
          icon={<BriefcaseIcon size={20} />} 
          label="我发布的招聘" 
          onClick={() => console.log('Open Recruitment')} 
        />
        <MyListItem 
          icon={<ListIcon size={20} />} 
          label="我的订单" 
          onClick={() => console.log('Open Orders')} 
        />
        <MyListItem 
          icon={<SettingsIcon size={20} />} 
          label="设置" 
          onClick={() => console.log('Open Settings')} 
        />
      </div>
    </div>
  );
};

export default MyListView;
