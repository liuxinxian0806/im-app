import React from 'react';
import ProfileSubNav from './components/ProfileSubNav';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfoList from './components/ProfileInfoList';
import ProfileActions from './components/ProfileActions';

const ProfileView: React.FC = () => {
  return (
    <div className="flex h-full bg-white">
      {/* Column 1: Sub-navigation */}
      <ProfileSubNav />

      {/* Column 2: Main Content Area */}
      <div className="flex-grow overflow-y-auto">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfileInfoList />
          </div>
          <div className="space-y-8">
            <ProfileActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
