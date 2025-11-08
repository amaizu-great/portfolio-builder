import { create } from "zustand";

//This is file is used for global state that doesn't need to be persisted 

type useLoadingState = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const useLoadingState = create<useLoadingState>((set) => ({
  isLoading: false, 
  setIsLoading: (value) => set({ isLoading: value }),
}));

export default useLoadingState;