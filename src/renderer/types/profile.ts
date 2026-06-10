export type ProfileSubModule = 'account' | 'privacy' | 'security' | 'notifications';

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  phone: string;
  bio: string;
  status: 'online' | 'offline' | 'busy';
}
