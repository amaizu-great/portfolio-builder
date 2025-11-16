import About from "./sections/about";
import Skills from "./sections/skills";
import NavBar from "./components/navbar";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import Experience from "./sections/experince";
import HeadingSection from "./sections/heading";
import Testimonies from "./sections/testimonies";
import { PortfolioData } from "@/types/portfolio";
import AddPortfolioState from "@/zustand/non-persist/addPortfolio";



const Template1 = () => {
  const {profile, about, experience, projects, testimonials} = AddPortfolioState()
  const sections = [
    { component: HeadingSection },
    (about.image || about.bio) && { component: About },
    (profile?.stacks && profile?.stacks.length > 0) && { component: Skills  },
    (experience && experience.length > 0) && { component: Experience },
    (projects && projects.length > 0) && { component: Projects },
    (testimonials && testimonials.length > 0) && { component: Testimonies },
    (profile.email || profile.phone) && { component: Contact },
  ].filter(Boolean);

  return (
    <main className="flex flex-col size-full scrollbar font-poppins border rounded">
      <NavBar />
      <>
        {sections.map((item, index) => {
          if (!item) return null;

          const Component = item.component;
    
          const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-100";
    
          return (
            <Component key={index}  className={bgClass} />
          );
        })}
      </>
    </main>
  )
}

export default Template1
