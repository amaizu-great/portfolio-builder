
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { PortfolioData, aboutType, experienceType, newsletterType, profileType, projectType, testimonialType } from "@/types/portfolio";


type PortfolioStates = {
  profile: profileType
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

  clearAllState: () => void;
};

const portfolioState = create<PortfolioStates>()(
  persist(
    (set) => ({
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

      
      clearAllState: () => set({ profile: {} as profileType, about: {} as aboutType, projects: [], experience: [], testimonials: [], newsletter: {} as newsletterType }),
    }),
    {
      name: "portfolio-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default portfolioState;