
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectType } from '@/types/portfolio';
import { ExternalLinkIcon, GitBranch } from 'lucide-react';
import { splitArrayIntoTwo } from '@/functions/splitArrayInTwo';
import AddPortfolioState from "@/zustand/non-persist/addPortfolio";


const patternStyle: React.CSSProperties = {
  backgroundImage: `
      repeating-linear-gradient(
        0deg,
        #d1d5dc 0 2px,
        transparent 1px 100%
      ),
      repeating-linear-gradient(
        -90deg,
        #d1d5dc 0 2px,
        transparent 1px 100%
      )
    `,
  backgroundSize: "80px 80px", // Adjust the square size
  opacity: 0.15,
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  content: '""',
};

const EachProject = ({project, className}: {project: projectType, className?: string}) => {
  return ( 
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`flex flex-col relative rounded-2xl justify-end p-7 min-h-60 min-w-70 h-fit shadow-md ${className === "bg-gray-100" ? "bg-white" : "bg-gray-100"}`}
    >
      <div style={patternStyle}></div>

      <div className="flex flex-col gap-2 w-full">
        <h2 className="font-tenorsans text-[16px] font-bold bg-linear-to-t from-gray-500 to-gray-800 bg-clip-text text-transparent">{project.name}</h2>
        <p className="text-[12px] text-Grey2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech, idx) => <div key={idx} className="bg-gray-300 px-4 py-1 rounded-full text-[10px] text-Black">{tech}</div>)}
        </div>

        <div className='flex gap-4 mt-2 items-center'>
          {project.link && <Link href={project.link} target="_blank" rel="noopener noreferrer"> <ExternalLinkIcon size={20} className='text-Grey2'/> </Link>}
          {project.github && <Link href={project.github} target="_blank" rel="noopener noreferrer"> <GitBranch size={20} className='text-Grey2'/> </Link>} 
        </div>
      </div>
    </motion.section>
  )
}

const Projects = ({className}: {className?: string}) => {
  const { projects } = AddPortfolioState()
  const [projects1, projects2] = splitArrayIntoTwo(projects || []);
  
  return (
    <section id="projects" className={`flex flex-col gap-4 py-10 px-4 items-center ${className}`}>
      <button className="outline-none text-[10px] px-5 py-1 rounded-full bg-gray-300 w-fit">
        Projects
      </button>

      <div className="flex flex-col w-full gap-5 sm:flex-row">
        <div className="flex flex-col gap-5  md:max-w-[50%]">
          {projects1.map((project, idx) => <EachProject key={idx} project={project} className={className}/>)}
        </div>

        <div className="flex flex-col gap-5 md:max-w-[50%] sm:pt-40">
          {projects2.map((project, idx) => <EachProject key={idx} project={project} className={className}/>)}
        </div>
      </div>
    </section>
  )
}

export default Projects
