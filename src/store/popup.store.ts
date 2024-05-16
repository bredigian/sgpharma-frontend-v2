import { create } from 'zustand';

interface IPopupStore {
  showPopup: boolean;
  hide: () => void;
}

export const usePopup = create<IPopupStore>((set) => ({
  showPopup: true,
  hide: () => set(() => ({ showPopup: false })),
}));
