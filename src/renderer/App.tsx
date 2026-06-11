import React from 'react';
import NavigationSidebar from './features/navigation/NavigationSidebar';
import ConversationList from './features/chat-list/ConversationList';
import ChatWindow from './features/chat-window/ChatWindow';
import SettingsView from './features/settings/SettingsView';
import ProfileView from './features/profile/ProfileView';
import { useChatStore } from './store/useChatStore';

// Placeholder component for all the new modules to avoid broken imports during routing setup
const PlaceholderView = ({ name }: { name: string }) => (
  <div className="flex flex-grow items-center justify-center bg-slate-50 text-slate-400 text-2xl font-bold">
    {name} Module Content Coming Soon...
  </div>
);

function App() {
  const { currentView, setActiveConversationId, setView } = useChatStore();

  // Routing Logic based on AppView
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
      case 'my-wallet':
      case 'my-business-card':
      case 'my-card-folder':
      case 'my-favorites':
      case 'my-cargo':
      case 'my-recruitment':
      case 'my-orders':
        // In a real app, these would be different components. 
        // For now, we use Placeholders to ensure the routing works and is testable.
        return <PlaceholderView name={currentView.replace('my-', '').toUpperCase()} />;
      default:
        return <div className="p-4 text-red-500">Unknown View: {currentView}</div>;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden text-slate-900 bg-white">
      <NavigationSidebar />
      {renderContent()}
    </div>
  );
}

export default App;
