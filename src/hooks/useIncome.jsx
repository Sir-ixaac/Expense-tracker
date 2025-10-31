import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEYS } from "../utils/constants";

export const useIncomeStore = create(
  persist(
    (set) => ({
      income: [],

      addIncome: (item) => {
        const entry = { id: uuidv4(), ...item };
        set((s) => ({ income: [...s.income, entry] }));
        return entry;
      },

      updateIncome: (id, updates) =>
        set((s) => ({
          income: s.income.map((i) => (i.id === id ? { ...i, ...updates } : i)),
        })),

      removeIncome: (id) =>
        set((s) => ({ income: s.income.filter((i) => i.id !== id) })),

      clearAll: () => set({ income: [] }),
    }),
    {
      name: STORAGE_KEYS.INCOME,
    }
  )
);
