
import {create} from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_KEYS } from "../utils/constants";

export const useExpensesStore = create(
  persist(
    (set) => ({
      expenses: [],

      addExpense: (expense) => {
        const item = { id: uuidv4(), ...expense };
        set((s) => ({ expenses: [...s.expenses, item] }));
        return item;
      },

      updateExpense: (id, updates) => {
        set((s) => ({
          expenses: s.expenses.map((e) => (e.id === id ? { ...e, ...updates } : e)),
        }));
      },

      removeExpense: (id) => {
        set((s) => ({ expenses: s.expenses.filter((e) => e.id !== id) }));
      },

      clearAll: () => set({ expenses: [] }),
    }),
    {
      name: STORAGE_KEYS.EXPENSES,
    }
  )
);
