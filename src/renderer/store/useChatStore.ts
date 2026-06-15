import { create } from 'zustand';
import { Conversation, Message }	from '../types/chat';
import { DUMMY_CONVERSATIONS } from '../utils/dummyData';

export type AppView = 
  | 'chats' 
  | 'settings' 
  | 'profile'
  | 'my-wallet'
  | 'my-business-card'
  | 'my-card-folder'
  | 'my-favorites'
  | 'my-cargo'
  | 'my-recruitment'
  | 'my-orders' | 'login';

export type ProfileSubModule = 
  | 'account' 
  | 'privacy' 
  | 'security' 
  | 'notifications'
  | 'business-card'
  | 'card-int'
  | 'cargo'
  | 'recruitment'
  | 'orders';

interface ChatState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  activeConversationId: string | null;
  currentView: AppView;
  activeSubModule: ProfileSubModule;
  currentUserId: string;
  setActiveConversationId: (id: string) => void;
  setView: (view: AppView) => void;
  setSubModule: (module: ProfileSubModule) => void;
  addMessage: (conversationId: string, message: Omit<Message, 'id'>) => void;
}

export const CURRENT_USER_ID = 'me';

const initialMessages: Record<string, Message[]> = {
  '1': [
    {
      id: 'm1',
      conversationId: '1',
      senderId: 'u1',
      type: 'text',
      content: 'Hey! How are you doing today?',
      timestamp: Date.now(),
    },
  ],
};

export const useChatStore = create<ChatState>((set) => ({
  conversations: DUMMY_CONVERSATIONS,
  messages: initialMessages,
  activeConversationId: DUMMY_CONVERSATIONS[0]?.id || null,
  currentView: 'chats',
  activeSubModule: 'account',
  currentUserId: CURRENT_USER_ID,
  setActiveConversationId: (id) => set({ activeConversationId: id }),
  setView: (view) => set({ currentView: view as AppView }),
  setSubModule: (module) => set({ activeSubModule: module as ProfileSubModule }),
  addMessage: (conversationId, messageData) => 
    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: [
          ...(state.messages[conversationId] || []),
          { ...messageData, id: Math.random().toString(36).substring(2, 9) }
        ]
      }
    })),
}));
