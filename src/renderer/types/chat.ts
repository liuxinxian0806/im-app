export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export type MessageType = 'text' | 'image' | 'system';

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  type: MessageType;
  content: string;
  timestamp: number;
}

export interface Conversation {
  id: string;
  participantId: string;
  displayName: string;
  avatarUrl: string;
  lastMessage: string;
  unreadCount: number;
  updatedAt: number;
}
