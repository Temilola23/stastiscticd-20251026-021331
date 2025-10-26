import { create } from "zustand"

interface DataStore {
  data: number[]
  setData: (data: number[]) => void
  clearData: () => void
}

export const useDataStore = create<DataStore>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  clearData: () => set({ data: [] }),
}))
