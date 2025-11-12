export type PortfolioData = {
  templates: string
  views: number
  profile: profileType
  about?: aboutType
  projects?: projectType[]
  experience?: experienceType[]
  testimonials?: testimonialType[]
  newsletter?: newsletterType
}


export type ImageType = {
  url: string
  publicId?: string
}

export type profileType = {
  email: string;
  phone?: string;
  lastName: string;
  location?: string;
  firstName: string;
  description: string;
  stacks?: stackType[];
  socials?: socialsType;
  profileImage: ImageType;
}

export type stackType = {
  name: string;
  icon: ImageType;
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
  image?: ImageType;
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
  testimony: string;
  image: ImageType;
}

export type newsletterType = {
  email: string;
}
