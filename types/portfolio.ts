export type PortfolioData = {
  profile: profileType
  about?: aboutType
  projects?: projectType[]
  experience?: experienceType[]
  testimonials?: testimonialType[]
  newsletter?: newsletterType[]
}

export type profileType = {
  email: string;
  phone?: string;
  lastName: string;
  location?: string;
  firstName: string;
  avability?: boolean;
  description: string;
  stacks?: stackType[];
  socials?: socialsType;
  profileImage: string | File | null;
}

export type stackType = {
  name: string;
  icon: string | File;
}

export type socialsType = {
  x?: string;
  quora?: string;
  github?: string;
  gitlab?: string;
  tiktok?: string;
  discord?: string;
  youtube?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
}

export type aboutType = {
  bio: string;
  interests?: string[];
  image?: string | File | null;
}

export type projectType = {
  name: string;
  link?: string;
  github?: string;
  description: string;
  technologies: string[];
}

export type experienceType = {
  role: string;
  link?: string;
  comapany: string;
  duration: duration;
  responsibilities: string[];
}

export type duration = {
  from: Date;
  to: Date | "present";
}

export type testimonialType = {
  name: string;
  company: string;
  testimonial: string;
  image: string | File | null;
}

export type newsletterType = {
  email: string;
  name: string;
  message: string;
}
