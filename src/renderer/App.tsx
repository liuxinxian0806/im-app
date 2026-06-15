import React, { useEffect } from 'react';
import NavigationSidebar from './features/navigation/NavigationSidebar';
import ConversationList from './features/chat-list/ConversationList';
import ChatWindow from './features/chat-window/ChatWindow';
import SettingsView from './features/settings/SettingsView';
import ProfileView from './features/profile/ProfileView';
import { AuthPage } from './features/auth/pages/AuthPage';
import { useChatStore } from './store/useChatStore';
import { useAuthStore } from './store/useAuthStore';

const PlaceholderView = ({ name }: { name: string }) => (
  <div className='flex flex-grow items-center justify-center bg-slate-50 text-slate-400 text-2xl font-bold'>
    {name} Module Content Coming Soon...
  </div>
);

function App() {
  const { currentView, setActiveConversationId, setView } = useChatStore();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      setView('chats');
    } else {
      setView('login');
    }
  }, [isAuthenticated, setView]);

  const renderContent = () => {
    switch (currentView) {
      case 'chats':
        return (
          <>
            <ConversationList onSelectConversation={setActiveConversationId} />
            <ChatWindow />
          </>
        );
      case 'profile':
        return <ProfileView />;
      case 'settings':
        return <SettingsView />;
      case 'login':
        return <AuthPage />;
      default:
        return <PlaceholderView name={currentView.replace('my-', '').toUpperCase()} />;
    }
  };

  return (
    <div className='flex h-screen w-screen overflow-hidden text-slate-900 bg-white'>
      <NavigationSidebar />
      {renderContent()}
    </div>
  );
}

export default App;
