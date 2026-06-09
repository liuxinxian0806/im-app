import React from 'react';
import NavigationSidebar from './features/navigation/NavigationSidebar';
import ConversationList from './features/chat-list/ConversationList';
import ChatWindow from './features/chat-window/ChatWindow';
import SettingsView from './features/settings/SettingsView';
import ProfileView from './features/profile/ProfileView';
import { useChatStore } from './store/useChatStore';

function App() {
  const { currentView, setActiveConversationId } = useChatStore();

  return (
    <div className="flex h-screen w-screen overflow-hidden text-slate-900 bg-white">
      <NavigationSidebar />
      {currentView === 'chats' ? (
        <>
          <ConversationList onSelectConversation={setActiveConversationId} />
          <ChatWindow />
        </>
      ) : currentView === 'profile' ? (
        <ProfileView />
      ) : (
        <SettingsView />
      )}
    </div>
  );
}

export default App;
