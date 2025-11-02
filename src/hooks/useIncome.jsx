import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEYS } from "../utils/constants";

export const useIncomeStore = create(
  persist(
    (set) => ({
      income: [],

      addIncome: (income) => {
        const item = { id: uuidv4(), ...income };
        set((s) => ({ income: [...s.income, item] }));
        return item;
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
