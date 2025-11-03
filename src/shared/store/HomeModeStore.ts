import { create } from 'zustand';

interface HomeModeState {
  currentMode: 'home' | 'products';
  setCurrentMode: (mode: 'home' | 'products') => void;
}

const useHomeModeStore = create<HomeModeState>((set) => ({
  currentMode: 'home',
  setCurrentMode: (mode) => set({ currentMode: mode }),
}));

export default useHomeModeStore;

