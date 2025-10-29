
import {create} from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEYS } from "../utils/constants";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      signup: (name, email, password) => {
        const user = { id: uuidv4(), name, email, password };
        set({ user, isAuthenticated: true });
      },
      login: (email, password) => {
        const state = get();
        const user = state.user;
        if (user && user.email === email && user.password === password) {
          set({ isAuthenticated: true });
          return { ok: true };
        }
        return { ok: false, message: "Invalid credentials" };
      },
      logout: () => {
        set({ isAuthenticated: false });
      },
    }),
    {
      name: STORAGE_KEYS.AUTH,
    }
  )
);
