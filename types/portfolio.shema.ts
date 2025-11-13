import { z } from "zod";

const imageType = z.object({
  url: z.string(),
  publicId: z.string().optional()
})

// ✅ Base types
export const stackSchema = z.object({
  name: z.string(),
  icon: imageType,
});

export const socialsSchema = z.object({
  x: z.string().optional(),
  quora: z.string().optional(),
  github: z.string().optional(),
  gitlab: z.string().optional(),
  tiktok: z.string().optional(),
  discord: z.string().optional(),
  youtube: z.string().optional(),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
});

// ✅ Profile
export const profileSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  lastName: z.string(),
  location: z.string().optional(),
  firstName: z.string(),
  description: z.string(),
  stacks: z.array(stackSchema).optional(),
  socials: socialsSchema.optional(),
  profileImage: imageType,
});

// ✅ About
export const aboutSchema = z.object({
  bio: z.string(),
  interests: z.array(z.string()).optional(),
  image: imageType,
});

// ✅ Projects
export const projectSchema = z.object({
  name: z.string(),
  link: z.string().optional(),
  github: z.string().optional(),
  description: z.string(),
  technologies: z.array(z.string()),
});

// ✅ Experience
export const durationSchema = z.object({
  from: z.coerce.date(),
  to: z.union([z.coerce.date(), z.literal("present")]),
});

export const experienceSchema = z.object({
  role: z.string(),
  link: z.string().optional(),
  company: z.string(),
  duration: durationSchema,
  responsibilities: z.array(z.string()),
});

// ✅ Testimonial
export const testimonialSchema = z.object({
  name: z.string(),
  company: z.string(),
  testimony: z.string(),
  image: imageType,
});

// ✅ Newsletter
export const newsletterSchema = z.object({
  email: z.string().email(),
});


// ✅ PortfolioData
export const portfolioDataSchema = z.object({
  template: z.string(),
  views: z.number().optional(),
  profile: profileSchema,
  about: aboutSchema.optional(),
  projects: z.array(projectSchema).optional(),
  experience: z.array(experienceSchema).optional(),
  testimonials: z.array(testimonialSchema).optional(),
  newsletter: newsletterSchema.optional(),
});

// ✅ Type inference
export type PortfolioDataSchema = z.infer<typeof portfolioDataSchema>;