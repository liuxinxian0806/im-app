export type SmsType = 'login' | 'bind' | 'resetPassword' | 'register';

export interface SmsSendParams {
  phone: string;
  type: SmsType;
}

export interface AuthResponse<T = any> {
  msg: string;
  code: number;
  data?: T;
}

export interface LoginResponseData {
  userId: number;
  nickname: string;
  avatar: string | null;
  phone: string;
  userSig: string | null;
  id_token: string | null;
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  scope: string | null;
  imAccount: string;
  imSign: string;
  openId: string | null;
}

export interface RegisterParams {
  phone: string;
  code: string;
  nickname: string;
  avatar: string;
  province: string;
  city: string;
}

export interface UserInfo {
  userId: number;
  nickname: string;
  avatar: string | null;
  phone: string;
}
