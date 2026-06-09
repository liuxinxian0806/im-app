import { Conversation } from "../types/chat";

export const DUMMY_CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    participantId: "u1",
    displayName: "Alice Smith",
    avatarUrl: "https://i.pravatar.cc/150?u=alice",
    lastMessage: "Hey! How are you doing today?",
    unreadCount: 2,
    updatedAt: Date.now(),
  },
  {
    id: "2",
    participantId: "u2",
    displayName: "Bob Johnson",
    avatarUrl: "https://i.pravatar.cc/150?u=bob",
    lastMessage: "Did you see the latest update?",
    unreadCount: 0,
    updatedAt: Date.now() - 3600000,
  },
  {
    id: "3",
    participantId: "u3",
    displayName: "Design Team",
    avatarUrl: "https://i.pravatar.cc/150?u=design",
    lastMessage: "The new mockups are ready for review.",
    unreadCount: 5,
    updatedAt: Date.now() - 86400000,
  },
  {
    id: "4",
    participantId: "u4",
    displayName: "Charlie Brown",
    avatarUrl: "https://i.pravatar.cc/150?u=charlie",
    lastMessage: "Let me know when you are free.",
    unreadCount: 0,
    updatedAt: Date.now() - 172800000,
  },
];
