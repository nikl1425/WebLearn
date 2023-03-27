import { StateCreator } from "zustand";

export interface LayoutSlice  {
    sidebarOpen: boolean,
    setSidebarOpen: () => void
}

export const createLayoutSlice: StateCreator<LayoutSlice> = (set) => ({
    sidebarOpen: true,
    setSidebarOpen: () => set((state) => ({sidebarOpen: !state.sidebarOpen}))
})

