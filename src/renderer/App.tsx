import React from 'react';
import NavigationSidebar from './features/navigation/NavigationSidebar';
import ConversationList from './features/chat-list/ConversationList';
import ChatWindow from './features/chat-window/ChatWindow';
import SettingsView from './features/settings/SettingsView';
import { useChatStore } from './store/useChatStore';

function App() {
  const { currentView, setActiveConversationId } = useChatStore();

  return (
    <div className="flex h-screen w-screen overflow-hidden text-slate-900 bg-white">
      {/* Column 1: Navigation Sidebar */}
      <NavigationSidebar />

      {currentView === 'chats' ? (
        <>
          {/* Column 2: Conversation List */}
          <ConversationList onSelectConversation={setActiveConversationId} />

          {/* Column 3: Chat Window */}
          <ChatWindow />
        </>
      ) : (
        // Settings View covers the rest of the screen
        <SettingsView />
      )}
    </div>
  );
}

export default App;
