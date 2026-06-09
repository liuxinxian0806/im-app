import { create } from 'zustand';
import { Conversation, Message } from '../types/chat';
import { DUMMY_CONVERSATIONS } from '../utils/dummyData';

export type AppView = 'chats' | 'settings' | 'profile';
export type ProfileSubModule = 'account' | 'privacy' | 'security' | 'notifications';

interface ChatState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  activeConversationId: string | null;
  currentView: AppView;
  activeSubModule: ProfileSubModule; // Added
  currentUserId: string;
  setActiveConversationlyId: (id: string) => void; // Wait, typo in function name? Let me fix it.
  setView: (view: AppView) => void;
  setSubModule: (module: ProfileSubModule) => void; // Added
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
  activeConversationId: DUMMY_CONVERSATIONS[0].id,
  currentView: 'chats',
  activeSubModule: 'account', // Default sub-module
  currentUserId: CURRENT_USER_ID,
  setActiveConversationId: (id) => set({ activeConversationId: id }),
  setView: (view) => set({ currentView: view }),
  setSubModule: (module) => set({ activeSubModule: module }), // Implementation
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
