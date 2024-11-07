import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IBL {
  numero: string;
  montant: string;
  option: string;
  borlette: string;
}

interface IPlay {
  Tirage: string[];
  Borlette: IBL[];
  Lotto3: IBL[];
  Lotto4: IBL[];
  Lotto5: IBL[];
  Mariage: IBL[];
  MariageAutomatic: string[];
  MontantAutomatic: string[];
  Reload: string;
  addReload: () => void;
  addMariageAutomatic: (newMa: string[]) => void;
  addMontantAutomatic: (newMo: string[]) => void;
  addBorlette: (newBorlette: IBL[]) => void;
  addLotto3: (newLotto3: IBL[]) => void;
  addLotto4: (newLotto4: IBL[]) => void;
  addLotto5: (newLotto5: IBL[]) => void;
  addMariage: (newMariage: IBL[]) => void;
  addTirage: (newTirage: string[]) => void;
  isAuthenticated: boolean;
  mergeBorletteAndLotto: () => void;
  clearBorlette: () => void;
  clearLotto3: () => void;
  clearLotto4: () => void;
  clearLotto5: () => void;
  clearTirage: () => void;
  clearMariage: () => void;
  updateAuth: (isAuth: boolean) => void;
}

const useLotteryStore = create<IPlay>()(
  persist(
    (set, get) => ({
      Tirage: [],
      Borlette: [],
      Lotto3: [],
      Lotto4: [],
      Lotto5: [],
      Mariage: [],
      MariageAutomatic: [],
      MontantAutomatic: [],
      Reload: "",
      isAuthenticated: false,
      // Reload key to force re-renders
      addReload: () => set(() => ({ Reload: Math.random().toString() })),
      addMariageAutomatic: (newMa: string[]) =>
        set((state) => ({ MariageAutomatic: [...newMa] })),
      addMontantAutomatic: (newMo: string[]) =>
        set((state) => ({ MontantAutomatic: [...newMo] })),
      addBorlette: (newBorlette: IBL[]) =>
        set((state) => ({ Borlette: [...newBorlette] })),
      addLotto3: (newLotto3: IBL[]) =>
        set((state) => ({ Lotto3: [...newLotto3] })),
      addLotto4: (newLotto4: IBL[]) =>
        set((state) => ({ Lotto4: [...newLotto4] })),
      addLotto5: (newLotto5: IBL[]) =>
        set((state) => ({ Lotto5: [...newLotto5] })),
      addMariage: (newMariage: IBL[]) =>
        set((state) => ({ Mariage: [...newMariage] })),
      addTirage: (newTirage: string[]) =>
        set((state) => ({ Tirage: newTirage })),
      mergeBorletteAndLotto: () => set((state) => ({})),
      clearBorlette: () => set((state) => ({ Borlette: [] })),
      clearLotto3: () => set((state) => ({ Lotto3: [] })),
      clearLotto4: () => set((state) => ({ Lotto4: [] })),
      clearLotto5: () => set((state) => ({ Lotto5: [] })),
      clearMariage: () => set((state) => ({ Mariage: [] })),
      clearTirage: () => set((state) => ({ Tirage: [] })),
      updateAuth: (isAuth: boolean) =>
        set((state) => ({ isAuthenticated: isAuth })),
    }),
    {
      name: "Lottery-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useLotteryStore;
