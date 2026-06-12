import React from 'react';
import ProfileSubNav from './components/ProfileSubNav';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfoList from './components/ProfileInfoList';

// Actions component for the bottom area
const ProfileActions: React.FC = () => (
  <div className='mt-8 flex justify-center'>
    <button 
      className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-12 rounded-full shadow-lg transition-all transform active:scale-95'
      onClick={() => console.log('Edit Profile clicked')}
    >
      编辑资料
    </button>
  </div>
);

const ProfileView: React.FC = () => {
  // The single source of truth for the user profile data in this module
  const userContext = {
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    displayName: 'BIBI 用户',
    bibiId: 'CUCKOO65086',
    region: '山东 青岛',
    gender: '男',
    signature: '这是我的个性签名'
  };

  return (
    <div className='flex h-full w-full bg-slate-50 overflow-hidden'>
      {/* Tier 2: Contextual Sub-Navigation - Passing the identity data */}
      <ProfileSubNav 
        user={{
          avatarUrl: userContext.avatarUrl,
          displayName: userContext.displayName,
          bibiId: userContext.bibiId
        }} 
      />

      {/* Tier 3: Main Content Area - The Profile Detail View */}
      <div className='flex-grow overflow-y-auto bg-white'>
        {/* Top Section: Profile Header (Avatar, Name, ID and QR Code) */}
        <ProfileHeader 
          user={{
            avatarUrl: userContext.avatarUrl,
            displayName: userContext.displayName,
            bibiId: userContext.bibiId,
            region: userContext.region
          }} 
        />

        {/* Information & Action Section */}
        <div className='max-w-4xl mx-auto w-full py-8 px-6 space-y-8'>
          {/* The Information List (Key-Value pairs as per MD) */}
          <ProfileInfoList 
            user={{
              avatarUrl: userContext.avatarUrl,
              nickname: userContext.displayName,
              bibiId: userContext.bibiId,
              gender: userContext.gender,
              region: userContext.region,
              signature: userContext.signature
            }}
          />

          {/* Action Area (Edit Button) */}
          <ProfileActions />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
