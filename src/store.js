import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBoardStore = create(
  persist(
    (set) => ({
      data: [],
      addBoard: (newItem) => set((state) => ({ data: [...state.data, newItem] })),
      removeBoard: (id) => set((state) => ({ data: state.data.filter((item) => item.id !== id) })),
      updateBoard: (updatedItem) =>
        set((state) => ({
          data: state.data.map((item) => (item.id === updatedItem.id ? { ...item, ...updatedItem } : item)),
        })),
    }),
    {
      name: 'board-storage', // localStorage의 key 값
      storage: createJSONStorage(() => localStorage), //sessionStorage로 바꿀경우 세션 스토리지에 저장됩니다.
    }
  )
);
