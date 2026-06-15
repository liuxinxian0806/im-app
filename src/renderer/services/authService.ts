import { SmsSendParams, AuthResponse } from "../types/auth";
const API_BASE_URL = "/dev/api";
export const authService = {
  async sendSmsCode(params: SmsSendParams): Promise<AuthResponse<void>> {
    const response = await fetch(`${API_BASE_URL}/auth/sms/send`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(params)
    }); return response.json();
  },
  async loginWithCode(phone: string, code: string): Promise<AuthResponse<any>> {
    const response = await fetch(`${API_BASE_URL}/auth/phone/login`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone, code })
    }); return response.json();
  },
  async registerUser(params: any): Promise<AuthResponse<void>> {
    const response = await fetch(`${API_BASE_URL}/auth/registerUser`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(params)
    }); return response.json();
};
