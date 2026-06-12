export type ProfileSubModule = 'account' | 'privacy' | 'security' | 'notifications' | 'business-card' | 'card-int' | 'cargo' | 'recruitment' | 'orders';

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  phone: string;
  bio: string;
  status: 'online' | 'offline' | 'busy';
}
