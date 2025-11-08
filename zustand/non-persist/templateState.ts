import { create } from "zustand";



type TemplatesState = {
  template: string;
  setTemplate: (value: string) => void;
};

const useTemplatesState = create<TemplatesState>((set) => ({
  template: "template-1",
  setTemplate: (value) => set({ template: value }),
}));

export default useTemplatesState;
