import { create } from "zustand";

//This is file is used for global state that doesn't need to be persisted 

type useLoadingState = {
  reFetch: boolean
  isLoading: boolean;
  setReFetch: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
};

const useLoadingState = create<useLoadingState>((set) => ({
  reFetch: false,
  isLoading: false, 
  setReFetch: (value:boolean) => set({ reFetch: value }),
  setIsLoading: (value:boolean) => set({ isLoading: value }),
}));

export default useLoadingState;