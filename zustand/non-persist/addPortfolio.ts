
import { create } from "zustand";
import { PortfolioData, aboutType, experienceType, newsletterType, profileType, projectType, testimonialType } from "@/types/portfolio";


type AddPortfolioStates = {
  views: number;
  profile: profileType;
  setProfile: (value: profileType) => void;
  about: aboutType;
  setAbout: (value: aboutType) => void;
  projects: projectType[];
  setProjects: (value: projectType[]) => void;
  experience: experienceType[];
  setExperience: (value: experienceType[]) => void;
  testimonials: testimonialType[];
  setTestimonials: (value: testimonialType[]) => void;
  newsletter: newsletterType;
  setNewsletter: (value: newsletterType) => void;
  setPortfolioStates: (value: PortfolioData) => void;

  portfolio: PortfolioData;

  clearAllState: () => void;
};

const AddPortfolioState = create<AddPortfolioStates>((set) => ({
  views: 0,
  profile: {} as profileType,
  setProfile: (value: profileType) => set({ profile: value }),
  about: {} as aboutType,
  setAbout: (value: aboutType) => set({ about: value }),
  projects: [] as projectType[],
  setProjects: (value: projectType[]) => set({ projects: value }),
  experience: [] as experienceType[],
  setExperience: (value: experienceType[]) => set({ experience: value }),
  testimonials: [] as testimonialType[],
  setTestimonials: (value: testimonialType[]) => set({ testimonials: value }),
  newsletter: {} as newsletterType,
  setNewsletter: (value: newsletterType) => set({ newsletter: value }), 
  
  setPortfolioStates: (value: PortfolioData) => set({ ...value }),

  portfolio: {id: "", profile: {} as profileType , about: {} as aboutType, projects: [], experience: [], testimonials: [], newsletter: {} as newsletterType, views: 0, template: "template-1" } as PortfolioData,
  
  clearAllState: () => set({ profile: {} as profileType, about: {} as aboutType, projects: [], experience: [], testimonials: [], newsletter: {} as newsletterType }),
}))

export default AddPortfolioState;
