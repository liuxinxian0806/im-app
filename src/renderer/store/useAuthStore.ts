import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserInfo } from "../types/auth";
interface AuthState {
  user: UserInfo | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: UserInfo, token: string) => void;
  logout: () => void;
}
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null, accessToken: null, isAuthenticated: false,
      setAuth: (user, token) => set({ user, accessToken: token, isAuthenticated: true }),
      logout: () => set({ user: null, accessToken: null, isAuthenticated: false }),
    }),
    { name: "auth-storage", storage: createJSONStorage(() => localStorage) }
  )
);
