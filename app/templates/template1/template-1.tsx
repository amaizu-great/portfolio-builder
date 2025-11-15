
import About from "./sections/about";
import Skills from "./sections/skills";
import NavBar from "./components/navbar";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import Experience from "./sections/experince";
import HeadingSection from "./sections/heading";
import Testimonies from "./sections/testimonies";
import { PortfolioData } from "@/types/portfolio";

const Template1 = ({portfolio}: {portfolio: PortfolioData}) => {

  const sections = [
    { component: HeadingSection, props: { portfolio } },
    portfolio.about && { component: About, props: { portfolio } },
    (portfolio.profile?.stacks && portfolio.profile?.stacks.length > 0) && { component: Skills, props: { portfolio } },
    (portfolio.experience && portfolio.experience.length > 0) && { component: Experience, props: { portfolio } },
    (portfolio.projects && portfolio.projects.length > 0) && { component: Projects, props: { portfolio } },
    (portfolio.testimonials && portfolio.testimonials.length > 0) && { component: Testimonies, props: { portfolio } },
    { component: Contact, props: { portfolio } },
  ].filter(Boolean);

  return (
    <main className="flex flex-col size-full scrollbar font-poppins">
      <NavBar portfolio={portfolio} />
      <>
        {sections.map((item, index) => {
          if (!item) return null;

          const Component = item.component;
    
          const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-100";
    
          return (
            <Component key={index} {...item.props} className={bgClass} />
          );
        })}
      </>
    </main>
  )
}

export default Template1
