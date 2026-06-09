import { create } from 'zustand';
import { Conversation, Message } from '../types/chat';
import { DUMMY_CONVERSATIONS } from '../utils/dummyData';

export type AppView = 'chats' | 'settings';

interface ChatState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  activeConversationId: string | null;
  currentView: AppView;
  currentUserId: string;
  setActiveConversationId: (id: string) => void;
  setView: (view: AppView) => void;
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
      timestamp: Date.now() - 100000,
    },
    {
      id: 'm2',
      conversationId: '1',
      senderId: 'me',
      type: 'text',
      content: 'I am doing great, thanks for asking! How about you?',
      timestamp: Date.now() - 50000,
    },
  ],
};

export const useChatStore = create<ChatState>((set) => ({
  conversations: DUMMY_CONVERSATIONS,
  messages: initialMessages,
  activeConversationId: DUMMY_CONVERSATIONS[0].id,
  currentView: 'chats',
  currentUserId: CURRENT_USER_ID,
  setActiveConversationId: (id) => set({ activeConversationId: id }),
  setView: (view) => set({ currentView: view }),
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
