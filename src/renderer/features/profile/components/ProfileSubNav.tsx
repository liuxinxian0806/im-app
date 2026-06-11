import React from 'react';
import { useChatStore } from '../../../store/useChatStore';
import { 
  Contact, 
  Folder, 
  Package, 
  Briefcase, 
  ClipboardList,
  ChevronRight
} from 'lucide-react';

interface SubModuleItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: (id: string) => void;
  isActive: boolean;
}

const SubModuleItem: React.FC<SubModuleItemProps> = ({ id, label, icon, onClick, isActive }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all group ${
      isActive 
        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600 font-semibold' 
        : 'text-slate-600 hover:bg-slate-50 border-r-4 border-transparent'
    }`}
  >
    <div className="flex items-center gap-3">
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
    <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
  </button>
);

interface ProfileSubNavProps {
  user?: {
    avatarUrl: string;
    displayName:
      string;
    bibiId: string;
  };
}

const ProfileSubNav: React.FC<ProfileSubNavProps> = ({ user }) => {
  const { activeSubModule, setSubModule } = useChatStore();

  const subModules = [
    { id: 'business-card', label: '我的名片', icon: <Contact size={18} /> },
    { id: 'card-int', label: '名片夹', icon: <Folder size={18} /> },
    { id: 'cargo', label: '我的货盘', icon: <Package size={18} /> },
    { id: 'recruitment', label: '我发布的招聘', icon: <Briefcase size={18} /> },
    { id: 'orders', label: '我的订单', icon: <ClipboardList size={18} /> },
  ] as const;

  return (
    <nav className="w-[240px] h-full bg-slate-50 border-r border-slate-200 flex flex-col py-4 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/* Top Identity Summary Section */}
      {user && (
        <div className="px-6 py-6 border-b border-slate-20	m-0 flex items-center gap-3">
          <img 
            src={user.avatarUrl} 
            alt="User" 
            className="w-10 h-10 rounded-md border border-slate-200 object-cover"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-slate-900 truncate">{user.displayName}</span>
            <span className="text-xs text-blue-600 font-medium truncate">{user.bibiId}</span>
          </div>
        </div>
      )}

      <div className="px-6 mb-4 mt-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">个人业务</h3>
      </div>
      <div className="flex flex-col">
        {subModules.map((mod) => (
          <SubModuleItem
            key={mod.id}
            id={mod.id}
            label={mod.label}
            icon={mod.icon}
            isActive={activeSubModule === mod.id}
            onClick={(id) => setSubModule(id as any)}
          />
        ))}
      </div>
    </nav>
  );
};

export default ProfileSubNav;
